import LandingHeader from "../components/Landing/LandingHeader";
import Hero from "../components/Landing/hero";
import LandingFooter from "../components/Landing/LandingFooter";
import '../index.css'
import { useContext } from "react";
import { themeContext } from "../App";
import Destiny from "../components/Landing/destiny";
import Process from "../components/Landing/process";

export default function LandingPage(props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { setTheme } = props;
  const theme = useContext(themeContext);

  return (
    <>
      <div
        className={`landing_page h-screen  w-screen flex flex-col   ${
          theme === "dark" ? "dark" : "light"
        } `}
      >
        <LandingHeader setTheme={setTheme} />

        <Hero />
        <Destiny />
        <Process />
        <LandingFooter />
      </div>
    </>
  );
}
