import ButtonAccount from "./rightSectionComponents/buttonAccount";
import ButtonMode from "./rightSectionComponents/buttonMode";

export default function RightSection(props: {setTheme:React.Dispatch<React.SetStateAction<string>>}){
  const { setTheme } = props
 return (
   <section className="flex justify-center items-center gap-5  pb-2 pl-3 pt-2    mobile1:gap-3">
    <ButtonMode setTheme={setTheme}/> 
    <ButtonAccount/>
   </section>

 )
}