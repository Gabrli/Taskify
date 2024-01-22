import { useContext } from "react";

import { themeContext } from "../../../pages/dashboardPage";

export default function ButtonAddNewTask(props: {
  isMobile: boolean;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isMobile, setCurrentModal, setIsActive } = props;
  const theme = useContext(themeContext);
  const eventHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setIsActive(true);
    setCurrentModal("create_modal");
  };

  return (
    <button
      onClick={(e) => eventHandler(e)}
      className={`dash_nav_elements text-sm ${
        theme === "dark" ? "text-text_dark" : "text-text_light"
      }  flex items-center justify-center font-semibold gap-1 `}
    >
      {isMobile ? "" : "New task"}
    </button>
  );
}
