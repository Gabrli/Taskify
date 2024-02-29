import { useContext } from "react";
import { themeContext } from "../../App";
import { startedTaskElements, waitingTaskElements, complitedTaskElements } from "../../constants/notificationsObj";
export const useNotificationLogic = (mustToDo:number, finishedDays:number, progress:number, futureDays:number, status:string) => {
    const theme = useContext(themeContext);

  const checkStageInTask = () => {
    if (status === "started") {
      return (
        <p
          className={` font-medium ${
            theme === "dark" ? "text-text_dark" : "text-text_light"
          } pl-2`}
        >
          {startedTaskElements[0]}{" "}
          <span
            className={`pl-1 pr-1 ${
              theme === "dark" ? "text-text_dark" : "text-text_light"
            } font-bold text-sm`}
          >
            {mustToDo}%
          </span>{" "}
          {startedTaskElements[1]}
          <span
            className={`pl-1 pr-1 ${
              theme === "dark" ? "text-text_dark" : "text-text_light"
            } font-bold text-sm`}
          >
            {progress}%
          </span>
          .{" "}
          <span
            className={`pl-1 pr-1 text-sm text-black ${
              theme === "dark" ? "text-text_dark" : "text-text_light"
            } font-bold`}
          >
            {finishedDays} {startedTaskElements[2]}
          </span>{" "}
          {startedTaskElements[3]}{" "}
          <span
            className={`pl-1 pr-1 ${
              theme === "dark" ? "text-text_dark" : "text-text_light"
            } font-bold text-sm`}
          >
            {futureDays} {startedTaskElements[4]}
          </span>{" "}
        </p>
      );
    } else if(status === "waiting") {
      return (
        <p
          className={`${
            theme === "dark" ? "text-text_dark" : "text-text_light"
          } pl-2`}
        >
          {waitingTaskElements[0]}{" "}
          <span
            className={`${
              theme === "dark" ? "text-text_dark" : "text-text_light"
            } font-bold text-sm pl-1 pr-1`}
          >
            {futureDays} {waitingTaskElements[1]}
          </span>
          {waitingTaskElements[2]}{" "}
        </p>
      );
    } else {
      return (
        <p
          className={`${
            theme === "dark" ? "text-text_dark" : "text-text_light"
          } pl-2`}
        >
          {complitedTaskElements[0]}{" "}
          
          {complitedTaskElements[1]}{" "}
        </p>
      )
    }
  };
  return {
    theme,
    checkStageInTask
  }
}