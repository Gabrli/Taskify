import { useState, useEffect } from "react";

export const useDashboardHeaderLogic = (props: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setTheme, setCurrentModal, setIsActive } = props;
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const getCurrentClientWidth = () => {
      window.innerWidth <= 877 ? setIsMobile(true) : setIsMobile(false);
    };

    window.addEventListener("resize", getCurrentClientWidth);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", getCurrentClientWidth);
    };
  }, []);

  return {
    isMobile,
    setCurrentModal,
    setIsActive,
    setTheme,
   
  };
};
