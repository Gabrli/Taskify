import { useContext } from "react"
import { themeContext } from "../../../../App"
export default function Title(){

    const theme = useContext(themeContext)
    
    return(
        <div  >
            <h1 className={`text-7xl font-semibold   ${theme === "dark"? "text-text_dark" : "text-text_light"}    mobile1:text-4xl `}>Taskify</h1>
            <div className="pt-3 pl-1  mobile1:text-center ">
                <h2 className={`text-6xl font-semibold  ${theme === "dark"? "text-white" : "text-black"} mobile1:text-start mobile1:text-4xl`}><span className=" text_free mobile1:text-start mobile1:text-4xl">Free</span> Inteligent task planner !</h2>
            </div>
        </div>
    )
}