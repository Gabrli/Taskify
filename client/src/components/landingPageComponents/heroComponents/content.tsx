import Title from "./contentComponents/title"
import SubTitle from "./contentComponents/subtitle"
import ButtonGetStarted from "./contentComponents/buttonGetStarted"
import ButtonHowItWorking from "./contentComponents/buttonHowItWorking"

export default function HeroContent(){
    
    return (
        <section className="w-maxContentHeroBox    mobile1:order-last mobile1:border-x-0 mobile1:flex mobile1:flex-col mobile1:justify-start mobile1:items-center mobile1:w-full  mobile1:pt-5 mobile1:pb-10">
        <div className="flex flex-col w-full justify-start pl-7 mobile1:pl-2">
        <Title />
        <SubTitle />
        
        </div>
        <div className="flex justify-center gap-4  pl-7 items-center w-full mobile1:flex-col  mobile1:mr-auto mobile1:pl-2 mobile1:pr-8 ">
        <ButtonGetStarted/>
        <ButtonHowItWorking/>
        </div>
      
       
        </section>
    )
}