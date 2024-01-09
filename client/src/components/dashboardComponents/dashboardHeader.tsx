import React from "react";
import { useDashboardHeaderLogic } from "../../hooks/usedashboardHeaderLogic"
import LeftSection from "./dashHeaderComponents/leftSection";
import RightSection from "./dashHeaderComponents/rightSection";
import CenterSection from "./dashHeaderComponents/centerSection";
export default function DashboardHeader(props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isMobile, setCurrentModal, setIsActive, setTheme } =
    useDashboardHeaderLogic(props);

  return (
    <header className="flex justify-between items-center pt-2 pl-4 pr-4">
      <LeftSection />
      <CenterSection
        isMobile={isMobile}
        setCurrentModal={setCurrentModal}
        setIsActive={setIsActive}
      />
      <RightSection setTheme={setTheme} />
    </header>
  );
}