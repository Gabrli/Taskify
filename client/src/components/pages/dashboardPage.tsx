import { createContext, useState } from "react";
import DashboardHeader from "../dashboardComponents/dashboardHeader";

import DashTaskList from "../dashboardComponents/dashTaskList";

const themeContext = createContext("");
const counterNotyficationsContext = createContext(0)

export default function DashboardPage() {
  const [theme, setTheme] = useState("dark");
  const [isActive, setIsActive] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [counterNotyfications, setCounterNotyfications] = useState(0)

  

  return (
    <div
      className={`dashboard_page  ${
        theme === "dark" ? "dark" : "light"
      } h-screen `}
    >
      <themeContext.Provider value={theme}>
        <counterNotyficationsContext.Provider value={counterNotyfications}>
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
        />
        </counterNotyficationsContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export { themeContext, counterNotyficationsContext };
