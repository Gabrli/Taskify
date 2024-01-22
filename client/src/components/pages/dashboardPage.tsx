import { createContext, useEffect, useState } from "react";
import DashboardHeader from "../dashboardComponents/dashboardHeader";

import DashTaskList from "../dashboardComponents/dashTaskList";
import { authToken } from "../../auth/token";
import { userId } from "../../auth/checkingIDFromDB";
import { task } from "../../types/taskInterface";

const taskListContext = createContext<task[]>([])
const themeContext = createContext("");
const counterNotyficationsContext = createContext(0);

export default function DashboardPage() {
  const [theme, setTheme] = useState("dark");
  const [isActive, setIsActive] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [counterNotyfications, setCounterNotyfications] = useState(0);
  const [taskList, setTaskList] = useState<task[]>([]);

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    const localId = localStorage.getItem("uid")
  
    if(localToken && localId){
      authToken.token = true
      userId.id = localId
      
    
    } else authToken.token = false
  })

  return (
    <div
      className={`dashboard_page  ${
        theme === "dark" ? "dark" : "light"
      } h-screen `}
    >
      <themeContext.Provider value={theme}>
        <counterNotyficationsContext.Provider value={counterNotyfications}>
         <taskListContext.Provider value={taskList}>
         <DashboardHeader
            setTheme={setTheme}
            setCurrentModal={setCurrentModal}
            setIsActive={setIsActive}
          />
        
          <DashTaskList
            isActive={isActive}
            setIsActive={setIsActive}
            setCurrentModal={setCurrentModal}
            currentModal={currentModal}
            setCounter={setCounterNotyfications}
            setTaskList={setTaskList}
          />
         </taskListContext.Provider>
        </counterNotyficationsContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export { themeContext, counterNotyficationsContext, taskListContext };
