import { IoIosSearch } from "react-icons/io";
import DashSearchInput from "./dashSearchInput";
import { useContext } from "react";
import {  themeContext } from "../../pages/dashboardPage";
export default function DashSearchInputbox(props: {fun: (value: string) => void}){
    const { fun } = props
    const theme = useContext(themeContext)
    
    return (
        <div className="flex justify-start pl-2     items-center gap-3 dash_search_box rounded w-1/3  pb-2 pt-2 mobile1:w-11/12 ">
            <span className={`${theme === "dark"? "text-text_dark" : "text-text_light"}`}><IoIosSearch/></span>
            <DashSearchInput fun={fun}/>

        </div>
    )
}