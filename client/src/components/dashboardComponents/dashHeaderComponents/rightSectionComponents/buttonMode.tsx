import { useContext } from "react"
import { themeContext } from "../../../pages/dashboardPage"
import { MdOutlineWbSunny } from "react-icons/md";

export default function ButtonMode(props: { setTheme: React.Dispatch<React.SetStateAction<string>>}){
    const {  setTheme } = props
    const theme = useContext(themeContext)
   
    return (
        <button className={`text-xl  ${
            theme === "dark" ? "text-white" : "text-yellow-500"
          } pl-2 mobile1:text-lg mobile1:pl-0`}
          onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}><MdOutlineWbSunny/></button>
    )
}