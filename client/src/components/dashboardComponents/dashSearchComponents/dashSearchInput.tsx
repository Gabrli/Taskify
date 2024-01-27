import { useContext, useState } from "react"
import { themeContext } from "../../../App"

export default function DashSearchInput(props: {fun: (value: string) => void}){
    const { fun } = props
    const theme = useContext(themeContext)
    const [value, setValue] = useState("")
    return (
        <input type="text" id="dash_search_input" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => {
            if(e.code === "Enter"){
                fun(value)
            } else {
                return 
            }
        }} name="dash_search_input" placeholder="Search" className={`bg-transparent font-medium border-0 outline-none ${theme === "dark" ? "text-text_dark" : "text-text_light"}`}/>
    )
}