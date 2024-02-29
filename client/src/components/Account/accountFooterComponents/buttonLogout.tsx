import { CiLogout } from "react-icons/ci";
import { authToken } from "../../../auth/token";
import { userId } from "../../../auth/checkingIDFromDB";
import { useNavigate } from "react-router";

export default function ButtonLogout(){
    const navigate = useNavigate()
    const logoutUser = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("uid")
        localStorage.removeItem("username")
        authToken.token = false
        userId.id = ""
        navigate('/')
    }
    return (
        <button onClick={() => logoutUser()} className="transition duration-500 ease-in-out flex justify-center items-center gap-2 w-full p-1 text-lg bg-red-500 rounded text-white font-semibold border-none hover:bg-red-400"><CiLogout/> Log out</button>
    )
}