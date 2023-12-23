import NameInput from "./loginInputs/nameInput"
import PasswordInput from "./loginInputs/passwordInput"
import ButtonLogin from "./loginInputs/buttonLogin"
import LoginFooter from "./loginFooter"
export default function LoginForm(){
    return (
        <form className="w-form flex flex-col justify-center items-center bg-black rounded-lg ">
            <header className="p-2 pb-6">
                <h2 className="text-white font-bold text-3xl p-2">Login</h2>
                
            </header>
            <div className="flex flex-col justify-center items-center gap-4 pb-4">
             <NameInput/>
             <PasswordInput/>
             <ButtonLogin/>
            </div>
            <LoginFooter/>
        </form>
    )
}