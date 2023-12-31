import { useContext } from "react";
import { themeContext } from "../../pages/landingPage";
export default function CopyRight() {
  const theme = useContext(themeContext)
  return (
    <li className="text-white text-xl">
      <a
        className={`flex items-center ${
          theme === "dark" ? "" : "text-pink-500"
        } gap-2 font-bold mobile1:pb-2`}
        href="#"
      >
        <span className="text-pink-500">Coded by:</span> Gabriel Wiśniewski
      </a>
    </li>
  );
}
