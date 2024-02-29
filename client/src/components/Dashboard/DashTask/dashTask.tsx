import { ITask } from "../../../types/ITask";
import TaskHeader from "./taskHeader";
import TaskDescription from "./taskDescription";
import TaskDates from "./taskDates";
import { useContext, useEffect, useState } from "react";

import TaskEditForm from "./taskEditFormComponents/taskEditForm";
import { useCalculations } from "../../../hooks/useCalculations";
import { taskListContext } from "../../../contexts/taskListContext";
export default function DashTask(props: {
  element: ITask;

  removeTask: (taskId: string) => void;
 
  editTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string,
    taskId: string
  ) => Promise<void>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { task_id, name, description, date_start, date_end } = props.element;
  const { removeTask, editTask, setIsWrong} = props;
  const [isEditing, setIsEditing] = useState(false);
  const [taskStatus, setTaskStatus] = useState("");
  const calculations = useCalculations(date_start, date_end);
  const taskList = useContext(taskListContext);

  useEffect(() => {
  setTaskStatus(calculations.status)
    
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem(task_id, taskStatus)

  }, [taskStatus])

  return (
    <li
      key={task_id}
      className={`${
        task_id === "00" ? "hidden" : ""
      }  rounded-2xl  bg-primary3 mt-3 ml-auto mr-auto  w-taskW  `}
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
          setIsWrong={setIsWrong}
        />
      ) : (
        <>
          <TaskHeader
            name={name}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            removeTask={removeTask}
            taskId={task_id}
            status={taskStatus}
            setStatus={setTaskStatus}
          />
          <TaskDescription description={description} />
          <TaskDates date_start={date_start} date_end={date_end} />
        </>
      )}
    </li>
  );
}
