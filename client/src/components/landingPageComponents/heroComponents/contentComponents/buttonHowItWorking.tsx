import { useContext } from "react"
import { themeContext } from "../../../pages/landingPage"

export default function ButtonHowItWorking(){
    const theme = useContext(themeContext)
    return (
        <button className={`btn_howIt transition duration-700 ease-in-out pl-6  text-base font-semibold pr-6 pt-2 relative  top-0 mr-auto  pb-2   ${theme === 'dark'? "text-text_dark" : "text-text_light"}   mobile1:left-0 mobile1:top-0  mobile1:mr-auto mobile1:w-full `}><a href="#">How it working ?</a></button>
    )
}