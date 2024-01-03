import { task } from "../../types/taskInterface";
import DashTask from "./dashTask";
import { useEffect, useState } from "react";
import { userId } from "../formComponents/form";
import axios from "axios";
import DashboardModal from "./dashboardModal";
export default function DashTaskList(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;

  isActive: boolean;
  currentModal: string;
}) {
  const { setIsActive, isActive, setCurrentModal, currentModal } = props;

  const [taskList, setTaskList] = useState<task[]>([]);

  useEffect(() => {
    getTasksFromBackend();
  }, []);

  const getTasksFromBackend = async () => {
    await axios
      .post(`http://127.0.0.1:8000/tasks/getAll`, {
        uid: userId,
      })
      .then((res) => {
        setTaskList(res.data.tasks);
      });
  };

  const addNewTask = async (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => {
    await axios
      .post("http://127.0.0.1:8000/tasks/create", {
        uid: userId,
        name: taskName,
        description: taskDescryption,
        date_start: dateStart,
        date_end: dateEnd,
      })
      .then(() => {
        getTasksFromBackend();
      });
  };

  const editTask = async (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string,
    taskId: string
  ) => {
    await axios
      .post("http://127.0.0.1:8000/tasks/edit", {
        uid: userId,
        task_id: taskId,
        name: taskName,
        description: taskDescryption,
        date_start: dateStart,
        date_end: dateEnd,
      })
      .then(() => {
        getTasksFromBackend();
      });
  };

  const removeTask = async (taskId: string) => {
    await axios
      .post("http://127.0.0.1:8000/tasks/remove", {
        uid: userId,
        task_id: taskId,
      })
      .then(() => {
        getTasksFromBackend();
      });
  };

  return (
    <div className="   flex justify-center items-center">
      <ul className="grid grid-cols-custom-grid pt-24  justify-center items-center w-full">
        {isActive ? (
          <DashboardModal
            setIsActive={setIsActive}
            currentModal={currentModal}
            addNewTask={addNewTask}
            editTask={editTask}
            task={{
              task_id: "00",
              name: "",
              description: "",
              date_start: "",
              date_end: "",
            }}
          />
        ) : (
          ""
        )}
        {taskList.map((task) => {
          return isActive ? (
            <DashboardModal
              setIsActive={setIsActive}
              currentModal={currentModal}
              addNewTask={addNewTask}
              editTask={editTask}
              task={task}
            />
          ) : (
            <DashTask
              key={task.task_id}
              element={task}
              setIsActive={setIsActive}
              setCurrentModal={setCurrentModal}
              removeTask={removeTask}
            />
          );
        })}
      </ul>

      {taskList.length >= 1 ? (
        ""
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 absolute top-1/2 ">
          <p
            className={`text-stone-500 ${
              isActive ? "hidden" : ""
            } font-semibold`}
          >
            You don't have any task !
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsActive(true);
              setCurrentModal("create_modal");
            }}
            className={`font-semibold ${
              isActive ? "hidden" : ""
            }  text-white rounded bg-fuchsia-900 pl-2 pr-2 pt-1 pb-1`}
          >
            Create new
          </button>
        </div>
      )}
    </div>
  );
}
