
import { RiLockPasswordFill } from "react-icons/ri";
export default function PasswordInput(){
    return(
        <div className="p-1 bg-none flex justify-evanly items-center gap-4 border rounded border-slate-600 mt-1">
            <span className="text-gray-500 p-1 text-xl"><RiLockPasswordFill /></span>
            <input className="bg-transparent outline-0 text-white " type="password" name="login_password" id="login_password" placeholder="Enter the password"/>
        </div>
    )
}