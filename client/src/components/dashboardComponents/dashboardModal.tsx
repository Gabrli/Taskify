import Modal from "./dashModalComponents/modal";
import { task } from "../../types/taskInterface";
import { useEffect } from "react";

export default function DashboardModal(props: {
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
  task: task;
}) {
  const { setIsActive, currentModal, addNewTask, editTask, task } = props;

  useEffect(() => {
    console.log("load modal");
  }, []);

  return (
    <div
      className={`h-screen fixed inset-0 bg-black   bg-opacity-40 flex justify-center items-center `}
    >
      <Modal
        task={task}
        currentModal={currentModal}
        editTask={editTask}
        addNewTask={addNewTask}
        setIsActive={setIsActive}
      />
    </div>
  );
}
