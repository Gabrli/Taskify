import Header from "../landingPageComponents/header";
import Hero from "../landingPageComponents/hero";
import Footer from "../landingPageComponents/footer";
import "../../index.css";
import { useContext } from "react";
import { themeContext } from "../../App";



export default function LandingPage(props: {setTheme: React.Dispatch<React.SetStateAction<string>>}) {
  const { setTheme } = props
  const theme = useContext(themeContext)
 
  return (
    <>
      
        <div
          className={`landing_page h-screen  w-screen flex flex-col   ${
            theme === "dark" ? "dark" : "light"
          } `}
        >
          <Header setTheme={setTheme} />

          <Hero />

          <Footer />
        </div>
      
    </>
  );
}


