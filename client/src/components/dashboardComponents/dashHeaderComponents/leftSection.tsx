import ButtonLogOut from "./leftSectionComponents/buttonLogOut";

export default function LeftSection(){
    return (
        <section className="flex justify-center items-center gap-5 rounded bg-custom-bg-nav-color p-2 border border-gray-500 mobile1:gap-6">
            <ButtonLogOut/>
        </section>
    )
}