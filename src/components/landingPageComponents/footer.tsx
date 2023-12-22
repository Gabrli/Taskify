import FooterImg from "./landingFooterComponents/footerImg";
import FooterContactList from "./landingFooterComponents/footerContactList";

export default function Footer(props: { theme: string }) {
  const { theme } = props;
  return (
    <footer
      className={`flex justify-evenly items-center h-custom-height-landing-plus footer_box ${
        theme === "dark" ? "dark" : "light"
      } w-full pt-9    mobile1:flex-col mobile1:h-custom-height-mobile-footer `}
    >
      <FooterImg />
      <FooterContactList theme={props.theme} />
    </footer>
  );
}
