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
      className={`fixed top-14 ${
        isMobile ? "right-3 min-w-1/12 max-w-1/12" : ""
      } ${theme === "dark" ? "bg-dark_popup" : "bg-white"}  rounded z-10  `}
    >
      <NotyficationsHeader />
      <NotyfiactionWrapper />
    </div>
  );
}
