import { useContext } from "react"
import { themeContext } from "../../../App"

export default function DestinyItem(props: {title:string, image:string}){
    const { title, image} = props
    const theme = useContext(themeContext)
    return (
        <div className="w-1/4 flex flex-col justify-center items-center mobile1:w-full  mobile1:pb-2">
            <img className="w-1/2" src={image} alt="iconForWho"/>
            <h4 className={` ${theme === "dark" ? "text-text_dark" : "text-text_light"} pt-4 text-xl font-medium`}>{title}</h4>
        </div>
    )
}