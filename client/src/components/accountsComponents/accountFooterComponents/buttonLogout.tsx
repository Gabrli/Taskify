import { CiLogout } from "react-icons/ci";
export default function ButtonLogout(){
    return (
        <button className="transition duration-500 ease-in-out flex justify-center items-center gap-2 w-full p-1 text-lg bg-red-500 rounded text-white font-semibold border-none hover:bg-red-400"><CiLogout/> Log out</button>
    )
}