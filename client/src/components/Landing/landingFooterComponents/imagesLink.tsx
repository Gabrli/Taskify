import { useContext } from "react"
import { themeContext } from "../../../App"

export default function ImagesLink(props: {content:string, href:string}){
    const { content, href} = props
    const theme = useContext(themeContext)
    return <a className={`text-gray-500 transition duration-700 ease-in-out ${theme === "dark" ? "hover:text-text_dark" : "hover:text-text_light"}`} href={href}>{content}</a>
}