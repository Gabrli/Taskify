import { useContext } from "react";
import NotyfiactionWrapper from "./notyfiactionWrapper";
import NotyficationsHeader from "./notyficationHeader";
import { isMobileContext, themeContext } from "../pages/dashboardPage";

export default function NotyficationPopup() {

 const isMobile = useContext(isMobileContext)
 const theme = useContext(themeContext)
  return (
    <div className={`fixed top-14 ${isMobile ? "right-2 min-w-4/12 max-w-4/12" : ""} ${theme === "dark" ? "bg-dark_popup" : "bg-white"}  rounded z-10  `}>
      <NotyficationsHeader />
      <NotyfiactionWrapper  />
    </div>
  );
}
