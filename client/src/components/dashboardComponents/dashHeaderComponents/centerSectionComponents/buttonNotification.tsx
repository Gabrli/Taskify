import { IoIosNotifications } from "react-icons/io";
export default function ButtonNotyfication(props: {isMobile:boolean, isDropNotyfications: boolean, setIsDropNotyfications: React.Dispatch<React.SetStateAction<boolean>>}){
    const { isMobile, isDropNotyfications, setIsDropNotyfications } = props

    return (
        <button onClick={() => setIsDropNotyfications(!isDropNotyfications)}  className="transition duration-700 ease-in-out text-white flex items-center justify-center font-semibold gap-2 hover:text-pink-500"><IoIosNotifications /> {isMobile ? '' : 'notyfication'}</button>
    )
}