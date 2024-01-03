export default function TaskNameInput(props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { state, setState } = props;

  return (
    <input
      className="transition duration-700 ease-in-out border-fuchsia-800 p-1 w-modalInputs h-custom-height-modal-inputs text-white outline-none  rounded bg-white bg-opacity-20 focus:border"
      id="task_input_name"
      name="task_input_name"
      placeholder="Enter the  name"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
      }}
    />
  );
}
