import { useContext } from "react"
import { themeContext } from "../../../pages/landingPage"

export default function ButtonGetStarted(){
    const theme = useContext(themeContext)
    return(
        <button className={`btn_started transition duration-700 ease-in-out pl-2 rounded text-base font-semibold pr-2 pt-2 relative  top-0   pb-2   ${theme === 'dark'? "text-text_dark" : "text-text_light"}  mobile1:left-0 mobile1:top-0  mobile1:mr-auto mobile1:w-full `}><a href="/register">Get started</a></button>
    )
}