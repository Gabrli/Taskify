import { useContext } from "react";
import { isWrongContext } from "../../dashTaskList";

export default function DateEndInput(props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { state, setState, setIsWrong } = props;
  const isWrong = useContext(isWrongContext)
  return (
    <input
      type="date"
      className={`transition  ${isWrong ? "border-2 border-red-500 border-dashed" : "border-fuchsia-800"} duration-700 ease-in-out bg-white outline-none bg-opacity-25 text-white   focus:border`}
      id="date_end_input"
      name="date_end_input"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
        setIsWrong(false)
      }}
    />
  );
}
