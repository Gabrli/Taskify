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


class _Auth:
    uid: str


# -- ACCOUNTS --

class M_CreateAccount(BaseModel):
    username: str
    password: str
    email: str

class M_ChangeAccountPassword(_Auth, BaseModel):
    new: str

class M_DeleteAccount(_Auth, BaseModel):
    pass

class M_AccountLogin(BaseModel):
    username: str
    password: str


# -- TASKS --

class M_CreateTask(_Auth, BaseModel):
    name: str
    description: str
    date_start: str
    date_end: str

class M_EditTask(_Auth, BaseModel):
    task_id: str
    name: str
    description: str
    date_start: str
    date_end: str

class M_RemoveTask(_Auth, BaseModel):
    task_id: str

class M_GetAllTasks(_Auth, BaseModel):
    pass 

class M_GetTask(_Auth, BaseModel):
    task_id: str
