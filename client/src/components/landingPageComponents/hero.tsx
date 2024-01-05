import PictureHeroContent from "./heroComponents/pictureContent"
import HeroContent from "./heroComponents/content"
export default function Hero(){
    
    return (
        <>
         <main className="flex justify-evenly items-center   h-custom-height-landing-main mobile1:flex-col">
         <HeroContent />
         <PictureHeroContent/>
         </main>
        </>
    )
}