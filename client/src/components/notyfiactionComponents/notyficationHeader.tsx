import { useContext } from "react";
import { IoNotifications } from "react-icons/io5";
import { themeContext } from "../../App";
export default function NotyficationsHeader() {
  const theme = useContext(themeContext)
  return (
    <header className={` p-2  ${theme === "dark" ? "bg-dark_popup_header" : "bg-custom-not-2"} rounded flex justify-center items-center gap-4 w-full`}>
      <p className={`${theme === "dark" ? "text-text_dark" : "text-text_light"} pl-1 pr-1 font-bold text-lg flex justify-center items-center gap-2 `}>
        <IoNotifications /> Your notyfications
      </p>
    </header>
  );
}
