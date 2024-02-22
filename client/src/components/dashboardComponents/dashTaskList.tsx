import DashTask from "./dashTask";
import { createContext, useContext, useState } from "react";
import { ITask } from "../../types/ITask";
import DashboardModal from "./dashboardModal";
import { useDashTaskListLogic } from "../../hooks/LogicComponentsHooks/usedashTaskListLogic";
import DashSearchBox from "./dashSearchBox";
import { isMobileContext } from "../pages/dashboardPage";
import { themeContext } from "../../App";

const isWrongContext = createContext(false);
export default function DashTaskList(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;

  isActive: boolean;

  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setIsActive, isActive, setCounter, setTaskList,setIsLoading, setIsAlert } = props;
  const isMobile = useContext(isMobileContext);
  const theme = useContext(themeContext)
  const [isWrong, setIsWrong] = useState(false);
  const { taskList, removeTask, editTask, addNewTask } = useDashTaskListLogic(
    setCounter,
    setTaskList,
    setIsWrong,
    setIsLoading
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
            className={`taskList pt-24 justify-center pl-4 gap-2 w-full`}
            >
            {isActive ? (
              <DashboardModal
                setIsActive={setIsActive}
                addNewTask={addNewTask}
                setIsWrong={setIsWrong}
                setIsAlert={setIsAlert}
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
                className={`text-stone-600 ${
                  isActive ? "hidden" : ""
                } font-semibold text-2xl`}
              >
                You don't have any tasks !
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsActive(true);
                }}
                className={`btn_new font-semibold text-xl transition duration-700 ease-in-out  ${
                  isActive ? "hidden" : ""
                }  ${theme === "dark" ? "text-text_dark" :"text-text_light"} rounded pl-8 pr-8 pt-3 pb-3`}
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
