import { useContext } from "react"
import { themeContext } from "../../../../App"

export default function ButtonHowItWorking(){
    const theme = useContext(themeContext)
    return (
        <button className={`btn_howIt transition duration-700 ease-in-out pl-7  text-base font-medium pr-7 pt-3 relative  top-0 mr-auto  pb-3   ${theme === 'dark'? "text-text_dark" : "text-text_light"}   mobile1:left-0 mobile1:top-0  mobile1:mr-auto mobile1:w-full mobile1:text-center`}><a href="#process">How does it working ?</a></button>
    )
}