from models.db_models import FolderModel

from modules import timestamp
from modules import database
from modules import users
from modules import logs

from fastapi.responses import JSONResponse
from dataclasses import dataclass, asdict
from functools import wraps


FOLDER_VALIDATION_FAIL = JSONResponse({"status": False, "err_msg": "Folder not found.."}, 400)


@dataclass
class Folder:
    key: str
    author: str
    name: str
    color: str
    task_ids: list
    user_object: users.User = None
    
    @staticmethod
    def new_folder(user_object: users.User, name: str, color: str) -> "Folder":
        """ Create new folder for user. """
        author = user_object.db_key
        
        model = FolderModel(
            author, name, color, []
        )
        
        key = database.folders_db.insert(model)
        
        folder = Folder(
            key, author, name, color, [], user_object
        )
        
        user_object.add_folder(key)
        
        logs.users_logger.log(author, f"Created folder: {name} ({key})")
        return folder
    
    @staticmethod
    def from_key(folder_key: str) -> "Folder":
        try:
            model = database.folders_db.get(folder_key)
        except database.KeyNotFound:
            return None
        
        return Folder(key=folder_key, **asdict(model))
    
    def remove_folder(self):
        for task_id in self.task_ids:
            self.user_object.remove_task(task_id)
        
        self.user_object.remove_folder(self.key)
        database.folders_db.delete(self.key)
        logs.users_logger.log(self.author, f"Removed folder: {self.name} ({self.key})")
    
    def update_metadata(self, new_name: str, new_color: str) -> None:
        """ Update folder's name and color. """
        self.name = new_name
        self.color = new_color
        
        database.folders_db.update(self.key, {"name": new_name})
        database.folders_db.update(self.key, {"color": new_color})
        
        logs.users_logger.log(self.author, f"Updated folder: {self.key} (name={self.name}, color={self.color})")
        
    def add_task(self, task_id: str) -> bool:
        """ Add new task to folder, returns False if this task is already on list, True on success. """
        if task_id in self.task_ids:
            logs.users_logger.log(self.author, f"Cannot add task to folder: {self.key} (task already in folder)")
            return False
        
        self.task_ids.append(task_id)
        database.folders_db.update(self.key, {"task_ids": task_id}, iter_append=True)
        logs.users_logger.log(self.author, f"Added task: {task_id} to folder: {self.key}")
        return True
    
    def remove_task(self, task_id: str) -> bool:
        """ Removed task from folder. Returns False if task was not found, True on success. """
        if task_id not in self.task_ids:
            logs.users_logger.log(self.author, f"Cannot remove task: {task_id} from folder: {self.key} (task not found in folder)")
            return False

        self.task_ids.remove(task_id)
        database.folders_db.update(self.key, {"task_ids": task_id}, iter_pop=True)
        logs.users_logger.log(self.author, f"Removed task: {task_id} from folder: {self.key}")
        return True
    
    def to_sendable(self) -> dict:
        """ Convert data in this object into dictionary. """
        data = asdict(self)
        data.pop("user_object")
        data.pop("key")
        return data
    

def validate_folder_id(function):
    @wraps(function)
    async def wrapper(*args, **kwargs):
        data = kwargs.get("data")
        
        try:
            user = users.User.get_user_by_key(data.uid)
            if data.folder_key not in user.folders:
                logs.access_logger.log(data.uid, f"Request pre-validator fail: invalid folder_key: {data.folder_key}")
                return FOLDER_VALIDATION_FAIL

        except database.KeyNotFound:
            logs.access_logger.log(data.uid, "Request pre-validator fail: invalid uid")
            return users.USER_VALIDATION_FAIL_RESPONSE
        
        return await function(*args, **kwargs)
    return wrapper
    