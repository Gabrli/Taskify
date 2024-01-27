import { ReactNode, useContext } from "react";
import { themeContext } from "../../../App";

export default function SocialHref(props: { href: string; icon: ReactNode }) {
  const { href, icon } = props;
  const theme = useContext(themeContext);
  return (
    <a
    target="blank"
      className={`social_item  ${
        theme === "dark" ? "text-text_dark" : "text-text_light"
      } p-3 rounded bg-social_item`}
      href={href}
    >
      {icon}
    </a>
  );
}
