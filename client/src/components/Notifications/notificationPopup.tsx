import { useContext } from "react";
import NotifiactionWrapper from "./notifiactionWrapper";
import NotificationsHeader from "./notificationHeader";
import { isMobileContext } from "../../contexts/isMobileContext";
import { themeContext } from "../../App";

export default function NotificationPopup() {
  const isMobile = useContext(isMobileContext);
  const theme = useContext(themeContext);
  return (
    <div
      className={`fixed notification_popup w-notification top-14 ${
        isMobile ? "right-3 " : ""
      } ${theme === "dark" ? "bg-dark_popup" : "bg-white"}  rounded-xl z-10  `}
    >
      <NotificationsHeader />
      <NotifiactionWrapper />
    </div>
  );
}
