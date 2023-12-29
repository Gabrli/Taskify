import RightSection from "./dashHeaderComponents/rightSection";

export default function DashboardHeader(props: {setTheme:React.Dispatch<React.SetStateAction<string>>}){
    const { setTheme } = props
    
    return (
        <header className="flex justify-evenly items-center pt-2">
            <RightSection setTheme={setTheme}/>
        </header>
    )
}