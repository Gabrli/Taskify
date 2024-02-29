import { useContext } from "react";
import { themeContext } from "../../../App";

export default function TaskDescription(props: { description: string }) {
  const { description } = props;
  const theme = useContext(themeContext)
  return (
    <section>
      <p className={`pl-5 pr-5 pt-2 ${theme === "dark" ? "text-text_dark" : "text-text_light"}  `}>
        {description}
      </p>
    </section>
  );
}
