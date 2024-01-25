export default function TaskNameInput(props: {
  inputName: string;
  inputId: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { inputName, inputId, value, setValue } = props;
  return (
    <input
      type="text"
      onChange={(e) => setValue(e.target.value)}
      name={inputName}
      id={inputId}
      value={value}
      placeholder="Enter the task name"
      className={`transition  duration-700 ease-in-out ml-auto mr-auto  p-1 w-modalInputs h-custom-height-modal-inputs text-white outline-none  rounded bg-white bg-opacity-20 focus:border`}
    />
  );
}
