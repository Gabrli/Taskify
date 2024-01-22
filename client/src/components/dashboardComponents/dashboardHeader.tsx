import { useDashboardHeaderLogic } from "../../hooks/usedashboardHeaderLogic";
import LeftSection from "./dashHeaderComponents/leftSection";
import RightSection from "./dashHeaderComponents/rightSection";
import CenterSection from "./dashHeaderComponents/centerSection";
import { useContext } from "react";
import { themeContext } from "../pages/dashboardPage";

export default function DashboardHeader(props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isMobile, setCurrentModal, setIsActive, setTheme } =
    useDashboardHeaderLogic(props);
  const theme = useContext(themeContext)

  return (
    <header className={`flex justify-between border-b ${theme === "dark" ? "border-static1" : "border-static2"} pb-2 pt-2    items-center  pl-4 pr-4`}>
    
     <LeftSection/>
     <section className="flex justify-center">
     <CenterSection
        isMobile={isMobile}
        setCurrentModal={setCurrentModal}
        setIsActive={setIsActive}
      />
      <RightSection setTheme={setTheme} />
     </section>
    </header>
  );
}
