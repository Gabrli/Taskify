import useCurrentLocation from "../../../hooks/useCurrentLocation";

export default function ButtonForm(props: {
    sendDataFun: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }) {
    const { sendDataFun } = props;
    const currentLocation = useCurrentLocation()
    return (
      <button
        onClick={(e) => sendDataFun(e)}
        className="text-white bg-btnForm1 w-full pb-2 pt-2 font-semibold rounded-xl mt-1 flex justify-center items-center btn_form"
      >
        {currentLocation === '/login' ? 'Login' : 'Create'}
      </button>
    );
  }
  