import { useContext } from "react";

import { themeContext } from "../../App";
export default function NotyficationsHeader() {
  const theme = useContext(themeContext)
  return (
    <header className={` p-2  ${theme === "dark" ? "bg-dark_popup" : "bg-white"} rounded-xl flex justify-start items-center gap-4 pb-4 w-full`}>
      <p className={`${theme === "dark" ? "text-text_dark" : "text-text_light"} pl-1 pr-1 font-bold text-2xl flex justify-center items-center gap-2 `}>
         Notifications
      </p>
    </header>
  );
}
