import AccountFooter from "./accountFooter";
import AccountForm from "./accountForm";
import AccounteHeader from "./accountHeader";

export default function AccountCard() {
  return (
    <div className="h-screen  p-3 bg-primary3 flex flex-col justify-between ">
      <AccounteHeader />
      <AccountForm />
      <AccountFooter />
    </div>
  );
}
