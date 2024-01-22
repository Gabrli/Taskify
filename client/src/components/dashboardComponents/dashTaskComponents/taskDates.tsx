import { useContext } from "react";
import { themeContext } from "../../pages/dashboardPage";


export default function TaskDates(props: {
  date_start: string;
  date_end: string;
}) {
  const { date_start, date_end } = props;
  const theme = useContext(themeContext)
  return (
    <p className={`p-2 ${theme === "dark" ? "text-text_dark":"text-text_light"} text-opacity-40`}>
      {date_start} - {date_end}
    </p>
  );
}
