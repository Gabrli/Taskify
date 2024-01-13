import AccountFooter from "./accountFooter";
import AccountForm from "./accountForm";
import AccounteHeader from "./accountHeader";

export default function AccountCard(){
    return(
        <div className="h-screen bg-white p-3 bg-opacity-30 flex flex-col justify-between ">
            <AccounteHeader/>
            <AccountForm/>
            <AccountFooter/>
        </div>
    )
}