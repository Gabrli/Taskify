export default function DateStartInput(props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { state, setState } = props;
  return (
    <input
      type="date"
      className="transition duration-700 ease-in-out outline-none bg-white border-fuchsia-800 bg-opacity-25 text-white focus:border"
      id="date_start_input"
      name="date_start_input"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
        
      }}
    />
  );
}
