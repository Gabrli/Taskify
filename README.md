<h1>Taskfiy - Inteligent task planner </h1>

---

# LIVE:

- https://taskify-seven-phi.vercel.app/

---

### :man_technologist:

| AUTORS                                                     | FRONTEND                              | BACKEND                               |
|:----------------------------------------------------------:|:-------------------------------------:|:-------------------------------------:|
| **GabrielJuniorDev** ([Gabrli](https://github.com/Gabrli)) | ![100%](https://progress-bar.dev/100) | ![0%](https://progress-bar.dev/0)     |
| **gental-py** ([gental-py](https://github.com/gental-py/)) | ![0%](https://progress-bar.dev/0)     | ![100%](https://progress-bar.dev/100) |

---

## :hammer_and_wrench: Tech stack

<h1>Frontend</h1>

- <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="20" height="20"/>&nbsp; React + Vite
- <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="20" height="20"/>&nbsp; TypeScript
- <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg"  title="CSS3" alt="CSS" width="20" height="20"/>&nbsp; Tailwindcss
- <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain-wordmark.svg"  title="HTML" alt="HTML5" width="20" height="20"/>&nbsp; HTML5

<h1>Backend</h1>

- <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original-wordmark.svg"  title="Python3" alt="Python3" width="20" height="20"/>&nbsp; Python3
- <img src="https://github.com/devicons/devicon/blob/master/icons/fastapi/fastapi-original-wordmark.svg"  title="FastAPI" alt="FastAPI" width="20" height="20"/>&nbsp; FastAPI

---

### Other tools

- <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-plain-wordmark.svg"  title="GIT" alt="GIT" width="20" height="20"/>  Git - version control system

---

### API Server

##### Response:

Every response is in `JSON` format and has a `"status"` key with a boolean value.

When the value is `True`, the action succeeded,

  and additional data may be passed by response

  (check the DATA ON SUCCESS column for details).

When the value is `False`, the required action failed,

  and the response will contain `"err_msg"` with

  an error message in a displayable form.

**All endpoints are POST methods**

| **ENDPOINT**               | **INPUT DATA**                                                   | **DATA ON SUCCESS**                                                                                 |
| -------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `/accounts/login`          | `username`, `password`                                           | uid: `str`                                                                                          |
| `/accounts/register`       | `username`, `password`, `email`                                  | uid: `str`                                                                                          |
| `/accounts/delete`         | `uid`                                                            | -                                                                                                   |
| `/accounts/changePassowrd` | `uid`, `new`                                                     | -                                                                                                   |
| `/tasks/create`            | `uid`, `name`, `description`, `date_start`, `date_end`           | task_id: `str`                                                                                      |
| `/tasks/edit`              | `uid`, `task_id` `name`, `description`, `date_start`, `date_end` | -                                                                                                   |
| `/tasks/remove`            | `uid`, `task_id`                                                 | -                                                                                                   |
| `/tasks/getAll`            | `uid`                                                            | tasks: `List[object]`<br/>[{`name`, `description`, `date_start`, `date_end`, `task_id`}, {...},...] |
| `/tasks/getTask`           | `uid`, `task_id`                                                 | task: `object`<br/>{`name`, `description`, `date_start`, `date_end`, `task_id`}                     |

##### Run server:

1. Make sure You have `Python` and `pip` installed.

2. Install all requirements: `pip3 install -r requirements.txt` 

3. Run API locally:
   
   `python3 -m uvicorn api:api`

4. Deploy API:
   
   `python3 -m uvicorn api:api --host 0.0.0.0 --port YOUR_PORT`