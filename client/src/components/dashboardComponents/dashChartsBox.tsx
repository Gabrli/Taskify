import { useContext} from "react"
import { useCalculations } from "../../hooks/useCalculations"
import { isMobileContext, themeContext, charstBoxIsActiveContext} from "../pages/dashboardPage"
import DashChart from "./dashChartsComponents/dashChart"
import { ISearchItem } from "../../types/ISearchItem"

export default function DashChartsBox(props: {foundItem: ISearchItem}){
    const { foundItem } = props
    const theme = useContext(themeContext)
    const isMobile = useContext(isMobileContext)
    const charstBoxIsActive = useContext(charstBoxIsActiveContext)
    const calculations = useCalculations(foundItem.date_start as string, foundItem.date_end as string)

   
    
    return (
        <aside className={`h-max  ${isMobile && charstBoxIsActive ? "block fixed top-20 left-0 chartsBox pb-6  w-full z-10 ": isMobile ? "hidden" : "absolute top-20 right-2"} `}>
            <header className={`p-5 w-full pb-7 `}>
                <h3 className={`font-medium ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Charts and Calculations</h3>
            </header>
            <section className="flex flex-col gap-6">

                <div className={`flex flex-col w-full  ${theme === 'dark' ? "bg-static3" : "bg-static4"} rounded pl-5 pr-5   justify-center items-center `}>
                    <h4 className={`font-medium pt-4 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Progress / to compleate</h4>
                   
                    <DashChart foundItem={foundItem} chartOne={{name: "progress", pv: calculations.progress, uv:calculations.progress, amt:100}} chartTwo={{name: "Must to do", pv: calculations.mustToDoResult, uv:calculations.mustToDoResult, amt:100}} chartType="percentages"/>
                    
                </div>
                <div className={`flex flex-col w-full   ${theme === 'dark' ? "bg-static3" : "bg-static4"} rounded pl-5 pr-5   justify-center items-center `}>
                <h4 className={`font-medium pt-4 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Days</h4>
                   <DashChart foundItem={foundItem} chartOne={{name: "Finisched Days", pv:calculations.diffDays, uv: calculations.finishedDays, amt:calculations.diffDays}} chartTwo={{name:"future days", pv:calculations.diffDays, uv:calculations.futureDays, amt:calculations.diffDays}} chartType="days"/>
                </div>
            </section>
        </aside>
    )
}