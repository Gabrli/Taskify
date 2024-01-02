import { FaEdit } from "react-icons/fa";


export default function ButtonEdit(props: {setIsActive: React.Dispatch<React.SetStateAction<boolean>>, setCurrentModal: React.Dispatch<React.SetStateAction<string>>}){
    const { setIsActive, setCurrentModal,  } = props
    return (
        <button onClick={(e) => {
            e.preventDefault()
           setIsActive(true)
           setCurrentModal("edit_modal")
            
        }} className="transition duration-700 ease-in-out bg-orange-400 text-white flex items-center gap-1 pl-2 pr-2 pt-1 pb-1 rounded hover:bg-orange-300"><FaEdit/>Edit</button>
    )
}