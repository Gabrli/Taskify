import ButtonMode from "./landingNavComponents/buttonMode";
import ButtonLogin from "./landingNavComponents/buttonLogin";

export default function LandingNav(props: {
  
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {  setTheme } = props;

  return (
    <nav className="pr-9">
      <ul className="flex justify-center items-center gap-10 rounded bg-custom-bg-nav-color p-2 border border-gray-500 mobile1:gap-6">
        <ButtonMode  setTheme={setTheme} />
        <ButtonLogin />
      </ul>
    </nav>
  );
}
