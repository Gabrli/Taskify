import { useContext } from "react"
import { themeContext } from "../../../pages/landingPage"
export default function Title(){

    const theme = useContext(themeContext)
    
    return(
        <div  >
            <h1 className={`text-4xl font-semibold  ${theme === "dark"? "text-white" : "text-black"}  mobile1:text-center`}>Taskify</h1>
            <div className="pt-4 pl-1 mobile1:text-center">
                <h2 className={`text-4xl font-semibold  ${theme === "dark"? "text-white" : "text-black"} mobile1:text-center`}><span className="text-pink-500 mobile1:text-center mobile1:text-3xl">Free</span> Inteligent task planner !</h2>
            </div>
        </div>
    )
}