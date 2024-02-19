import { useContext } from "react";
import { isWrongContext } from "../dashTaskList";
import { themeContext } from "../../../App";
export default function TaskDescriptionInput(props: {
  inputId: string;
  inputName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { inputId, inputName, value, setValue } = props;
  const isWrong = useContext(isWrongContext)
  const theme = useContext(themeContext)
  return (
    <textarea
      id={inputId}
      name={inputName}
      placeholder="Enter the description"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`transition  duration-700  ease-in-out text-gray-500 border ${isWrong ? "border-red-500" : "border-transparent"}  resize-none  ${theme === "dark" ? "bg-stone-700" : "bg-gray-100"} p-1 w-modalInputs h-custom-height-modal-textarea ml-auto mr-auto  outline-none rounded focus:border placeholder:text-sm placeholder:font-base placeholder:text-stone-300 placeholder:font-base`}
    ></textarea>
  );
}
