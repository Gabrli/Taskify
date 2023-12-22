import PictureHeroContent from "./heroComponents/pictureContent"
import HeroContent from "./heroComponents/content"
export default function Hero(props: {theme:string}){
    const {theme} = props
    return (
        <>
         <main className="flex justify-evenly items-center pt-5  h-custom-height-landing-main mobile1:flex-col">
         <HeroContent theme={theme}/>
         <PictureHeroContent/>
         </main>
        </>
    )
}