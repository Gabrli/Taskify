import { INotyfiaction } from "../../types/INotyfiactionInterface";

import { useNotificationLogic } from "../../hooks/LogicComponentsHooks/useNotificationLogic";
export default function Notification(props: { element: INotyfiaction }) {
  const { id, name, mustToDo, finishedDays, progress, futureDays, status } =
    props.element;

  const { theme, checkStageInTask } = useNotificationLogic(
    mustToDo,
    finishedDays,
    progress,
    futureDays,
    status
  );

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
