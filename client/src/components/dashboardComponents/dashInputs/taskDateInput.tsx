import { useContext } from "react";
import { isWrongContext } from "../dashTaskList";

export default function TaskDateInput(props: {
  inputId: string;
  inputName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { inputId, inputName, value, setValue } = props;
  const isWrong = useContext(isWrongContext)
  return (
    <input
      type="date"
      name={inputName}
      id={inputId}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`transition  duration-700 ease-in-out bg-white border ${isWrong ? "border-red-500" : "border-transparent"} outline-none bg-opacity-25 text-white   focus:border`}
    />
  );
}
