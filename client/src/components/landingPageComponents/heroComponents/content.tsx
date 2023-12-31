import Title from "./contentComponents/title"
import SubTitle from "./contentComponents/subtitle"
import ButtonGetStarted from "./contentComponents/buttonGetStarted"

export default function HeroContent(){
    
    return (
        <section className="w-maxContentHeroBox max-w-maxContentHeroBox min-w-minContentHeroBox  mobile1:order-last mobile1:border-x-0 mobile1:flex mobile1:flex-col mobile1:justify-center mobile1:items-center mobile1:w-minContentHeroBox">
        <Title />
        <SubTitle />
        <ButtonGetStarted/>
        </section>
    )
}