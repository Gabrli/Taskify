"""
MODELS
    Database table models.

DESCRIPTION
  Required attributes
    Model must contain three special attributes:
      `__tablename__` - It is used to identify tables.
      `__filepath__` - Relative path to table's save file.
      `__keyprovider__` - Explained in section below.

  Key provider
    Model's key provider defines which value should be hashed to create unique key.
    If key provider is set to "username", model's username attribute will be hashed
      to generate a database key.
    If key provider is set to KEY_AS_UUID4, new uuid4 value will be generated and set as key.
    If key provider starts with !, following name will be used as attribute without
      hashing. It is useful when different information about single object is spread
      between multiple databases. It works like foreign key.
    If key provider includes "+", values of multiple attributes will be concatenated to
      and then hashed. 
    
    Key provider can have ! and + at once. (`"!attr_a+attr_b"`) 
      
  Define keys
    To define key in model create class variable:
      `key_name: datatype`
    or, to make it optional:
      `key_name: datatype = NOT_REQUIRED`
"""
from dataclasses import dataclass


NOT_REQUIRED = "_NOTREQ"
KEY_AS_UUID4 = "_UUID4KEY"


@dataclass
class UserModel:
    __tablename__ = "users"
    __filepath__ = "./db/users.json"
    __keyprovider__ = "username"
    username: str
    password: str
    email: str
    tasks: list
    folders: list


@dataclass
class TaskModel:
    __tablename__ = "tasks"
    __filepath__ = "./db/tasks.json"
    __keyprovider__ = KEY_AS_UUID4
    author: str
    name: str
    description: str
    date_start: int
    date_end: int
    is_done: bool


@dataclass
class FolderModel:
  __tablename__ = "folders"
  __filepath__ = "./db/folders.json"
  __keyprovider__ = KEY_AS_UUID4
  author: str
  name: str
  color: str
  task_ids: list
