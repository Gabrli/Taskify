import Header from "../landingPageComponents/header";
import Hero from "../landingPageComponents/hero";
import Footer from "../landingPageComponents/footer";
import "../../index.css";
import { useState } from "react";

export default function LandingPage() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <div
        className={`landing_page h-screen w-screen flex flex-col gap-36 ${
          theme === "dark" ? "dark" : "light"
        } `}
      >
        <Header theme={theme} setTheme={setTheme} />

        <Hero theme={theme} />

        <Footer theme={theme} />
      </div>
    </>
  );
}
