import { useContext } from "react";
import { themeContext } from "../../../App";

export default function TaskDates(props: {
  date_start: string;
  date_end: string;
}) {
  const { date_start, date_end } = props;
  const theme = useContext(themeContext);
  return (
    <p
      className={`pl-5 pr-5 pt-2 pb-2 flex justify-between items-center  ${
        theme === "dark" ? "text-text_dark" : "text-text_light"
      } `}
    >
      <p className="font-medium flex flex-col ">
        <span className="text-primary">START</span>
        {date_start}
      </p>
      <p className="font-medium flex flex-col">
        <span className="text-primary">END</span>
        {date_end}
      </p>
    </p>
  );
}
