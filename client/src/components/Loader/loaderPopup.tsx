import LoaderInfo from "./loaderInfo";
import SpinnerElement from "./spinner";

export default function LoaderPopup(props: {isLoading:boolean}) {
  const { isLoading} = props
  return (
    <div className={`h-screen w-full fixed z-10   bg-black ${isLoading ? "" : "hidden"}    flex flex-col justify-center gap-6 items-center`}>
      <SpinnerElement />
      <LoaderInfo />
    </div>
  );
}
