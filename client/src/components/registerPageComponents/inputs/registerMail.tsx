import { CiMail } from "react-icons/ci";

export default function RegisterMail(props: {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { mail, setMail } = props;
  return (
    <div className="p-1 flex border rounded border-slate-600 items-center gap-4 justify-evanly mb-1">
      <span className="text-gray-500 text-xl p-1">
        <CiMail/>
      </span>
      <input
        className="bg-transparent outline-0 text-white"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        type="text"
        name="register_mail_input"
        id="register_mail_input"
        placeholder="Enter the email"
      />
    </div>
  );
}
