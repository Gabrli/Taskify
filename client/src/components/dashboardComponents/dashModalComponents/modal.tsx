import { useState } from "react";

import ModalFooter from "./modalFooter";

import TaskNameInput from "../dashInputs/taskNameInput";
import TaskDescriptionInput from "../dashInputs/taskDescriptionInput";
import TaskDateInput from "../dashInputs/taskDateInput";

export default function Modal(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;

  addNewTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => void;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setIsActive, addNewTask, setIsWrong} = props;

  const [taskName, setTaskName] = useState("");
  const [taskDescryption, setTaskDescryption] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const eventHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    addNewTask(taskName, taskDescryption, dateStart, dateEnd);
  };

  return (
    <form className="h-custom-height-modal bg-fuchsia-950 bg-opacity-45 w-modal rounded">
      <header className="pt-6 text-center">
        <h3 className="text-white text-2xl font-semibold">Create new task !</h3>
      </header>
      <section className="flex flex-col items-center p-6 gap-3 ">
        <label
          className="text-white mr-auto pl-3 font-semibold"
          htmlFor="task_input_name"
        >
          Task name:
        </label>
        <TaskNameInput
          value={taskName}
          inputId="task_input_name"
          inputName="task_input_name"
          setValue={setTaskName}
          
        />
        <label
          htmlFor="task_textarea_input"
          className="text-white mr-auto pl-3 font-semibold"
        >
          Task descryption:
        </label>
        <TaskDescriptionInput
          value={taskDescryption}
          inputId="task_textarea_input"
          inputName="ask_textarea_input"
          setValue={setTaskDescryption}
        />
        <div className="flex justify-evanly items-center gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-white text-center font-semibold "
              htmlFor="date_start_input"
            >
              Date start:
            </label>
            <TaskDateInput
              value={dateStart}
              inputId="date_start_input"
              inputName="date_start_input"
              setValue={setDateStart}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-white text-center font-semibold"
              htmlFor="date_end_input"
            >
              Date end:
            </label>
            <TaskDateInput
              value={dateEnd}
              inputId="date_end_input"
              inputName="date_end_input"
              setValue={setDateEnd}
            />
          </div>
        </div>
      </section>
      <ModalFooter eventHandler={eventHandler} setIsActive={setIsActive} setIsWrong={setIsWrong} />
    </form>
  );
}
