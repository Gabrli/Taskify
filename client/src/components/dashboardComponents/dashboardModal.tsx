import Modal from "./dashModalComponents/modal";

export default function DashboardModal(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;

  addNewTask: (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => void;

  setIsWorng: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setIsActive, addNewTask, setIsWorng } = props;

  return (
    <div
      className={`h-screen fixed inset-0 bg-black   bg-opacity-40 flex justify-center items-center `}
    >
      <Modal
        addNewTask={addNewTask}
        setIsActive={setIsActive}
        setIsWrong={setIsWorng}
      />
    </div>
  );
}
