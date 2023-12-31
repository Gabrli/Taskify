import { IoIosNotifications } from "react-icons/io";
export default function ButtonNotyfication(props: {isMobile:boolean}){
    const { isMobile } = props

    return (
        <button className="transition duration-700 ease-in-out text-white flex items-center justify-center font-semibold gap-2 hover:text-pink-500"><IoIosNotifications /> {isMobile ? '' : 'notyfication'}</button>
    )
}