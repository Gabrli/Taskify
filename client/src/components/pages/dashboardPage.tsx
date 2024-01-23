import { createContext, useEffect, useState } from "react";
import DashboardHeader from "../dashboardComponents/dashboardHeader";

import DashTaskList from "../dashboardComponents/dashTaskList";
import { authToken } from "../../auth/token";
import { userId } from "../../auth/checkingIDFromDB";
import { task } from "../../types/taskInterface";
import DashFooter from "../dashboardComponents/dashFooter";


const taskListContext = createContext<task[]>([])
const themeContext = createContext("");
const counterNotyficationsContext = createContext(0);
const isMobileContext = createContext(false)
const charstBoxIsActiveContext = createContext(false)

export default function DashboardPage() {
  const [theme, setTheme] = useState("dark");
  const [isActive, setIsActive] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [counterNotyfications, setCounterNotyfications] = useState(0);
  const [taskList, setTaskList] = useState<task[]>([]);
  const [isMobile, setIsMobile] = useState(false)
  const [charstBoxIsActive, setChartsBoxIsActive] = useState(false)

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    const localId = localStorage.getItem("uid")
  
    if(localToken && localId){
      authToken.token = true
      userId.id = localId
      
    
    } else authToken.token = false
  })

  window.addEventListener('resize', () => {
    if(window.innerWidth <= 1050){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  })

  return (
    <div
      className={`dashboard_page  ${
        theme === "dark" ? "dark" : "light"
      } min-h-screen ${isMobile ? "pb-16" : ""}`}
    >
      <themeContext.Provider value={theme}>
        <counterNotyficationsContext.Provider value={counterNotyfications}>
         <taskListContext.Provider value={taskList}>
          <isMobileContext.Provider value={isMobile}>
          <charstBoxIsActiveContext.Provider value={charstBoxIsActive}>
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
          {isMobile ? <DashFooter setChartsBoxIsActive={setChartsBoxIsActive}/> : ""}
          </charstBoxIsActiveContext.Provider>
          </isMobileContext.Provider>
         </taskListContext.Provider>
        </counterNotyficationsContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export { themeContext, counterNotyficationsContext, taskListContext, isMobileContext, charstBoxIsActiveContext };
