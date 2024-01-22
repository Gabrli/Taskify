import { useContext } from "react";

import { themeContext } from "../../../pages/dashboardPage";
export default function ButtonComunity(props: {isMobile:boolean}){
    const { isMobile } = props
    const theme = useContext(themeContext)
    return (
        <button className={`dash_nav_elements ${theme === "dark" ? "text-text_dark" : "text-text_light"} text-sm flex items-center gap-2 font-semibold `}>{isMobile ? '' : 'Comunity'}</button>
    )
}