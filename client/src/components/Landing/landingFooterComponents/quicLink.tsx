import { useContext } from "react";
import { themeContext } from "../../../App";

export default function QuickLink(props: { href: string; content: string }) {
  const { href, content } = props;
  const theme = useContext(themeContext);
  return (
    <li className="list-none">
      <a
        className={`link_quic transition duration-700 ease-in-out  font-medium text-gray-500 pt-1 ${
          theme === "dark" ? "hover:text-text_dark" : "hover:text-text_light"
        } `}
        href={href}
      >
        {content}
      </a>
    </li>
  );
}
