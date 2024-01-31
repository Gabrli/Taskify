import { useContext } from "react"
import { themeContext } from "../../App"
import DestinyItem from "./destinyComponents/DestinyItem"
import CorporationImg from '../../assets/img/corporation.svg'
import StudentsImg from '../../assets/img/students.svg'
import WorkingImg from '../../assets/img/working.svg'
import TeamImg from '../../assets/img/team.svg'

export default function Destiny(){
    const theme = useContext(themeContext)
    return (
        <section className="w-full ">
            <header className=" pb-10 pt-6 flex justify-center items-center desiny_header">
                <h3 className={`${theme === "dark" ? "text-text_dark" : "text-text_light"} text-4xl font-semibold`}><span className="text_who">Who</span> is it for ?</h3>
            </header>
            <section className="destiny_box flex justify-evenly items-center pb-4 pt-4 mobile1:flex-col mobile1:gap-4 ">
             <DestinyItem title="Corporations" image={CorporationImg}/>
             <DestinyItem title="Students" image={StudentsImg}/>
             <DestinyItem title="Hard working people" image={WorkingImg}/>
             <DestinyItem title="For everyone !" image={TeamImg}/>
            </section>
        </section>
    )
}