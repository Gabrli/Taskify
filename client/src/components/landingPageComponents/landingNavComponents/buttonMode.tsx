import { MdOutlineWbSunny } from "react-icons/md";
export default function ButtonMode(props: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { theme, setTheme } = props;
  return (
    <li
      className={`text-xl  ${
        theme === "dark" ? "text-white" : "text-yellow-500"
      } pl-2 mobile1:text-lg mobile1:pl-0`}
      onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
    >
      <MdOutlineWbSunny />
    </li>
  );
}
