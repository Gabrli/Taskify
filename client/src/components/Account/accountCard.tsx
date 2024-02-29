import { useContext } from "react";
import AccountFooter from "./accountFooter";
import AccountForm from "./accountForm";
import AccounteHeader from "./accountHeader";
import { themeContext } from "../../App";

export default function AccountCard() {
  const theme = useContext(themeContext)
  return (
    <div className={`h-screen  p-3 ${theme === "dark" ? "bg-primary2" : "bg-secondary"} flex flex-col justify-between `}>
      <AccounteHeader />
      <AccountForm />
      <AccountFooter />
    </div>
  );
}
