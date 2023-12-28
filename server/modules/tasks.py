"""
MODULE
    tasks.py
"""
from modules import timestamp
from modules import database
from modules import logs

from fastapi.responses import JSONResponse
from dataclasses import dataclass
from functools import wraps

TASK_VALIDATION_FAIL_RESPONSE = JSONResponse({"status": False, "err_msg": "Task not found..."}, 400)


@dataclass
class Task:
    author: str
    name: str
    description: str
    date_start: int
    date_end: int

    db_key: str = None

    @staticmethod
    def create_task(author_db_key: str, name: str, description: str, date_start: str, date_end: str) -> "Task":
        if not is_task_name_available(author_db_key, name):
            return False

        date_start = timestamp.generate_timestamp(timestamp.read_input_date(date_start))
        date_end = timestamp.generate_timestamp(timestamp.read_input_date(date_end))

        task = Task(
            author=author_db_key,
            name=name,
            description=description,
            date_start=date_start,
            date_end=date_end
        )

        model = database.TaskModel(
            author=author_db_key,
            name=name,
            description=description,
            date_start=date_start,
            date_end=date_end
        )

        db_key = database.tasks_db.insert(model)
        task.db_key = db_key

        logs.tasks_logger.log(db_key, f"Created task for: {author_db_key} ({name})")
        return task

    @staticmethod
    def from_model(task_model: database.TaskModel) -> "Task":
        """ Convert TaskModel to Task object. """
        return Task(
            author=task_model.author,
            name=task_model.name,
            description=task_model.description,
            date_start=task_model.date_start,
            date_end=task_model.date_end,
            db_key=task_model._key
        )
    
    @staticmethod
    def get_all_user_tasks(author_db_key: str) -> list["Task"]:
        """ Return all tasks that belongs to user. """
        user_tasks = []

        for task_model in database.tasks_db.get_all_models():
            if task_model.author == author_db_key:
                user_tasks.append(Task.from_model(task_model))

        return user_tasks
    
    @staticmethod
    def get_task_by_key(db_key: str) -> "Task":
        task_model = database.tasks_db.get(db_key)
        return Task.from_model(task_model)
        

    def edit_task(self, name: str, description: str, date_start: str, date_end: str) -> None:
        """ Update all task's fields. Save changed object to database. """
        self.name = name
        self.description = description
        self.date_start = timestamp.generate_timestamp(timestamp.read_input_date(date_start))
        self.date_end = timestamp.generate_timestamp(timestamp.read_input_date(date_end))
        
        database.tasks_db.update(self.db_key, {
            "name": name,
            "description": description,
            "date_start": self.date_start,
            "date_end": self.date_end
        })

        logs.tasks_logger.log(self.db_key, "Updated task")

    def remove_task(self) -> None:
        """ Remove task from database. """
        database.tasks_db.delete(self.db_key)
        logs.tasks_logger.log(self.db_key, "Removed task")

    def as_dict(self) -> dict:
        """ Cast this object to dictionary. """
        return {
            "name": self.name,
            "description": self.description,
            "date_start": self.date_start,
            "date_end": self.date_end,
            "task_id": self.db_key
        }


def is_task_name_available(author_db_key: str, name: str) -> bool:
    """ Check if task's name is available for specified user. """
    for task in Task.get_all_user_tasks(author_db_key):
        if task.name == name:
            return False
    return True

def validate_task_id(function):
    @wraps(function)
    async def wrapper(*args, **kwargs):
        data = kwargs.get("data")
        
        try:
            Task.get_task_by_key(data.task_id)

        except database.KeyNotFound:
            logs.access_logger.log(data.task_id, "Request pre-validator fail: invalid task id")
            return TASK_VALIDATION_FAIL_RESPONSE
        
        return await function(*args, **kwargs)
    return wrapper

