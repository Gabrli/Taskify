
import DashTask from "./dashTask";
import { createContext } from "react";

import DashboardModal from "./dashboardModal";
import { useDashTaskListLogic } from "../../hooks/usedashTaskListLogic";



const isWrongContext = createContext(false);
export default function DashTaskList(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  isActive: boolean;
  currentModal: string;
  setCounter: React.Dispatch<React.SetStateAction<number>>
}) {
  const { setIsActive, isActive, setCurrentModal, currentModal, setCounter } = props;
  const {
    isWrong,
    taskList,
    removeTask,
    editTask,
    addNewTask,
    setIsWrong,
    
  } = useDashTaskListLogic(setCounter)
  

  
   

  return (
    <div className="   flex justify-center items-center">
      <isWrongContext.Provider value={isWrong}>
        <ul className="flex gap-6 pt-24  justify-center items-center w-full">
          {isActive ? (
            <DashboardModal
              setIsActive={setIsActive}
              currentModal={currentModal}
              addNewTask={addNewTask}
              editTask={editTask}
              setIsWorng={setIsWrong}
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
                setIsWorng={setIsWrong}
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
          <div className="flex flex-col items-center justify-center gap-5 absolute top-1/2 ">
            <p
              className={`text-stone-500 ${
                isActive ? "hidden" : ""
              } font-semibold text-2xl`}
            >
              You don't have any task !
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsActive(true);
                setCurrentModal("create_modal");
              }}
              className={`btn_new font-semibold transition duration-700 ease-in-out hover:bg-fuchsia-800 ${
                isActive ? "hidden" : ""
              }  text-white rounded bg-fuchsia-900 pl-4 pr-4 pt-2 pb-2`}
            >
              Create new
            </button>
          </div>
        )}
      </isWrongContext.Provider>
    </div>
  );
}

export { isWrongContext };
