import { FaUsers } from "react-icons/fa";
export default function ButtonComunity(props: {isMobile:boolean}){
    const { isMobile } = props

    return (
        <button className="transition duration-700 ease-in-out text-white flex items-center gap-2 font-semibold hover:text-pink-500"><FaUsers /> {isMobile ? '' : 'comunity'}</button>
    )
}