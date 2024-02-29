import { useDashboardHeaderLogic } from "../../../hooks/LogicComponentsHooks/usedashboardHeaderLogic";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import CenterSection from "./centerSection";

export default function DashboardHeader(props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;

  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isMobile, setIsActive, setTheme, theme } =
    useDashboardHeaderLogic(props);

  return (
    <header
      className={`flex  justify-between border-b ${
        theme === "dark" ? "border-static1" : "border-static2"
      } pb-2 pt-2    items-center  ${isMobile ? "pr-0 pl-2" : "pr-4 pl-4"}`}
    >
      <LeftSection />
      <section className={`flex justify-center `}>
        <CenterSection setIsActive={setIsActive} />
        <RightSection setTheme={setTheme} />
      </section>
    </header>
  );
}
