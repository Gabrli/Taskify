import { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { isMobileContext, themeContext } from "../../../pages/dashboardPage";
export default function ButtonComunity(){
    
    const theme = useContext(themeContext)
    const isMobile = useContext(isMobileContext)
    return (
        <button className={`dash_nav_elements ${theme === "dark" ? "text-text_dark" : "text-text_light"} text-sm   font-semibold `}>{isMobile ? <FaUsers/> : 'Comunity'}</button>
    )
}