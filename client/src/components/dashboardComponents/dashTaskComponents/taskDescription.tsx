import { useContext } from "react";
import { themeContext } from "../../pages/dashboardPage";

export default function TaskDescription(props: { description: string }) {
  const { description } = props;
  const theme = useContext(themeContext)
  return (
    <section>
      <p className={`p-2 ${theme === "dark" ? "text-text_dark" : "text-text_light"} text-opacity-40 font-semibold`}>
        {description}
      </p>
    </section>
  );
}
