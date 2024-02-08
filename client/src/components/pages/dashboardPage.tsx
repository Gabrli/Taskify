import { createContext, useContext, useEffect, useState } from "react";
import DashboardHeader from "../dashboardComponents/dashboardHeader";
import DashTaskList from "../dashboardComponents/dashTaskList";
import { authToken } from "../../auth/token";
import { userId } from "../../auth/checkingIDFromDB";
import { ITask } from "../../types/ITask";
import DashFooter from "../dashboardComponents/dashFooter";
import { themeContext } from "../../App";

const taskListContext = createContext<ITask[]>([]);

const counterNotyficationsContext = createContext(0);
const isMobileContext = createContext(false);
const charstBoxIsActiveContext = createContext(false);

export default function DashboardPage(props: {setTheme: React.Dispatch<React.SetStateAction<string>>}) {
  const { setTheme } = props
  
  const [isActive, setIsActive] = useState(false);

  const [counterNotyfications, setCounterNotyfications] = useState(0);
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [charstBoxIsActive, setChartsBoxIsActive] = useState(false);
  const theme = useContext(themeContext)

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localId = localStorage.getItem("uid");
    const localTheme = localStorage.getItem("theme") as string;

    setTheme(localTheme);

    if (localToken && localId) {
      authToken.token = true;
      userId.id = localId;
      
    } else authToken.token = false;

    if (window.innerWidth <= 1050) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1050) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <>
    <head>
      <title>dashboard</title>
      <meta name="description" content="Planning your task in dashboard."/>
      <link rel="canonical" href="/dashboard"/>
    </head>
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
                  setIsActive={setIsActive}
                />

                <DashTaskList
                  isActive={isActive}
                  setIsActive={setIsActive}
                  setCounter={setCounterNotyfications}
                  setTaskList={setTaskList}
                />
                {isMobile ? (
                  <DashFooter setChartsBoxIsActive={setChartsBoxIsActive} />
                ) : (
                  ""
                )}
              </charstBoxIsActiveContext.Provider>
            </isMobileContext.Provider>
          </taskListContext.Provider>
        </counterNotyficationsContext.Provider>
      </themeContext.Provider>
    </div>
    </>
  );
}

export {
  
  counterNotyficationsContext,
  taskListContext,
  isMobileContext,
  charstBoxIsActiveContext,
};
