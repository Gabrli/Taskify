import { notyfiaction } from "../../types/notyfiactionInterface";
export default function Notyfication(props: { element: notyfiaction }) {
  const { id, name, mustToDo, finishedDays, progress, futureDays, isStarted } =
    props.element;

  const checkStageInTask = () => {
    if(isStarted === true){
      return  <p className="text-white pl-2">
      Today you need to complete <span className="pl-1 pr-1 text-custom-not-4 font-bold text-lg">{mustToDo}%</span> of this task. Your progress is

       <span className="pl-1 pr-1 text-custom-not-4 font-bold text-lg">{progress}%</span>. <span className="pl-1 pr-1 text-lg text-custom-not-4 font-bold">{finishedDays} days</span> have passed. <span className="pl-1 pr-1 text-custom-not-4 font-bold text-lg">{futureDays} days</span> left.
    </p>
    }
     else {
      return <p className="text-white pl-2">Your assignment starts in <span className="text-custom-not-4 font-bold text-lg pl-1 pr-1">{futureDays} days</span>.We will remind you about this task right after logging in. Good luck ! </p>
    }

    
  }
  return (
    <li key={id} className="w-notyfication bg-custom-not-3 p-1">
      <header className="text-start border-b border-custom-not-4 pb-1">
        <p className="pl-2 text-white font-semibold text-xl">Task: {name}</p>
      </header>
      <section>
        {checkStageInTask()}
      </section>
    </li>
  );
}
