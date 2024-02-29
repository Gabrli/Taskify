import { Circles } from "react-loader-spinner";

export default function SpinnerElement() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center ">
      <Circles color="purple" />
      <span className="text-gray-500 font-medium text-lg">Loading...</span>
    </div>
  );
}
