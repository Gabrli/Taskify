import { useState  } from "react"
import RegisterName from "./inputs/registerName"
import RegisterMail from "./inputs/registerMail"
import RegisterPassword from "./inputs/registerPassword"
import ButtonRegister from "./inputs/buttonRegister"
import RegisterFooter from "./registerFooter"
export default function RegisterForm(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")
    const sendDataToServer = async () => {}
    return (
        <form className="w-form flex flex-col justify-center items-center bg-black rounded-lg">
            <header className="p-2 pb-6">
                <h2 className="text-white font-bold text-3xl p-2">Register</h2>
                
            </header>
            <div className="flex flex-col justify-center items-center gap-4 pb-4">
                <RegisterName username={username} setUserName={setUserName}/>
                <RegisterMail mail={mail} setMail={setMail}/>
                <RegisterPassword password={password} setPassword={setPassword}/>
                <ButtonRegister sendDataFun={sendDataToServer}/>
            </div>
            <RegisterFooter/>
        </form>
    )
}