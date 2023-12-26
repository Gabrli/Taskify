import { landingFooterElList } from "../../../types/landingFooterEl";

export default function FooterContactItem(props: {
  element: landingFooterElList;
  theme: string;
}) {
  const { id, title, icon, link } = props.element;
  const { theme } = props;
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
