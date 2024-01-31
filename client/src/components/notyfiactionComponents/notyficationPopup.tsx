import { useContext } from "react";
import NotyfiactionWrapper from "./notyfiactionWrapper";
import NotyficationsHeader from "./notyficationHeader";
import { isMobileContext } from "../pages/dashboardPage";
import { themeContext } from "../../App";

export default function NotyficationPopup() {
  const isMobile = useContext(isMobileContext);
  const theme = useContext(themeContext);
  return (
    <div
      className={`fixed notification_popup w-notification top-14 ${
        isMobile ? "right-3 " : ""
      } ${theme === "dark" ? "bg-dark_popup" : "bg-white"}  rounded-xl z-10  `}
    >
      <NotyficationsHeader />
      <NotyfiactionWrapper />
    </div>
  );
}
