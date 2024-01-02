
export default function TaskDescryptionInput(props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { state, setState } = props;

  

  return (
    <textarea
      id="task_textarea_input"
      name="task_textarea_input"
      className="transition duration-700 border-fuchsia-800 ease-in-out text-white bg-opacity-20 resize-none bg-white p-1 w-modalInputs h-custom-height-modal-textarea  outline-none rounded focus:border "
      placeholder="Enter the descryption"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
      }}
    ></textarea>
  );
}
