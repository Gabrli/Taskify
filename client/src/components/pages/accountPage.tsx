import { useContext } from "react";
import AccountCard from "../accountsComponents/accountCard";
import { themeContext } from "../../App";

export default function AccountPage(){
    const theme = useContext(themeContext)
    return (
        <main className={`${theme === "dark" ? "bg-bgdarkcolor" : "bg-bglightcolor"} w-full h-screen flex justify-center items-center`}>
         <AccountCard/>
        </main>
    )
}