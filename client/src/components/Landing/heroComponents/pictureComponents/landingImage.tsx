import image from "../../../../assets/img/landingImg.svg"

export default function LandingImage(){
    return(
        
        <img src={image} className='w-heroImg mobile1:w-mobileHeroImg' alt="landing image"/>
       
    )
}