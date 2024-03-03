"""
MODELS
    POST requests data models.

DESCRIPTION
  Naming
    Request model should start with `M_` representing `Model`
    and name of request they are used in. For easier code modifications
    Each POST request should have its own model even if it has the same
    attributes as other.

  Keys
    Requests sent from client must contain exactly the same keys.
      `key_name: datatype`
    or, to make it optional
      `key_name: Optional[datatype]`

  _Auth
    The _Auth class contains data used in authorization process.
    You can inherit from this class to ensure auth data in request.
"""
from pydantic import BaseModel
from typing import Optional


class _Auth(BaseModel):
    uid: str


# -- ACCOUNTS --

class M_CreateAccount(BaseModel):
    username: str
    password: str
    email: str

class M_ChangeAccountPassword(_Auth):
    new: str

class M_DeleteAccount(_Auth):
    pass

class M_AccountLogin(BaseModel):
    username: str
    password: str


# -- TASKS --

class M_CreateTask(_Auth):
    name: str
    description: str
    date_start: str
    date_end: str
    folder_key: Optional[str]

class M_EditTask(_Auth):
    task_id: str
    name: str
    description: str
    date_start: str
    date_end: str
    is_done: bool

class M_RemoveTask(_Auth):
    task_id: str

class M_GetAllTasks(_Auth):
    pass 

class M_GetTask(_Auth):
    task_id: str


# -- FOLDERS -- 

class M_CreateFolder(_Auth):
    name: str
    color: str

class M_GetFolder(_Auth):
    folder_key: str

class M_UpdateFolder(_Auth):
    folder_key: str
    new_name: str
    new_color: str

class M_RemoveFolder(_Auth):
    folder_key: str

class M_AddTaskToFolder(_Auth):
    folder_key: str
    task_id: str

class M_RemoveTaskFromFolder(_Auth):
    folder_key: str
    task_id: str
