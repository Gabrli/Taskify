import { FaUserShield, FaCode, FaInstagram } from "react-icons/fa";
import { themeContext } from "../../App";
import { useContext } from "react";
import SocialHref from "./landingFooterComponents/socialHref";
import QuickLink from "./landingFooterComponents/quicLink";
import LinkHeaderTitle from "./landingFooterComponents/linksHeaderTitle";
import ImagesLink from "./landingFooterComponents/imagesLink";
export default function LandingFooter() {
  const theme = useContext(themeContext);
  return (
    <footer
      className={`footer_box  mt-auto    w-full flex  justify-start items-center ${
        theme === "dark" ? "dark" : "light"
      }    mobile1:flex-col`}
    >
      <header className=" w-1/2   pb-5 pt-5 pl-32 mobile1:pl-5 mobile1:w-full">
        <h3 className={`fo_title text-4xl font-bold pb-3 `}>taskify</h3>
        <a
          className={`text-stone-500 font-medium  transition duration-700 ease-in-out ${
            theme === "dark" ? "hover:text-text_dark" : "hover:text-text_light"
          }`}
          href="https://github.com/Gabrli/Taskify"
        >
          Copyright - https://github.com/Gabrli/Taskify
        </a>
        <section className="flex flex-col pt-6">
          <header>
            <p
              className={`text-text_dark  ${
                theme === "dark" ? "" : "text-text_light"
              } `}
            >
              Follow us
            </p>
          </header>
          <div className="flex justify-start items-center pt-4 gap-5">
            <SocialHref
              href="https://www.instagram.com/gabrl18/"
              icon={<FaInstagram />}
            />
            <SocialHref
              href="https://github.com/Gabrli/Taskify/blob/main/README.md"
              icon={<FaUserShield />}
            />
            <SocialHref
              href="https://github.com/Gabrli/Taskify"
              icon={<FaCode />}
            />
          </div>
        </section>
        <section className="pt-6 flex justify-start font-medium  items-center gap-5 mobile1:flex-col mobile1:items-start mobile1:gap-2">
          <ImagesLink
            href="https://storyset.com/"
            content="Images are from Storyset"
          />
          <ImagesLink
            href="https://pl.freepik.com/"
            content="Image are from Freepik "
          />
        </section>
      </header>
      <section className="w-2/3 flex justify-between items-center pb-5  mobile1:flex-col mobile1:w-full mobile1:pl-5">
        <section className=" flex justify-center items-center gap-14 mobile1:justify-start mobile1:w-full">
          <div className="pt-3">
            <LinkHeaderTitle content="Quick links" />
            <ul>
              <QuickLink href="/" content="Home" />
              <QuickLink href="/login" content="Login" />
              <QuickLink href="/register" content="Register" />
            </ul>
          </div>
          <div className="pb-9">
            <LinkHeaderTitle content="Support" />
            <QuickLink
              href="mailto:gabrys.wisniewski@op.pl"
              content="Report bug"
            />
          </div>
        </section>
      </section>
    </footer>
  );
}
