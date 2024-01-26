import { useContext } from "react";
import ButtonAccount from "./rightSectionComponents/buttonAccount";
import ButtonMode from "./rightSectionComponents/buttonMode";
import { isMobileContext } from "../../pages/dashboardPage";

export default function RightSection(props: {setTheme:React.Dispatch<React.SetStateAction<string>>}){
  const { setTheme } = props
  const isMobile = useContext(isMobileContext)
 return (
   <section className={`flex justify-center items-center ${isMobile ? "gap-3 pl-3 pr-2 " : "gap-4 pl-3 "}`}>
    <ButtonMode setTheme={setTheme}/>
    <ButtonAccount/>
    
   </section>

 )
}