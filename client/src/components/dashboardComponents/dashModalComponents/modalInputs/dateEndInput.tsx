export default function DateEndInput(props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { state, setState } = props;
  return (
    <input
      type="date"
      className="transition duration-700 ease-in-out bg-white outline-none bg-opacity-25 text-white border-fuchsia-800  focus:border"
      id="date_end_input"
      name="date_end_input"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
      }}
    />
  );
}
