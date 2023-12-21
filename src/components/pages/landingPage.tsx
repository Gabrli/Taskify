import Header from "../landingPageComponents/header"
import Hero from "../landingPageComponents/hero"
import Footer from "../landingPageComponents/footer"

export default function LandingPage(){
    return (
        <>
        
        <div className="h-screen w-screen flex flex-col gap-36">
        <Header/>
        
        <Hero/>
        
        <Footer/>
        </div>
        
        </>
    )
}