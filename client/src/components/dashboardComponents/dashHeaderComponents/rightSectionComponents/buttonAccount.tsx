import { useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { themeContext } from "../../../pages/dashboardPage";
export default function ButtonAccount(){
    const theme = useContext(themeContext)
    return (
        <a href="/account" className={` ${theme === "dark" ? "text-secondary" : "text-primary"} font-semibold text-xl pr-1 mobile1:text-lg`}><VscAccount/></a>
    )
}