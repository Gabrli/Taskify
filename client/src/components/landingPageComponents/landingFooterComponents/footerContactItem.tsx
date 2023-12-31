import { useContext } from "react";
import { landingFooterElList } from "../../../types/landingFooterEl";
import { themeContext } from "../../pages/landingPage";
export default function FooterContactItem(props: {
  element: landingFooterElList;
  
}) {
  const { id, title, icon, link } = props.element;
  const theme = useContext(themeContext)
  return (
    <li className="text-white text-lg" key={id}>
      <a
        className={`flex items-center ${
          theme === "dark" ? "" : "text-stone-600"
        }  gap-2 font-semibold`}
        href={link}
      >
        {icon} {title}
      </a>
    </li>
  );
}
