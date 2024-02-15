import { useContext } from "react";
import {
  dateEndContext,
  dateStartContext,
  taskDescriptionContext,
  taskNameContext,
} from "../modal";

export default function ButtonAdd(props: {
  addNewTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => void;
}) {
  const { addNewTask } = props;
  const taskName = useContext(taskNameContext);
  const taskDescription = useContext(taskDescriptionContext);
  const dateStart = useContext(dateStartContext);
  const dateEnd = useContext(dateEndContext);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addNewTask(taskName, taskDescription, dateStart, dateEnd);
      }}
      className="transition duration-700 ease-in-out bg-secondary text-white font-semibold  h-custom-height-modal-inputs rounded w-modalInputs hover:bg-opacity-30"
    >
      Save
    </button>
  );
}
