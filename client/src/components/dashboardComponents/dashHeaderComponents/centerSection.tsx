import ButtonAddNewTask from "./centerSectionComponents/buttonAddNewTask"
import ButtonNotyfication from "./centerSectionComponents/buttonNotification"
import ButtonComunity from "./centerSectionComponents/buttonComunity"

export default function CenterSection(props: {isMobile:boolean, setCurrentModal:React.Dispatch<React.SetStateAction<string>>, setIsActive:React.Dispatch<React.SetStateAction<boolean>>}){
    const { isMobile, setCurrentModal, setIsActive } = props
    return (
        <section className="flex justify-center items-center gap-5 rounded bg-custom-bg-nav-color p-2 border border-gray-500 mobile1:gap-6">
            <ButtonComunity isMobile={isMobile}/>
            <ButtonAddNewTask isMobile={isMobile} setCurrentModal={setCurrentModal} setIsActive={setIsActive} />
            <ButtonNotyfication isMobile={isMobile}/>
        </section>
    )
}