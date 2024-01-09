import { useContext } from "react";
import { isWrongContext } from "../../dashTaskList";

export default function TaskNameInput(props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { state, setState, setIsWrong } = props;
  const isWrong = useContext(isWrongContext)

  return (
    <input
      className={`transition ${isWrong ? "border-2 border-red-500 border-dashed" : "border-fuchsia-800"} duration-700 ease-in-out  p-1 w-modalInputs h-custom-height-modal-inputs text-white outline-none  rounded bg-white bg-opacity-20 focus:border`}
      id="task_input_name"
      name="task_input_name"
      placeholder="Enter the  name"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
        setIsWrong(false)
      }}
    />
  );
}
