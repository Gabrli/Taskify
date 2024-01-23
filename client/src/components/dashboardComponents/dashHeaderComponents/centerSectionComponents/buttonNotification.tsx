import { useContext } from "react";
import { MdNotificationsActive } from "react-icons/md"
import { isMobileContext, themeContext } from "../../../pages/dashboardPage";
export default function ButtonNotyfication(props: { isDropNotyfications: boolean, setIsDropNotyfications: React.Dispatch<React.SetStateAction<boolean>>}){
    const {  isDropNotyfications, setIsDropNotyfications } = props
    const theme = useContext(themeContext)
    const isMobile = useContext(isMobileContext)
    return (
        <button onClick={() => setIsDropNotyfications(!isDropNotyfications)}  className={`dash_nav_elements ${theme === "dark" ? "text-text_dark" : "text-text_light"} text-sm font-semibold  `}> {isMobile ? <MdNotificationsActive/> : 'Notyfication'}</button>
    )
}