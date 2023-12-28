
export default function Title(props:{theme:string}){
    const { theme } = props
    return(
        <div  >
            <h1 className={`text-4xl font-semibold  ${theme === "dark"? "text-white" : "text-black"}  mobile1:text-center`}>Taskify</h1>
            <div className="pt-4 pl-1 mobile1:text-center">
                <h2 className={`text-2xl font-semibold  ${theme === "dark"? "text-white" : "text-black"} mobile1:text-center`}><span className="text-pink-500 mobile1:text-center">Free</span> Inteligent task planner !</h2>
            </div>
        </div>
    )
}