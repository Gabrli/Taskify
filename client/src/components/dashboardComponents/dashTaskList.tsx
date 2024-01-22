
import DashTask from "./dashTask";
import { createContext } from "react";
import { task } from "../../types/taskInterface";
import DashboardModal from "./dashboardModal";
import { useDashTaskListLogic } from "../../hooks/usedashTaskListLogic";
import DashSearchBox from "./dashSearchBox";



const isWrongContext = createContext(false);
export default function DashTaskList(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  isActive: boolean;
  currentModal: string;
  setCounter: React.Dispatch<React.SetStateAction<number>>
  setTaskList: React.Dispatch<React.SetStateAction<task[]>>
}) {
  const { setIsActive, isActive, setCurrentModal, currentModal, setCounter, setTaskList } = props;
  const {
    isWrong,
    taskList,
    removeTask,
    editTask,
    addNewTask,
    setIsWrong,
    
  } = useDashTaskListLogic(setCounter, setTaskList)
  

  
   

  return (
    <div className=" w-4/5   flex flex-col justify-center items-center">
      <DashSearchBox/>
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
                isStarted:false
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
          <div className="flex flex-col items-center  justify-center gap-5 absolute top-1/2 ">
            <p
              className={`text_dash_info ${
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
              className={`btn_new font-semibold transition duration-700 ease-in-out  ${
                isActive ? "hidden" : ""
              }  text-white rounded pl-6 pr-6 pt-3 pb-3`}
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
