import Header from "../landingPageComponents/header";
import Hero from "../landingPageComponents/hero";
import Footer from "../landingPageComponents/footer";
import "../../index.css";
import { createContext, useState } from "react";
const themeContext = createContext("");

export default function LandingPage() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <themeContext.Provider value={theme}>
        <div
          className={`landing_page h-screen w-screen flex flex-col gap-36 ${
            theme === "dark" ? "dark" : "light"
          } `}
        >
          <Header setTheme={setTheme} />

          <Hero />

          <Footer />
        </div>
      </themeContext.Provider>
    </>
  );
}

export { themeContext };
