export default function ButtonCancle(props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setState, setIsWrong } = props;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsWrong(false)
        setState(false);
      }}
      className="transition duration-700 ease-in-out text-white bg-red-500 ml-auto mr-auto h-custom-height-modal-inputs font-semibold rounded w-modalInputs hover:bg-opacity-10"
    >
      Cancle
    </button>
  );
}
