import { task } from "../../types/taskInterface";
import ButtonEdit from "./dashTaskComponents/buttonEdit";
import ButtonRemove from "./dashTaskComponents/buttonRemove";

export default function DashTask(props: {
  element: task;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  removeTask: (taskId: string) => Promise<void>;
}) {
  const { task_id, name, description, date_start, date_end } = props.element;
  const { setIsActive, setCurrentModal, removeTask } = props;
  return (
    <li
      key={task_id}
      className={`${
        task_id === "00" ? "hidden" : ""
      } ml-auto mr-auto bg-fuchsia-800 mt-3 bg-opacity-30 p-2 rounded`}
    >
      <header>
        <p className="p-2 text-white font-semibold text-3xl">{name}</p>
      </header>
      <section>
        <p className="p-2 text-white text-opacity-40 font-semibold">
          {description}
        </p>
      </section>
      <section>
        <p className="p-2 text-stone-400 text-opacity-40">
          {date_start} - {date_end}
        </p>
      </section>
      <section className="flex justify-center items-center gap-2 p-2">
        <ButtonRemove removeTask={removeTask} taskId={task_id} />
        <ButtonEdit
          setIsActive={setIsActive}
          setCurrentModal={setCurrentModal}
        />
      </section>
    </li>
  );
}
