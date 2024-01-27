import { useContext } from "react";
import { INotyfiaction } from "../../types/INotyfiactionInterface";
import { themeContext } from "../../App";
export default function Notyfication(props: { element: INotyfiaction }) {
  const { id, name, mustToDo, finishedDays, progress, futureDays, status } =
    props.element;

  const theme = useContext(themeContext)

  const checkStageInTask = () => {
    if(status === "started"){
      return  <p className={`${theme === "dark" ? "text-text_dark" : "text-text_light"} pl-2`}>
      Today you need to complete <span className={`pl-1 pr-1 ${theme === "dark" ? "text-text_dark" : "text-text_light"} font-bold text-lg`}>{mustToDo}%</span> of this task. Your progress is

       <span className={`pl-1 pr-1 ${theme === "dark" ? "text-text_dark" : "text-text_light"} font-bold text-lg`}>{progress}%</span>. <span className={`pl-1 pr-1 text-lg text-black ${theme === "dark" ? "text-text_dark" : "text-text_light"} font-bold`}>{finishedDays} days</span> have passed. <span className={`pl-1 pr-1 ${theme === "dark" ? "text-text_dark" : "text-text_light"} font-bold text-lg`}>{futureDays} days</span> left.
    </p>
    }
     else {
      return <p className={`${theme === "dark" ? "text-text_dark" : "text-text_light"} pl-2`}>Your assignment starts in <span className={`${theme === "dark" ? "text-text_dark" : "text-text_light"} font-bold text-lg pl-1 pr-1`}>{futureDays} days</span>.We will remind you about this task right after logging in. Good luck ! </p>
    }

    
  }
  return (
    <li key={id} className={`w-full  ${theme === "dark" ? "bg-dark_notifications" : "bg-custom-not-3"} p-1 border-b border-custom-not-4`}>
      <header className="text-start  pb-1">
        <p className={`pl-2 ${theme === "dark" ? "text-text_dark" : "text-text_light"} font-semibold text-xl`}>Task: {name}</p>
      </header>
      <section>
        {checkStageInTask()}
      </section>
    </li>
  );
}
