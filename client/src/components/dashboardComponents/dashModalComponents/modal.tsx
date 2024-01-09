import { useEffect, useState } from "react";
import DateEndInput from "./modalInputs/dateEndInput";
import DateStartInput from "./modalInputs/dateStartInput";
import TaskDescryptionInput from "./modalInputs/taskDescryptionInput";
import TaskNameInput from "./modalInputs/taskNameInput";
import ModalFooter from "./modalFooter";
import { task } from "../../../types/taskInterface";

export default function Modal(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentModal: string;
  addNewTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => void;
  editTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string,
    taskId: string
  ) => void;
  task: task,
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setIsActive, currentModal, addNewTask, editTask, task, setIsWrong   } = props;
  const { task_id, name, description, date_start, date_end } = task;

  const [taskName, setTaskName] = useState("");
  const [taskDescryption, setTaskDescryption] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const taskId = task_id;

  useEffect(() => {
    if(currentModal === "create_modal"){
      return
    } else {
      setTaskName(name);
      setTaskDescryption(description);
      setDateStart(date_start);
      setDateEnd(date_end);
    }
  }, []);

  

  const eventHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    currentModal === "create_modal"
      ? addNewTask(taskName, taskDescryption, dateStart, dateEnd)
      : editTask(taskName, taskDescryption, dateStart, dateEnd, taskId);
  };

  return (
    <form className="h-custom-height-modal bg-fuchsia-950 bg-opacity-45 w-modal rounded">
      <header className="pt-6 text-center">
        <h3 className="text-white text-2xl font-semibold">
          {currentModal === "create_modal"
            ? "Create new task !"
            : "Update task"}
        </h3>
      </header>
      <section className="flex flex-col items-center p-6 gap-3 ">
        <label
          className="text-white mr-auto pl-3 font-semibold"
          htmlFor="task_input_name"
        >
          Task name:
        </label>
        <TaskNameInput setIsWrong={setIsWrong}  state={taskName} setState={setTaskName} />
        <label
          htmlFor="task_textarea_input"
          className="text-white mr-auto pl-3 font-semibold"
        >
          Task descryption:
        </label>
        <TaskDescryptionInput
          state={taskDescryption}
          setState={setTaskDescryption}
          setIsWrong={setIsWrong}
        />
        <div className="flex justify-evanly items-center gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-white text-center font-semibold "
              htmlFor="date_start_input"
            >
              Date start:
            </label>
            <DateStartInput state={dateStart} setState={setDateStart} setIsWrong={setIsWrong} />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-white text-center font-semibold"
              htmlFor="date_end_input"
            >
              Date end:
            </label>
            <DateEndInput state={dateEnd} setState={setDateEnd} setIsWrong={setIsWrong} />
          </div>
        </div>
      </section>
      <ModalFooter eventHandler={eventHandler} setIsActive={setIsActive} />
    </form>
  );
}
