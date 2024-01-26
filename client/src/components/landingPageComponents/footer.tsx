import { FaUserShield, FaCode, FaInstagram } from "react-icons/fa";
import { themeContext } from "../pages/landingPage";
import { useContext } from "react";
import SocialHref from "./landingFooterComponents/socialHref";
import QuickLink from "./landingFooterComponents/quicLink";
export default function Footer() {
  const theme = useContext(themeContext)
  return (
   <footer className={`footer_box  mt-auto    w-full flex  justify-start items-center ${theme === "dark" ? "dark" : "light"
      }    mobile1:flex-col`}>
      <header className=" w-1/2   pb-5 pt-5 pl-32 mobile1:pl-5 mobile1:w-full"  >
        <h3 className={`fo_title text-4xl font-bold pb-2 `}>taskify</h3>
        <section className="flex flex-col pt-6">
          <header>
            <p className={`text-text_dark  ${theme === "dark"?"":"text-text_light"} `}>Follow us</p>
          </header>
          <div className="flex justify-start items-center pt-4 gap-5">
          <SocialHref href="#" icon={<FaInstagram/>}/>
          <SocialHref href="#" icon={<FaUserShield/>}/>
          <SocialHref href="#" icon={<FaCode/>}/>
          </div>
        </section>
    
      </header>
      <section className="w-2/3 flex justify-between items-center pb-5  mobile1:flex-col mobile1:w-full mobile1:pl-5">
        <section className=" flex justify-center items-center gap-14 mobile1:justify-start mobile1:w-full">
          <div className="pt-3">
            <p className={`font-semibold text-text_dark ${theme === "dark"?"":"text-text_light"}`}>Quick Links</p>
            <ul>
              <QuickLink href="/home" content="Home"/>
              <QuickLink href="/login" content="Login"/>
              <QuickLink href="/register" content="Register"/>
            </ul>
          </div>
          <div className="pb-9">
            <p className={`font-semibold  ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Support</p>
            <a className="text-gray-500 link_quic font-medium" href="">Report a bug</a>
          </div>
        </section>
       
      </section>
    </footer>
  );
}
