import { MdPersonRemove } from "react-icons/md";
import { REMOVE_ACCOUNT_QUERY } from "../../../helpers/accountQueriers";
import { useNavigate } from "react-router";
export default function ButtonRemoveAccount(){
    const navigate = useNavigate()
    return (
        <button onClick={async () => {
            localStorage.removeItem("uid")
            localStorage.removeItem("token")
            navigate("/")
            await REMOVE_ACCOUNT_QUERY()
        }} className="transition duration-500 ease-in-out rounded border-2 border-red-700 text-red-600 flex justify-center items-center w-full text-lg p-1 gap-2 font-semibold hover:bg-red-500 hover:text-white "><MdPersonRemove /> Remove account </button>
    )
}