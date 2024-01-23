import ButtonActiveChartsBox from "./dashFooterComponents/buttonActiveCharts";

export default function DashFooter(props: {setChartsBoxIsActive: React.Dispatch<React.SetStateAction<boolean>>}){
    const { setChartsBoxIsActive } = props
    return (
        <footer className="fixed bottom-0 dashFooter flex justify-center items-center pb-2 pt-2 left-0 w-full bg-primary3">
            <ButtonActiveChartsBox setChartsBoxIsActive={setChartsBoxIsActive}/>
        </footer>
    )
}