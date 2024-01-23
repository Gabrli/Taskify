import {  useContext } from "react";
import { isMobileContext, themeContext } from "../components/pages/dashboardPage";

export const useDashboardHeaderLogic = (props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setTheme, setCurrentModal, setIsActive } = props;
  const isMobile = useContext(isMobileContext)
  const theme = useContext(themeContext)

 

  return {
    isMobile,
    setCurrentModal,
    setIsActive,
    setTheme,
    theme
    
   
  };
};
