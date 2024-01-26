import { VscAccount } from "react-icons/vsc";

export default function ButtonAccount() {
  return (
    <a
      href="/account"
      className={`transition duration-700 ease-in-out text-gray-600 font-semibold text-xl pr-1 hover:text-secondary mobile1:text-lg `}
    >
      <VscAccount />
    </a>
  );
}
