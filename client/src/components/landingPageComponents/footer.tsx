import FooterImg from "./landingFooterComponents/footerImg";
import FooterContactList from "./landingFooterComponents/footerContactList";
import { themeContext } from "../pages/landingPage";
import { useContext } from "react";
export default function Footer() {
  const theme = useContext(themeContext)
  return (
    <footer
      className={`flex justify-evenly items-center h-custom-height-landing-plus footer_box ${
        theme === "dark" ? "dark" : "light"
      } w-full pt-9    mobile1:flex-col mobile1:h-custom-height-mobile-footer `}
    >
      <FooterImg />
      <FooterContactList  />
    </footer>
  );
}
