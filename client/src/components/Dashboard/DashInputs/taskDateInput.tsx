import { useContext } from "react";
import { isWrongContext } from "../DashTask/dashTaskList";
import { themeContext } from "../../../App";

export default function TaskDateInput(props: {
  inputId: string;
  inputName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { inputId, inputName, value, setValue } = props;
  const isWrong = useContext(isWrongContext)
  const theme = useContext(themeContext)
  return (
    <input
      type="date"
      name={inputName}
      id={inputId}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`modal_input transition w-full  duration-700 p-1 rounded ease-in-out ${theme === "dark" ? "bg-stone-700" : "bg-gray-100"} border-2 ${isWrong ? "border-red-500" : "border-transparent"} outline-none  ${theme === "dark" ? "text-stone-300" : "text-gray-500"}   `}
    />
  );
}
