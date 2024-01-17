import { task } from "../../types/taskInterface";
import ButtonEdit from "./dashTaskComponents/buttonEdit";
import ButtonRemove from "./dashTaskComponents/buttonRemove";
import TaskHeader from "./dashTaskComponents/taskHeader";
import TaskDescription from "./dashTaskComponents/taskDescription";
import TaskDates from "./dashTaskComponents/taskDates";
export default function DashTask(props: {
  element: task;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  removeTask: (taskId: string) => void
}) {
  const { task_id, name, description, date_start, date_end } = props.element;
  const { setIsActive, setCurrentModal, removeTask } = props;
  return (
    <li
      key={task_id}
      className={`${
        task_id === "00" ? "hidden" : ""
      } task rounded   mt-3  p-2  `}
    >
      <TaskHeader name={name} />
      <TaskDescription description={description} />
      <TaskDates date_start={date_start} date_end={date_end} />
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
