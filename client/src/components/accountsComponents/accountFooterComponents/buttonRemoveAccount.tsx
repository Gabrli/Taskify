import { MdPersonRemove } from "react-icons/md";
export default function ButtonRemoveAccount(){
    return (
        <button className="transition duration-500 ease-in-out rounded border-2 border-red-700 text-red-600 flex justify-center items-center w-full text-lg p-1 gap-2 font-semibold hover:bg-red-500 hover:text-white "><MdPersonRemove /> Remove account </button>
    )
}