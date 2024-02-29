import { useState, useContext, useEffect  } from "react";
import { themeContext } from "../../App";
import { ITask } from "../../types/ITask";
import { authToken } from "../../auth/token";
import { userId } from "../../auth/checkingIDFromDB";


export const useDashboardPageLogic = (setTheme: React.Dispatch<React.SetStateAction<string>>) => {
    const [isActive, setIsActive] = useState(false);

    const [counterNotyfications, setCounterNotyfications] = useState(0);
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [charstBoxIsActive, setChartsBoxIsActive] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const theme = useContext(themeContext);

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        const localId = localStorage.getItem("uid");
        const localTheme = localStorage.getItem("theme") as string;
        setTheme(localTheme)
    
        if (localToken && localId) {
          authToken.token = true;
          userId.id = localId;
        } else authToken.token = false;
    }, [])

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 1050) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
        }
      });

    return {
        counterNotyfications,
        setCounterNotyfications,
        taskList,
        setTaskList,
        isMobile,
        setIsMobile,
        isLoading,
        setIsLoading,
        charstBoxIsActive,
        setChartsBoxIsActive,
        isAlert,
        setIsAlert,
        theme,
        isActive,
        setIsActive
    }
}