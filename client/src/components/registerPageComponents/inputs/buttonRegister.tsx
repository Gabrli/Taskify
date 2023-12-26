export default function ButtonRegister(props: {
  sendDataFun: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  const { sendDataFun } = props;
  return (
    <button
      onClick={(e) => sendDataFun(e)}
      className="text-white bg-custom-btn-color w-full pb-1 pt-1 font-semibold rounded flex justify-center items-center"
    >
      Create
    </button>
  );
}
