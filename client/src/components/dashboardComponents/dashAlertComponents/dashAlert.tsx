import { useContext } from "react"
import { themeContext } from "../../../App"

export default function DashAlert(){
   const theme = useContext(themeContext)
    return (
    <div className={`pl-6 pr-6 pt-4 pb-4 ${theme === "dark" ? "bg-primary2": "bg-secondary"} rounded bg-primary2 `}>
    <p className="font-medium text-white ">Check notifications !</p>
 </div>  
 )  
}