import { useContext } from "react";
import { isWrongContext } from "../../dashTaskList";

export default function TaskDescryptionInput(props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { state, setState, setIsWrong } = props;
  const isWrong = useContext(isWrongContext)

  return (
    <textarea
      id="task_textarea_input"
      name="task_textarea_input"
      className={`transition ${isWrong ? "border-2 border-red-500 border-dashed " : "border-fuchsia-800"} duration-700  ease-in-out text-white bg-opacity-20 resize-none bg-white p-1 w-modalInputs h-custom-height-modal-textarea  outline-none rounded focus:border `}
      placeholder="Enter the descryption"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
        setIsWrong(false)
      }}
    ></textarea>
  );
}
