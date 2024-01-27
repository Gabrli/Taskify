import { useContext } from "react";
import {
  isMobileContext,
} from "../../components/pages/dashboardPage";
import { themeContext } from "../../App";

export const useDashboardHeaderLogic = (props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;

  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setTheme, setIsActive } = props;
  const isMobile = useContext(isMobileContext);
  const theme = useContext(themeContext);

  return {
    isMobile,
    setIsActive,
    setTheme,
    theme,
  };
};
