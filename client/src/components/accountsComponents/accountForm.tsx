import { useState } from "react";
import ButtonUpdatePassword from "./accountFormComponents/buttonUpdatePassword";
import NewPasswordInput from "./accountFormComponents/newPasswordInput";

export default function AccountForm(){
    const [newPassword, setNewPassword] = useState("")
    const [isWrong, setIswrong] = useState("normal")
    return (
        <form className="flex justify-center items-center flex-col p-6 pb-20 gap-6 border-b-2 border-white border-opacity-10">
            <label htmlFor="new_password_input" className={` ${isWrong === "wrong" ? "text-red-500" : "text-gray-300"} `}>{isWrong === "wrong" ? "Invalid data !" : isWrong === "succesfull" ? "* Succesfull change !" : " * You can change your current password !"}</label>
           
            <NewPasswordInput newPassword={newPassword} setNewPassword={setNewPassword}/>
            <ButtonUpdatePassword newPassword={newPassword} setIsWrong={setIswrong}/>
            
        </form>
    )
}