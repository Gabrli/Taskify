import ButtonAddNewTask from "./centerSectionComponents/buttonAddNewTask";
import ButtonNotyfication from "./centerSectionComponents/buttonNotification";
import ButtonComunity from "./centerSectionComponents/buttonComunity";
import { useContext, useState } from "react";
import NotyficationPopup from "../../notyfiactionComponents/notyficationPopup";
import CounterNotyfications from "./centerSectionComponents/counterNotyfications";
import { counterNotyficationsContext, isMobileContext, themeContext } from "../../pages/dashboardPage";

export default function CenterSection(props: {
 
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {  setCurrentModal, setIsActive } = props;
  const [isDropNotyfications, setIsDropNotyfications] = useState(false);
  const counter = useContext(counterNotyficationsContext);
  const theme = useContext(themeContext)
  const isMobile = useContext(isMobileContext)

  return (
    <section className={`flex justify-center h-full items-center gap-5 ${isMobile ? "gap-0 pr-1" : "gap-5 pr-5"} pt-2  pb-2 pr-5  border-r ${theme === "dark" ? "border-static1" : "border-static2"} $  mobile1:gap-6`}>
      <ButtonComunity />
      <ButtonAddNewTask
        
        setCurrentModal={setCurrentModal}
        setIsActive={setIsActive}
      />
      <ButtonNotyfication
        isDropNotyfications={isDropNotyfications}
        setIsDropNotyfications={setIsDropNotyfications}
        
      />
      <CounterNotyfications counter={counter} />

      {isDropNotyfications ? <NotyficationPopup /> : ""}
    </section>
  );
}
