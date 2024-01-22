import { useContext } from "react";
import { themeContext } from "../../pages/dashboardPage";

export default function LeftSection() {
  const theme = useContext(themeContext)
  return (
    <section>
      <p className={`font-bold text-xl ${theme === "dark" ? "text-text_dark" : "text-text_light"} `}>Dashboard</p>
    </section>
  );
}
