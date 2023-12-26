import { FaRegUser } from "react-icons/fa";
export default function LoginName(props: {
  username: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { username, setUserName } = props;
  return (
    <div className="p-1 flex border rounded border-slate-600 items-center gap-4 justify-evanly mb-1">
      <span className="text-gray-500 text-xl p-1">
        <FaRegUser />
      </span>
      <input
        className="bg-transparent outline-0 text-white"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        name="login_username_input"
        id="login_username_input"
        placeholder="Enter the name"
      />
    </div>
  );
}
