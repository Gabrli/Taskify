from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi import FastAPI, Request

from models import request_models
from modules import timestamp
from modules import database
from modules import users
from modules import tasks
from modules import logs


api = FastAPI()
api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def generate_response_and_log(
        request: Request,
        status: bool,
        log_message: str,
        err_msg: str = None,
        additional_data: dict = None
    ) -> JSONResponse:
    """ Generate JSONResponse object and save log. """
    logs.access_logger.log(request, f"<{status}> " + log_message)

    data = {"status": status}

    if additional_data:
        data.update(additional_data)
    if not status:
        data["err_msg"] = err_msg if err_msg else "error"

    status_code = 200 if status else 400
    return JSONResponse(data, status_code)



# -- ACCOUNTS -- #


@api.post("/accounts/login")
async def login(data: request_models.M_AccountLogin, request: Request) -> JSONResponse:
    try:
        account = users.User.get_user_by_name(data.username)

    except database.KeyNotFound:
        return generate_response_and_log(
            request,
            False,
            f"Login for: {data.username} failed (invalid username)",
            "Invalid username."
        )

    if not account.check_password(data.password):
        return generate_response_and_log(
            request,
            False,
            f"Login for: {account.db_key} failed (invalid password)",
            "Invalid password.",
        )
    
    return generate_response_and_log(
        request,
        True,
        f"Successful login for: {account.db_key}",
        additional_data={"uid": account.db_key}
    )

@api.post("/accounts/register")
async def register(data: request_models.M_CreateAccount, request: Request) -> JSONResponse:
    if not users.is_username_available(data.username):
        return generate_response_and_log(
            request,
            False,
            f"Cannot create account: username is already taken: {data.username}",
            "Username already taken."
        )
    
    account = users.User.create_user(data.username, data.password, data.email)

    return generate_response_and_log(
        request,
        True,
        "Created account.",
        "Account created",
        additional_data={"uid": account.db_key}
    )

@api.post("/accounts/delete")
@users.validate_user_id
async def delete_account(data: request_models.M_DeleteAccount, request: Request) -> JSONResponse:
    account = users.User.get_user_by_key(data.uid)
    account.delete_user()

    return generate_response_and_log(
        request,
        True,
        f"Removed account: {data.uid}"
    )

@api.post("/accounts/changePassword")
@users.validate_user_id
async def change_password(data: request_models.M_ChangeAccountPassword, request: Request) -> JSONResponse:
    account = users.User.get_user_by_key(data.uid)
    account.change_password(data.new)

    return generate_response_and_log(
        request,
        True,
        f"Password updated for: {data.uid}"
    )


# -- TASKS --


@api.post("/tasks/create")
@users.validate_user_id
async def create_task(data: request_models.M_CreateTask, request: Request) -> JSONResponse:
    if timestamp.read_input_date(data.date_start) > timestamp.read_input_date(data.date_end):
        return generate_response_and_log(
            request,
            False,
            f"Cannot create task for: {data.uid} (date_end < date_start)",
            "Invalid task's start and end dates."
        )
    
    task = tasks.Task.create_task(data.uid, data.name, data.description, data.date_start, data.date_end)
    if not task:
        return generate_response_and_log(
            request,
            False,
            f"Cannot create task for: {data.uid} (task name taken)",
            "Task's name already in use."
        )

    return generate_response_and_log(
        request,
        True,
        f"Task created: {task.db_key} for: {data.uid}",
        additional_data={"task_id": task.db_key}
    )

@api.post("/tasks/edit")
@users.validate_user_id
@tasks.validate_task_id
async def edit_task(data: request_models.M_EditTask, request: Request) -> JSONResponse:
    task = tasks.Task.get_task_by_key(data.task_id)
    task.edit_task(
        name=data.name,
        description=data.description,
        date_start=data.date_start,
        date_end=data.date_end
    )

    return generate_response_and_log(
        request,
        True,
        f"Edited task: {data.task_id} for: {data.uid}"
    )

@api.post("/tasks/remove")
@users.validate_user_id
@tasks.validate_task_id
async def remove_task(data: request_models.M_RemoveTask, request: Request) -> JSONResponse:
    task = tasks.Task.get_task_by_key(data.task_id)
    task.remove_task()

    return generate_response_and_log(
        request,
        True,
        f"Removed task: {data.task_id} for: {data.uid}"
    )

@api.post("/tasks/getAll")
@users.validate_user_id
async def get_all_tasks(data: request_models.M_GetAllTasks, request: Request) -> JSONResponse:   
    user_tasks = [t.as_dict() for t in tasks.Task.get_all_user_tasks(data.uid)]

    return generate_response_and_log(
        request,
        True,
        f"Passed all user's tasks for: {data.uid}",
        additional_data={"tasks": user_tasks}
    )
    
@api.post("/tasks/getTask")
@users.validate_user_id
@tasks.validate_task_id
async def get_task(data: request_models.M_GetTask, request: Request) -> JSONResponse:
    task = tasks.Task.get_task_by_key(data.task_id)
    task_data = task.as_dict()

    if task.author != data.uid:
        return generate_response_and_log(
            request,
            False,
            f"Cannot pass task data: {data.task_id} for: {data.uid} (user is not owner)",
            "Task not found..."
        )

    return generate_response_and_log(
        request,
        True,
        f"Passed task: {data.task_id} data for: {data.uid}",
        additional_data={"task": task_data}
    )
