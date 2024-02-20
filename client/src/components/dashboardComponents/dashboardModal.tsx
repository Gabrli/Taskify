import Modal from "./dashModalComponents/modal";

export default function DashboardModal(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;

  addNewTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => void;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setIsActive, addNewTask, setIsWrong, setIsAlert } = props;

  return (
    <div
      className={`h-screen fixed inset-0 bg-black   bg-opacity-40 flex justify-center items-center `}
    >
      <Modal addNewTask={addNewTask} setIsActive={setIsActive} setIsWrong={setIsWrong} setIsAlert={setIsAlert}/>
    </div>
  );
}
