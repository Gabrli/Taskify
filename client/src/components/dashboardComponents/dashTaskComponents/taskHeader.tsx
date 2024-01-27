import { useContext, useState } from "react";
import { themeContext } from "../../../App";
import TaskBadge from "./taskBadge";
import ButtonActiveOptions from "./taskHeaderComponents/buttonActiveOptions";
import ButtonEdit from "./buttonEdit";
import ButtonRemove from "./buttonRemove";

export default function TaskHeader(props: { name: string, setIsEditing: React.Dispatch<React.SetStateAction<boolean>>, isEditing:boolean, removeTask: (taskId: string) => void, taskId:string, status: string }) {
  const { name, setIsEditing, isEditing, removeTask, taskId, status } = props;
  const theme = useContext(themeContext)
  const [isDispalyOptions, setIsDisplayOptions] = useState(false)
  return (
    <header className="pl-5 pr-5">
      <section className="w-full flex justify-between items-center gap-2 pt-2 pb-1">
        <TaskBadge status={status}/>
        {isDispalyOptions ? (
          <section className="flex justify-center items-center gap-2">
            <ButtonEdit setIsEditing={setIsEditing} isEditing={isEditing}/>
            <ButtonRemove removeTask={removeTask} taskId={taskId}/>
          </section>
        ) : ""}
        <ButtonActiveOptions setIsDisplayOptions={setIsDisplayOptions} isDisplayOptions={isDispalyOptions}/>
      </section>
      <p className={` ${theme === "dark" ? "text-text_dark" : "text-text_light"} font-semibold text-xl`}>{name}</p>
    </header>
  );
}
