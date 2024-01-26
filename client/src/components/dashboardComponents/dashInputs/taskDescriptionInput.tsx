import { useContext } from "react";
import { isWrongContext } from "../dashTaskList";
export default function TaskDescriptionInput(props: {
  inputId: string;
  inputName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { inputId, inputName, value, setValue } = props;
  const isWrong = useContext(isWrongContext)
  return (
    <textarea
      id={inputId}
      name={inputName}
      placeholder="Enter the description"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`transition  duration-700  ease-in-out text-white border ${isWrong ? "border-red-500" : "border-transparent"} bg-opacity-20 resize-none bg-white p-1 w-modalInputs h-custom-height-modal-textarea ml-auto mr-auto  outline-none rounded focus:border `}
    ></textarea>
  );
}
