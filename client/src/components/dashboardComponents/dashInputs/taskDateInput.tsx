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
      className={`transition w-full  duration-700 p-1 rounded ease-in-out bg-gray-100 border-2 ${isWrong ? "border-red-500" : "border-transparent"} outline-none  text-gray-500   `}
    />
  );
}
