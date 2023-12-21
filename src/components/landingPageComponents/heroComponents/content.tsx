import Title from "./contentComponents/title"
import SubTitle from "./contentComponents/subtitle"
import ButtonGetStarted from "./contentComponents/buttonGetStarted"

export default function HeroContent(){
    return (
        <section className="w-contentHeroBox mobile1:order-last mobile1:border-x-0 ">
        <Title/>
        <SubTitle/>
        <ButtonGetStarted/>
        </section>
    )
}