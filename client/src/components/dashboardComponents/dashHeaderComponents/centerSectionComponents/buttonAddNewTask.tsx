import { IoIosAdd } from "react-icons/io";

export default function ButtonAddNewTask(props: {isMobile:boolean}){
    
    const { isMobile } = props

    return (
        <button className="transition duration-700 ease-in-out text-white  flex items-center justify-center font-semibold gap-1 hover:text-pink-500"><IoIosAdd/> {isMobile ? '' : 'new task'}</button>
    )
}