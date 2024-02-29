import { useContext } from "react"
import { chartsBoxIsActiveContext } from "../../../contexts/chartsBoxIsActiveContext";
import { themeContext } from "../../../App";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
export default function ButtonActiveChartsBox(props: {setChartsBoxIsActive: React.Dispatch<React.SetStateAction<boolean>>}){
    const { setChartsBoxIsActive } = props
    const charstBoxIsActive = useContext(chartsBoxIsActiveContext)
    const theme = useContext(themeContext)
    return (
        <button className={`btnDashFooter  text-2xl w-11/12 rounded flex justify-center items-center ${theme === "dark"?"text-text_dark " : "text-text_light "}  p-2 `} onClick={() => setChartsBoxIsActive(!charstBoxIsActive)}>{charstBoxIsActive ?  <MdKeyboardArrowDown/>  : <MdKeyboardArrowUp/>}</button>
    )
}