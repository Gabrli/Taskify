import { RiLockPasswordFill } from "react-icons/ri";
export default function LoginPassword(props: {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { password, setPassword } = props;
  return (
    <div className="p-1 bg-none flex justify-evanly items-center gap-4 border rounded border-slate-600 mt-1">
      <span className="text-gray-500 p-1 text-xl">
        <RiLockPasswordFill />
      </span>
      <input
        className="bg-transparent outline-0 text-white "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="login_password"
        id="login_password"
        placeholder="Enter the password"
      />
    </div>
  );
}
