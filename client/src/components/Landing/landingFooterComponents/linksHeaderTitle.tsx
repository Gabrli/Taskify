import { useContext } from "react"
import { themeContext } from "../../../App"


export default function LinkHeaderTitle(props: {content:string}){
    const { content } = props
    const theme = useContext(themeContext)
    return <p className={`font-semibold  ${theme === "dark"?"text-text_dark":"text-text_light"}`}>{content}</p>
}