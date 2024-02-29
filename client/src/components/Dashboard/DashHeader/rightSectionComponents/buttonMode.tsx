import { useContext } from "react";
import { themeContext } from "../../../../App";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ButtonMode(props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { setTheme } = props;
  const theme = useContext(themeContext);

  return (
    <button
      className={`transition duration-700 font-semibold ease-in-out text-xl  ${
        theme === "dark" ? "text-gray-600" : "text-yellow-500"
      } pl-2 mobile1:text-lg mobile1:pl-0 hover:text-yellow-500`}
      onClick={() => {
        setTheme(`${theme === "dark" ? "light" : "dark"}`);
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
      }}
    >
      <MdOutlineWbSunny />
    </button>
  );
}
