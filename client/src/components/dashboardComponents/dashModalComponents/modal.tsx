import { useContext, useState } from "react";
import DateEndInput from "./modalInputs/dateEndInput";
import DateStartInput from "./modalInputs/dateStartInput";
import TaskDescryptionInput from "./modalInputs/taskDescryptionInput";
import TaskNameInput from "./modalInputs/taskNameInput";
import ModalFooter from "./modalFooter";
import { currentModalContext } from "../../pages/dashboardPage";

export default function Modal() {
  const typeModal = useContext(currentModalContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescryption, setTaskDescryption] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  return (
    <form className="h-custom-height-modal bg-fuchsia-800 bg-opacity-20 w-modal rounded">
      <header className="pt-6 text-center">
        <h3 className="text-white text-2xl font-semibold">
          {typeModal === "create_modal" ? "Create new task !" : "Update task"}
        </h3>
      </header>
      <section className="flex flex-col items-center p-6 gap-3 ">
        <label
          className="text-white mr-auto pl-3 font-semibold"
          htmlFor="task_input_name"
        >
          Task name:
        </label>
        <TaskNameInput state={taskName} setState={setTaskName} />
        <label
          htmlFor="task_textarea_input"
          className="text-white mr-auto pl-3 font-semibold"
        >
          Task descryption:
        </label>
        <TaskDescryptionInput
          state={taskDescryption}
          setState={setTaskDescryption}
        />
        <div className="flex justify-evanly items-center gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-white text-center font-semibold "
              htmlFor="date_start_input"
            >
              Date start:
            </label>
            <DateStartInput state={dateStart} setState={setDateStart} />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-white text-center font-semibold"
              htmlFor="date_end_input"
            >
              Date end:
            </label>
            <DateEndInput state={dateEnd} setState={setDateEnd} />
          </div>
        </div>
      </section>
      <ModalFooter />
    </form>
  );
}
