from modules.database import SET_AFTER_INIT
from modules.tasks import Task
from modules import database
from modules import logs

from fastapi.responses import JSONResponse
from dataclasses import dataclass
from functools import wraps
import hashlib
import bcrypt

USER_VALIDATION_FAIL_RESPONSE = JSONResponse({"status": False, "err_msg": "User not found..."}, 400)


def create_db_key(username: str) -> str:
    """ Hash username using SHA1 algorithm. """
    return hashlib.sha1(username.encode()).hexdigest()

def is_username_available(username: str) -> bool:
    """ Check if any saved user has provided username. """
    return not create_db_key(username) in database.users_db.get_all_keys()


@dataclass
class User:
    username: str
    password: str
    email: str
    tasks: list
    folders: list

    # Automatically set after initialization.
    db_key: str = SET_AFTER_INIT

    @staticmethod
    def create_user(username: str, password: str, email: str) -> "User":
        """ Create account and save it to database if name is available. """
        if not is_username_available(username):
            return False
        
        user = User(
            username=username,
            password=password,
            email=email,
            tasks=[],
            folders=[]
        )

        model = database.UserModel(
            username=username,
            password=password,
            email=email,
            tasks=[],
            folders=[]
        )

        db_key = database.users_db.insert(model)
        user.db_key = db_key

        logs.users_logger.log(db_key, f"Created account: {username}")
        return user
    
    @staticmethod
    def from_model(user_model: database.UserModel) -> "User":
        """ Convert database.UserModel into User(). """
        return User(
            username=user_model.username,
            password=user_model.password,
            email=user_model.email,
            tasks=user_model.tasks,
            folders=user_model.folders
        )

    @staticmethod
    def get_user_by_name(username: str) -> "User":
        """ Get User object from it's name. Raises database.KeyNotFound when user not found. """
        if is_username_available(username):
            raise database.KeyNotFound
        return User.from_model(database.users_db.get(create_db_key(username)))

    @staticmethod
    def get_user_by_key(key: str) -> "User":
        """ Get User object from it's key. Raises database.KeyNotFound when user not found.  """
        if key not in database.users_db.get_all_keys():
            raise database.KeyNotFound
        return User.from_model(database.users_db.get(key))
    
    def __post_init__(self) -> None:
        self.db_key = create_db_key(self.username)

    def __repr__(self) -> str:
        return f"<USER: username={self.username} email={self.email} dbKey={self.db_key}>"

    def check_password(self, provided_password: str) -> bool:
        """ Check if provided_password matches encrypted password. """
        return bcrypt.checkpw(provided_password.encode(), self.password.encode())

    def change_password(self, new_password: str) -> bool:
        """ Change password in database. """
        database.users_db.update(self.db_key, {"password": new_password})
        logs.users_logger.log(self.db_key, f"Password changed for: {self.username}")
        return True
    
    def delete_user(self) -> None:
        """ Remove user from database. """
        database.users_db.delete(self.db_key)

    def add_task(self, task_id: str) -> bool:
        """ Add new task to user's list. Returns False if task is already on the list, True on success. """
        if task_id in self.tasks:
            logs.users_logger.log(self.db_key, f"Cannot add new task: {task_id} (task already on list)")
            return False
        
        self.tasks.append(task_id)
        database.users_db.update(self.db_key, {"tasks": task_id}, iter_append=True)
        logs.users_logger.log(self.db_key, f"Added new task: {task_id}")
        return True
    
    def remove_task(self, task_id: str) -> bool:
        """ Remove task form user's list. Returns True on success, False if task was not found. """
        if task_id not in self.tasks:
            logs.users_logger.log(self.db_key, f"Cannot remove task: {task_id} from user's list (task not found)") 
            return False
        
        self.tasks.remove(task_id)
        database.users_db.update(self.db_key, {"tasks": task_id}, iter_pop=True)
        logs.users_logger.log(self.db_key, f"Removed task: {task_id} from user's list.")
        return True

    def get_all_tasks(self) -> list[Task]:
        """ Return all tasks that belongs to user. """
        return [Task.get_task_by_key(task_id) for task_id in self.tasks]

    def add_folder(self, folder_key: str) -> bool:
        """ Add new folder to user's list. Returns False if folder already on list, True on success. """
        if folder_key in self.folders:
            logs.users_logger.log(self.db_key, f"Cannot add folder: {folder_key} (folder already on users's list)")
            return False
        
        self.folders.append(folder_key)
        database.users_db.update(self.db_key, {"folders": folder_key}, iter_append=True)
        logs.users_logger.log(self.db_key, f"Added folder: {folder_key} to user's list.")
        return True
    
    def remove_folder(self, folder_key: str) -> bool:
        """ Remove folder form users's list. Returns False if folder was not found, True on success. """
        if folder_key not in self.folders:
            logs.users_logger.log(self.db_key, f"Cannot remove folder: {folder_key} (folder not found on list)")
            return False
    
        self.folders.remove(folder_key)
        database.users_db.update(self.db_key, {"folders": folder_key}, iter_pop=True)
        logs.users_logger.log(self.db_key, f"Removed folder: {folder_key} from users's list.")
        return True


def validate_user_id(function):
    @wraps(function)
    async def wrapper(*args, **kwargs):
        data = kwargs.get("data")
        
        try:
            User.get_user_by_key(data.uid)

        except database.KeyNotFound:
            logs.access_logger.log(data.uid, "Request pre-validator fail: invalid uid")
            return USER_VALIDATION_FAIL_RESPONSE
        
        return await function(*args, **kwargs)
    return wrapper
