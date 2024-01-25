import { FaUserShield, FaCode, FaInstagram } from "react-icons/fa";
import { themeContext } from "../pages/landingPage";
import { useContext } from "react";
import SocialHref from "./landingFooterComponents/socialHref";
import QuickLink from "./landingFooterComponents/quicLink";
export default function Footer() {
  const theme = useContext(themeContext)
  return (
   <footer className={`footer_box  mt-auto    w-full flex flex-col justify-center items-center ${theme === "dark" ? "dark" : "light"
      }    `}>
      <header className="border-b border-secondary border-opacity-30 w-2/3   pb-5 pt-5 "  >
        <h3 className={`fo_title text-4xl font-bold pb-2 `}>taskify</h3>
        <a href="#" className="text-gray-500 link_quic  cursor-pointer">Open source code taskify appliaction.</a>
      </header>
      <section className="w-2/3 flex justify-between items-center pb-5 pt-7 mobile1:flex-col">
        <section className=" flex justify-center items-center gap-14">
          <div>
            <p className={`font-semibold text-text_dark ${theme === "dark"?"":"text-text_light"}`}>Quick Links</p>
            <ul>
              <QuickLink href="/home" content="Home"/>
              <QuickLink href="/login" content="Login"/>
              <QuickLink href="/register" content="Register"/>
            </ul>
          </div>
          <div className="pb-12">
            <p className={`font-semibold  ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Support</p>
            <a className="text-gray-500 link_quic font-medium" href="">Report a bug</a>
          </div>
        </section>
        <section className="mobile1:pt-7">
          <header>
            <p className={`text-text_dark  ${theme === "dark"?"":"text-text_light"} mobile1:text-center`}>Social Handlers</p>
          </header>
          <div className="flex justify-center items-center pt-4 gap-5">
          <SocialHref href="#" icon={<FaInstagram/>}/>
          <SocialHref href="#" icon={<FaUserShield/>}/>
          <SocialHref href="#" icon={<FaCode/>}/>
          </div>
        </section>
      </section>
    </footer>
  );
}
