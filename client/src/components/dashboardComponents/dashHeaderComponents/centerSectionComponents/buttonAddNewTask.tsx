import { IoIosAdd } from "react-icons/io";

export default function ButtonAddNewTask(props: {
  isMobile: boolean;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isMobile, setCurrentModal, setIsActive } = props;

  const eventHandler = () => {
    setIsActive(true);
    setCurrentModal("create_modal");
  };

  return (
    <button
      onClick={() => eventHandler()}
      className="transition duration-700 ease-in-out text-white  flex items-center justify-center font-semibold gap-1 hover:text-pink-500"
    >
      <IoIosAdd /> {isMobile ? "" : "new task"}
    </button>
  );
}
