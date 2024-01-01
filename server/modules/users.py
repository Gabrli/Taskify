"""
MODULE
    users.py

DESCRIPTION
    Module contains User object which is interface for user management. 
"""
from modules.database import SET_AFTER_INIT
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
            email=email
        )

        model = database.UserModel(
            username=username,
            password=password,
            email=email
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
            email=user_model.email
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
