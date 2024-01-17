import PictureHeroContent from "./heroComponents/pictureContent"
import HeroContent from "./heroComponents/content"
export default function Hero(){
    
    return (
        <>
         <main className="flex justify-evenly items-center    pb-10 pt-40 w-full mobile1:flex-col mobile1:pb-0 mobile1:pt-0">
         <HeroContent />
         <PictureHeroContent/>
         </main>
        </>
    )
}