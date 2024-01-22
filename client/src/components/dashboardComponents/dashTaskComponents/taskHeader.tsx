import { useContext } from "react";
import { themeContext } from "../../pages/dashboardPage";

export default function TaskHeader(props: { name: string }) {
  const { name } = props;
  const theme = useContext(themeContext)
  return (
    <header>
      <p className={`p-2 ${theme === "dark" ? "text-text_dark" : "text-text_light"} font-semibold text-3xl`}>{name}</p>
    </header>
  );
}
