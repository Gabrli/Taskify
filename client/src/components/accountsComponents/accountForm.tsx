import ButtonUpdatePassword from "./accountFormComponents/buttonUpdatePassword";
import NewPasswordInput from "./accountFormComponents/newPasswordInput";

export default function AccountForm(){
    
    return (
        <form className="flex justify-center items-center flex-col p-6 pb-20 gap-6 border-b-2 border-white border-opacity-10">
            <label htmlFor="new_password_input" className="text-gray-300 ">* You can change your current password !</label>
           
            <NewPasswordInput/>
            <ButtonUpdatePassword/>
            
        </form>
    )
}