import { useEffect, useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
export default function AccounteHeader() {
  const [username, setUserName] = useState<string | null>("");
  useEffect(() => {
    const localUserName = localStorage.getItem("username");
    setUserName(localUserName);
  }, []);
  return (
    <header className="p-2 border-b-2 border-white border-opacity-10 pb-6">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center items-center text-8xl text-white">
          <MdOutlineAccountCircle />
        </div>
        <p className="text-white text-lg font-semibold text-center">
          Account settings
        </p>
      </section>
      <section className="pt-2">
        <p className="text-gray-400 font-semibold text-center">
          Hi {username} !
        </p>
      </section>
    </header>
  );
}
