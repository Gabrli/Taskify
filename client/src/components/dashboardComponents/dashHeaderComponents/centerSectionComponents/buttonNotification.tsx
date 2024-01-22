import { useContext } from "react";

import { themeContext } from "../../../pages/dashboardPage";
export default function ButtonNotyfication(props: {isMobile:boolean, isDropNotyfications: boolean, setIsDropNotyfications: React.Dispatch<React.SetStateAction<boolean>>}){
    const { isMobile, isDropNotyfications, setIsDropNotyfications } = props
    const theme = useContext(themeContext)
    return (
        <button onClick={() => setIsDropNotyfications(!isDropNotyfications)}  className={`dash_nav_elements ${theme === "dark" ? "text-text_dark" : "text-text_light"} flex items-center justify-center text-sm font-semibold gap-2 `}> {isMobile ? '' : 'Notyfication'}</button>
    )
}