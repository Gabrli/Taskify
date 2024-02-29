import { useContext } from "react";
import { themeContext } from "../../../App";

export default function ButtonLogin() {
  const theme = useContext(themeContext)
  return (
    <li className={`text-lg p-1 font-semibold pr-3  ${theme === "dark"?"text-text_dark":"text-text_light"}  mobile1:text-lg  `}>
      <a href="/login">Login</a>
    </li>
  );
}
