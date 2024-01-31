import { useContext } from "react";
import { INotyfiaction } from "../../types/INotyfiactionInterface";
import { themeContext } from "../../App";
import {
  startedTaskElements,
  waitingTaskElements,
} from "./obj/notificationObj";
export default function Notyfication(props: { element: INotyfiaction }) {
  const { id, name, mustToDo, finishedDays, progress, futureDays, status } =
    props.element;

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
    } else {
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
    }
  };
  return (
    <li
      key={id}
      className={`w-full  ${
        theme === "dark" ? "bg-dark_popup" : "bg-white"
      } p-1 `}
    >
      <header className="text-start  ">
        <p
          className={`pl-2 ${
            theme === "dark" ? "text-text_dark" : "text-text_light"
          } font-semibold text-lg`}
        >
          Task: {name}
        </p>
      </header>
      <section>{checkStageInTask()}</section>
    </li>
  );
}
