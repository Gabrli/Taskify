import ButtonAddNewTask from "./centerSectionComponents/buttonAddNewTask"
import ButtonNotyfication from "./centerSectionComponents/buttonNotification"
import ButtonComunity from "./centerSectionComponents/buttonComunity"

export default function CenterSection(props: {isMobile:boolean}){
    const { isMobile } = props
    return (
        <section className="flex justify-center items-center gap-5 rounded bg-custom-bg-nav-color p-2 border border-gray-500 mobile1:gap-6">
            <ButtonComunity isMobile={isMobile}/>
            <ButtonAddNewTask isMobile={isMobile}/>
            <ButtonNotyfication isMobile={isMobile}/>
        </section>
    )
}