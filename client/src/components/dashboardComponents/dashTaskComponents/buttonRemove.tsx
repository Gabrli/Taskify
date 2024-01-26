import { IoTrashBin } from "react-icons/io5";
export default function ButtonRemove(props: { removeTask: (taskId: string) => void, taskId: string}){
    const { removeTask, taskId } = props
    
    return (
        <button onClick={(e) => {
            e.preventDefault()
            removeTask(taskId)
        }}  className="transition duration-700 font-semibold ease-in-out bg-custom-btn-color rounded-full text-white flex items-center  p-2  hover:bg-primary3"><IoTrashBin/></button>
    )
}