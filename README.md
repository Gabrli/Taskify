<h1>Taskfiy - Inteligent task planner </h1>

---
<h2>LIVE:</h2>

- https://taskify-seven-phi.vercel.app/
---
# ABOUT PROJECT :bulb: : 
- <h3>:hammer: Why did we build this project ?</h3> Our motivation we found in the problem while planing our tasks. We needed something that would plan and calculate stages of our tasks for us.
- <h3>:technologist: How we found the solution ? </h3> So, we thought that is possible create a function which based on chooised by user <strong> start date</strong> and <strong> end date</strong> with help <strong> current date</strong>, will be calculate all needed informations and show data on charts. To sum up, the most important thing in all this are calculations based on <strong>3 dates</strong> and after all calculations our application show user his <strong> progress, finished days, future days and how much he must to do </strong> in chooised task.



---

### :raising_hand_man:

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

<h2>SCREENS:</h2>
<h3>1.Landing page: </h3>
- Dark mode: 
<img src="https://github.com/Gabrli/Taskify/assets/110058841/d322cac8-bece-43a8-90c2-c797ea063102"/>

- Light mode:
<img src="https://github.com/Gabrli/Taskify/assets/110058841/40c78426-4175-4efd-9cc8-11199aa0babc"/>



<h3>2.Dashboard:</h3>
- Dark mode:
<img src="https://github.com/Gabrli/Taskify/assets/110058841/93b980cb-c8b4-4de2-9ce6-3b2975dfcc8e"/>

- Light mode:
<img src="https://github.com/Gabrli/Taskify/assets/110058841/1f8b49d6-13ed-4af0-a2e8-e329cf9d99a8"/>


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

(except `/accounts/getAllNames` which is **GET**)

| **ENDPOINT**               | **INPUT DATA**                                                   | **DATA ON SUCCESS**                                                                                 |
| -------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `/accounts/login`          | `username`, `password`                                           | uid: `str`                                                                                          |
| `/accounts/register`       | `username`, `password`, `email`                                  | uid: `str`                                                                                          |
| `/accounts/delete`         | `uid`                                                            | -                                                                                                   |
| `/accounts/changePassword` | `uid`, `new`                                                     | -                                                                                                   |
| `/accounts/getAllNames`    |                                                                  | names: `List[string]`                                                                               |
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
