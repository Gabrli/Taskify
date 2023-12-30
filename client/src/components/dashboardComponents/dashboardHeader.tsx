import RightSection from "./dashHeaderComponents/rightSection";
import CenterSection from "./dashHeaderComponents/centerSection";
import LeftSection from "./dashHeaderComponents/leftSection";

import { useState } from "react";
export default function DashboardHeader(props: {setTheme:React.Dispatch<React.SetStateAction<string>>, setCurrentModal:React.Dispatch<React.SetStateAction<string>>, setIsActive:React.Dispatch<React.SetStateAction<boolean>>}){
    const { setTheme, setCurrentModal, setIsActive } = props
    const [isMobile, setIsMobile] = useState(false)

    const getCurrentClientWidth = (width:number) => {
        width <= 877 ? setIsMobile(true) : setIsMobile(false)
    }

    window.addEventListener('resize', () => getCurrentClientWidth(window.innerWidth))
    
    return (
        <header className="flex justify-between items-center pt-2 pl-4 pr-4">
            <LeftSection/>
            <CenterSection isMobile={isMobile} setCurrentModal={setCurrentModal} setIsActive={setIsActive}/>
            <RightSection setTheme={setTheme}/>
            
        </header>
    )
}