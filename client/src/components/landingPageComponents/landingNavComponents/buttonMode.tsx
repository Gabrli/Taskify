import { MdOutlineWbSunny } from "react-icons/md";
import { themeContext } from "../../pages/landingPage";
import { useContext } from "react";
export default function ButtonMode(props: {
  
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {  setTheme } = props;
  const theme = useContext(themeContext)
  return (
    <li
    className={`text-xl  ${
      theme === "dark" ? "text-white" : "text-yellow-500"
    } p-1 pl-2 mobile1:text-lg `}
    onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
  >
    <MdOutlineWbSunny />
  </li>
  );
}
