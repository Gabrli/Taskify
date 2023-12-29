import { createContext, useState } from "react"
import DashboardHeader from "../dashboardComponents/dashboardHeader"

const themeContext = createContext("")
export default function DashboardPage(){
    const [theme, setTheme] = useState("dark")
    
    return(
        <div className={`dashboard_page ${
            theme === "dark" ? "dark" : "light"} h-screen`}>
           <themeContext.Provider value={theme}>
            <DashboardHeader setTheme={setTheme}/>
           </themeContext.Provider>
        </div>
        
    )
}

export { themeContext }