import { useContext } from "react"
import { charstBoxIsActiveContext, isMobileContext, themeContext } from "../pages/dashboardPage"
import DashChart from "./dashChartsComponents/dashPercentChart"
import DashDaysChart from "./dashChartsComponents/dashDaysChart"
import { searchItem } from "../../types/searchItem"

export default function DashChartsBox(props: {foundItem: searchItem}){
    const { foundItem } = props
    const theme = useContext(themeContext)
    const isMobile = useContext(isMobileContext)
    const charstBoxIsActive = useContext(charstBoxIsActiveContext)
    return (
        <aside className={`h-max  ${isMobile && charstBoxIsActive ? "block fixed top-20 left-0 chartsBox pb-6  w-full z-10 ": isMobile ? "hidden" : "absolute top-20 right-2"} `}>
            <header className={`p-5 w-full pb-7 `}>
                <h3 className={`font-medium ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Charts and Calculations</h3>
            </header>
            <section className="flex flex-col gap-6">

                <div className={`flex flex-col w-full  ${theme === 'dark' ? "bg-static3" : "bg-static4"} rounded pl-5 pr-5   justify-center items-center `}>
                    <h4 className={`font-medium pt-4 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Progress / to compleate</h4>
                   
                    <DashChart foundItem={foundItem}/>
                    
                </div>
                <div className={`flex flex-col w-full   ${theme === 'dark' ? "bg-static3" : "bg-static4"} rounded pl-5 pr-5   justify-center items-center `}>
                <h4 className={`font-medium pt-4 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Days</h4>
                   <DashDaysChart foundItem={foundItem}/>
                </div>
            </section>
        </aside>
    )
}