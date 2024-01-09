import Modal from "./dashModalComponents/modal";
import { task } from "../../types/taskInterface";


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
 
  setIsWorng: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setIsActive, currentModal, addNewTask, editTask, task, setIsWorng, } = props;



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
        
        setIsWrong={setIsWorng}
      />
    </div>
  );
}
