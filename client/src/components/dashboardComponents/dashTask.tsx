import { ITask } from "../../types/ITask";
import ButtonEdit from "./dashTaskComponents/buttonEdit";
import ButtonRemove from "./dashTaskComponents/buttonRemove";
import TaskHeader from "./dashTaskComponents/taskHeader";
import TaskDescription from "./dashTaskComponents/taskDescription";
import TaskDates from "./dashTaskComponents/taskDates";
import { useState } from "react";

import TaskEditForm from "./dashTaskComponents/taskEditFormComponents/taskEditForm";
export default function DashTask(props: {
  element: ITask;

  removeTask: (taskId: string) => void;
  isWrong: boolean;
  editTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string,
    taskId: string
  ) => Promise<void>;
}) {
  const { task_id, name, description, date_start, date_end } = props.element;
  const { removeTask, editTask } = props;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li
      key={task_id}
      className={`${
        task_id === "00" ? "hidden" : ""
      }  rounded  bg-primary3 mt-3  p-2  `}
    >
      {isEditing ? (
        <TaskEditForm
          name={name}
          description={description}
          date_start={date_start}
          date_end={date_end}
          setIsEditing={setIsEditing}
          editTask={editTask}
          task_id={task_id}
        />
      ) : (
        <>
          <TaskHeader name={name} />
          <TaskDescription description={description} />
          <TaskDates date_start={date_start} date_end={date_end} />
          <section className="flex justify-center items-center gap-2 p-2">
            <ButtonRemove removeTask={removeTask} taskId={task_id} />
            <ButtonEdit setIsEditing={setIsEditing} isEditing={isEditing} />
          </section>
        </>
      )}
    </li>
  );
}
