import { useEffect, useState } from "react"
import LandingImage from "./pictureComponents/landingImage"
export default function PictureHeroContent(){
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {getCurrentClientWidth()}, [])
    const getCurrentClientWidth = () => {
        if(window.innerWidth <= 877){
            setIsMobile(true)
        } else setIsMobile(false)
    }
    window.addEventListener('resize', () => getCurrentClientWidth())
    return (
        <section className={`flex justify-center items-center pt-9 ${isMobile ? "hidden" : ""} mobile1:pt-0 mobile1:pb-6`}>
        <LandingImage/>
        </section>
    )
}