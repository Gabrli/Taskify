import { useContext } from "react";
import { themeContext } from "../../../App";

export default function LeftSection() {
  const theme = useContext(themeContext)
  return (
    <section>
      <p className={`font-bold text-xl ${theme === "dark" ? "text-text_dark" : "text-text_light"} pb-1`}>Dashboard</p>
    </section>
  );
}
