import useCurrentLocation from "../../../hooks/useCurrentLocation";

export default function ButtonForm(props: {
    sendDataFun: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }) {
    const { sendDataFun } = props;
    const currentLocation = useCurrentLocation()
    return (
      <button
        onClick={(e) => sendDataFun(e)}
        className="text-white bg-custom-btn-color w-full pb-1 pt-1 font-semibold rounded flex justify-center items-center"
      >
        {currentLocation === '/login' ? 'Login' : 'Create'}
      </button>
    );
  }
  