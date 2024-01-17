import ButtonMode from "./landingNavComponents/buttonMode";
import ButtonLogin from "./landingNavComponents/buttonLogin";

export default function LandingNav(props: {
  
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {  setTheme } = props;

  return (
    <nav className="pr-9">
      <ul className="flex justify-center items-center gap-5 pb-1    mobile1:gap-6 ">
        <ButtonMode  setTheme={setTheme} />
        <ButtonLogin />
      </ul>
    </nav>
  );
}
