import { useContext } from "react";
import { isWrongContext } from "../dashTaskList";
import { themeContext } from "../../../App";


export default function TaskNameInput(props: {
  inputName: string;
  inputId: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  
}) {
  const { inputName, inputId, value, setValue,  } = props;
  const isWrong = useContext(isWrongContext)
  const theme = useContext(themeContext)
  
  return (
    <input
      type="text"
      onChange={(e) => {
        setValue(e.target.value);
      }}
      name={inputName}
      id={inputId}
      value={value}
      placeholder="Enter the task name"
      className={`transition  duration-700 ease-in-out ml-auto mr-auto  p-3 w-modalInputs border ${isWrong ? "border-red-500" : "border-transparent"} h-custom-height-modal-inputs  outline-none  rounded  ${theme === "dark" ? "bg-stone-700" : "bg-gray-100"}  focus:border placeholder:text-sm placeholder:font-base placeholder:text-stone-300 placeholder:font-base`}
    />
  );
}
