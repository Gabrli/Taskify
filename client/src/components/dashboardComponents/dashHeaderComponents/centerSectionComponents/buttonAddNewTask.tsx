import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { isMobileContext, themeContext } from "../../../pages/dashboardPage";

export default function ButtonAddNewTask(props: {
  

  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {   setIsActive } = props;
  const theme = useContext(themeContext);
  const isMobile = useContext(isMobileContext)

  const eventHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setIsActive(true);
 
  };

  return (
    <button
      onClick={(e) => eventHandler(e)}
      className={`dash_nav_elements text-sm ${
        theme === "dark" ? "text-text_dark" : "text-text_light"
      }   font-semibold  `}
    >
      {isMobile ? <IoMdAdd/> : "New task"}
    </button>
  );
}
