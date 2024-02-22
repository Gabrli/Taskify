import ButtonAddNewTask from "./centerSectionComponents/buttonAddNewTask";
import ButtonNotyfication from "./centerSectionComponents/buttonNotification";

import { useContext, useState } from "react";
import NotyficationPopup from "../../notificationsComponents/notificationPopup";;
import CounterNotyfications from "./centerSectionComponents/counterNotyfications";
import {
  counterNotyficationsContext,
  isMobileContext,
} from "../../pages/dashboardPage";
import { themeContext } from "../../../App";

export default function CenterSection(props: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setIsActive } = props;
  const [isDropNotyfications, setIsDropNotyfications] = useState(false);
  const counter = useContext(counterNotyficationsContext);
  const theme = useContext(themeContext);
  const isMobile = useContext(isMobileContext);

  return (
    <section
      className={`flex justify-center h-full items-center gap-5 ${
        isMobile ? "gap-0 pr-1" : "gap-5 pr-5"
      } pt-2  pb-2 pr-5  border-r ${
        theme === "dark" ? "border-static1" : "border-static2"
      } $  mobile1:gap-6`}
    >
      <ButtonAddNewTask setIsActive={setIsActive} />
      <ButtonNotyfication
        isDropNotyfications={isDropNotyfications}
        setIsDropNotyfications={setIsDropNotyfications}
      />
      <CounterNotyfications counter={counter} />

      {isDropNotyfications ? <NotyficationPopup /> : ""}
    </section>
  );
}
