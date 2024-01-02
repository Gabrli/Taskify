import { createContext, useState } from "react";
import DashboardHeader from "../dashboardComponents/dashboardHeader";

import DashTaskList from "../dashboardComponents/dashTaskList";

const themeContext = createContext("");

export default function DashboardPage() {
  const [theme, setTheme] = useState("dark");
  const [isActive, setIsActive] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  

  return (
    <div
      className={`dashboard_page  ${
        theme === "dark" ? "dark" : "light"
      } h-screen `}
    >
      <themeContext.Provider value={theme}>
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
        
        />
      </themeContext.Provider>
    </div>
  );
}

export { themeContext };
