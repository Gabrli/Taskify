import { CiMail } from "react-icons/ci";

export default function EmailInput(props: {
  mail: string;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  isWrong:boolean,
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { mail, setMail, isWrong, setIsWrong } = props;
  return (
    <div className={`p-1 flex border rounded  ${isWrong ? "border-red-500" : "border-slate-600"} items-center gap-4 justify-evanly mb-1`}>
      <span className={` ${isWrong ? "text-red-500" : "text-gray-500"}  text-xl p-1`}>
        <CiMail/>
      </span>
      <input
        className="bg-transparent outline-0 text-white"
        value={mail}
        onChange={(e) => {
          setMail(e.target.value)
          setIsWrong(false)
        }}
        type="text"
        name="register_mail_input"
        id="register_mail_input"
        placeholder="Enter the email"
      />
    </div>
  );
}
