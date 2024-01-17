import ButtonAccount from "./rightSectionComponents/buttonAccount";
import ButtonMode from "./rightSectionComponents/buttonMode";

export default function RightSection(props: {setTheme:React.Dispatch<React.SetStateAction<string>>}){
  const { setTheme } = props
 return (
   <section className="flex justify-center items-center gap-5 rounded bg-custom-bg-nav-color p-2 border border-custom-border-nav mobile1:gap-3">
    <ButtonMode setTheme={setTheme}/> 
    <ButtonAccount/>
   </section>

 )
}