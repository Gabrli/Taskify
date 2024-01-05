import { task } from "../../types/taskInterface";
import DashTask from "./dashTask";
import { useEffect, useState } from "react";

import DashboardModal from "./dashboardModal";
import {
  TASK_QUERY,
  ADD_TASK_QUERY,
  EDIT_TASK_QUERY,
  REMOVE_TASK_QUERY,
} from "../../helpers/tasksQueries";
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
    TASK_QUERY().then((res) => {
      setTaskList(res.data.tasks);
    });
  };

  const addNewTask = async (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => {
    ADD_TASK_QUERY(taskName, taskDescryption, dateStart, dateEnd);
    getTasksFromBackend();
  };

  const editTask = async (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string,
    taskId: string
  ) => {
    EDIT_TASK_QUERY(taskName, taskDescryption, dateStart, dateEnd, taskId);
    getTasksFromBackend();
  };

  const removeTask = async (taskId: string) => {
    REMOVE_TASK_QUERY(taskId);
    getTasksFromBackend();
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
