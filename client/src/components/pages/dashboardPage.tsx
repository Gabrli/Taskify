import { createContext, useState } from "react"
import DashboardHeader from "../dashboardComponents/dashboardHeader"
import DashboardModal from "../dashboardComponents/dashboardModal"

const currentModalContext = createContext("")
const isActiveContext = createContext(false)
const themeContext = createContext("")

export default function DashboardPage(){
    const [theme, setTheme] = useState("dark")
    const [isActive, setIsActive] = useState(false)
    const [currentModal, setCurrentModal] = useState("")
    
    return(
        <div className={`dashboard_page ${
            theme === "dark" ? "dark" : "light"} h-screen`}>
           <themeContext.Provider value={theme}>
            <currentModalContext.Provider value={currentModal}>
             <isActiveContext.Provider value={isActive}>

             <DashboardHeader setTheme={setTheme} setCurrentModal={setCurrentModal} setIsActive={setIsActive}/>
             <DashboardModal  />

             </isActiveContext.Provider>
            </currentModalContext.Provider>
           </themeContext.Provider>
        </div>
        
    )
}

export { themeContext, currentModalContext, isActiveContext }