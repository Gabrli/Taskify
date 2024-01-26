import DashTask from "./dashTask";
import { createContext, useContext, useState } from "react";
import { ITask } from "../../types/ITask";
import DashboardModal from "./dashboardModal";
import { useDashTaskListLogic } from "../../hooks/LogicComponentsHooks/usedashTaskListLogic";
import DashSearchBox from "./dashSearchBox";
import { isMobileContext } from "../pages/dashboardPage";

const isWrongContext = createContext(false);
export default function DashTaskList(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;

  isActive: boolean;

  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const { setIsActive, isActive, setCounter, setTaskList } = props;
  const isMobile = useContext(isMobileContext);
  const [isWrong, setIsWrong] = useState(false);
  const { taskList, removeTask, editTask, addNewTask } = useDashTaskListLogic(
    setCounter,
    setTaskList,
    setIsWrong
  );

  return (
    <isWrongContext.Provider value={isWrong}>
      
        <div
          className={` ${
            isMobile ? "w-full" : "w-4/5"
          }  flex flex-col justify-center items-center`}
        >
          <DashSearchBox />

          <ul
            className={`flex gap-6 pt-24 ${
              isMobile ? "flex-col" : ""
            } justify-center items-center w-full`}
          >
            {isActive ? (
              <DashboardModal
                setIsActive={setIsActive}
                addNewTask={addNewTask}
                setIsWrong={setIsWrong}
              />
            ) : (
              ""
            )}
            {taskList.map((task) => {
              return (
                <DashTask
                  key={task.task_id}
                  element={task}
                  removeTask={removeTask}
                  editTask={editTask}
                  setIsWrong={setIsWrong}
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
                }}
                className={`btn_new font-semibold transition duration-700 ease-in-out  ${
                  isActive ? "hidden" : ""
                }  text-white rounded pl-6 pr-6 pt-3 pb-3`}
              >
                Create new
              </button>
            </div>
          )}
        </div>
      
    </isWrongContext.Provider>
  );
}

export { isWrongContext };
