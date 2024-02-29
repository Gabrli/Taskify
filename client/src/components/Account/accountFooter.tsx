import ButtonLogout from "./accountFooterComponents/buttonLogout";
import ButtonRemoveAccount from "./accountFooterComponents/buttonRemoveAccount";

export default function AccountFooter(){
    return (
        <footer className="flex flex-col justify-center items-center pb-8 gap-5">
            <p className="text-gray-300">* You can remove or log out of your account !</p>
            <ButtonLogout/>
            <ButtonRemoveAccount/>
            
        </footer>
    )
}