import { RiLockPasswordFill } from "react-icons/ri";
export default function PasswordInput(props: {password:string, setPassword:React.Dispatch<React.SetStateAction<string>>, isWrong:boolean, setIsWrong: React.Dispatch<React.SetStateAction<boolean>>}){
    const { password, setPassword, isWrong, setIsWrong} = props
    return(
        <div className={`p-1 bg-none flex justify-evanly items-center gap-4 border rounded ${isWrong ? "border-red-500" : "border-slate-600"} `}>
            <span className={` ${isWrong ? "text-red-500" : "text-gray-500"} p-1 text-xl`}><RiLockPasswordFill /></span>
            <input className="bg-transparent outline-0 text-white " value={password} onChange={(e) => {
                setPassword(e.target.value)
                setIsWrong(false)
                }}type="password" name="login_password" id="login_password" placeholder="Enter the password"/>
        </div>
    )
}