import { IoTrashBin } from "react-icons/io5";
export default function ButtonRemove(props: { removeTask: (taskId:string) => Promise<void>, taskId: string}){
    const { removeTask, taskId } = props
    
    return (
        <button onClick={(e) => {
            e.preventDefault()
            removeTask(taskId)
        }}  className="transition duration-700 ease-in-out bg-red-500 rounded text-white flex items-center  pl-2 pr-2 pt-1 pb-1 gap-1 hover:bg-red-400"><IoTrashBin/> Remove</button>
    )
}