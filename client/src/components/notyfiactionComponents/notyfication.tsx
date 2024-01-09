import { notyfiaction } from "../../types/notyfiactionInterface";
export default function Notyfication(props: { element: notyfiaction }) {
  const { id, name, mustToDo, finishedDays, progress, futureDays } =
    props.element;
  return (
    <li key={id} className="w-notyfication bg-fuchsia-400 p-1">
      <header className="text-start border-b border-fuchsia-500 pb-1">
        <p className="pl-2 text-white font-semibold text-xl">Task: {name}</p>
      </header>
      <section>
        <p className="text-white pl-2">
          Today you need to complete <span className="pl-1 pr-1 text-red-500 font-bold text-lg">{mustToDo}%</span> of this task. Your progress is

           <span className="pl-1 pr-1 text-red-500 font-bold text-lg">{progress}%</span>. <span className="pl-1 pr-1 text-lg text-red-500 font-bold">{finishedDays} days</span> have passed. <span className="pl-1 pr-1 text-red-500 font-bold text-lg">{futureDays} days</span> left.
        </p>
      </section>
    </li>
  );
}
