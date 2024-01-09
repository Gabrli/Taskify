import { FaRegUser  } from "react-icons/fa"
export default function NameInput(props: {username:string, setUserName:React.Dispatch<React.SetStateAction<string>>, isWrong:boolean, setIsWrong: React.Dispatch<React.SetStateAction<boolean>>}){
    const { username, setUserName, isWrong, setIsWrong } = props
    return (
        <div className={`p-1 flex border ${isWrong ? "border-red-500" : "border-slate-600"} rounded  items-center gap-4 justify-evanly mb-1`}>
            <span className={`${isWrong ? 'text-red-500' : 'text-gray-500'} text-xl p-1`}><FaRegUser/></span>
            <input className="bg-transparent outline-0 text-white" value={username} onChange={(e) => {
                setUserName(e.target.value)
                setIsWrong(false)
            }} type="text" name="login_username_input"  id="login_username_input" placeholder="Enter the name"/>
        </div>
    )
}