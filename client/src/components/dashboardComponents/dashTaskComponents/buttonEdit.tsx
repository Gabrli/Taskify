import { FaEdit } from "react-icons/fa";


export default function ButtonEdit(props: {setIsActive: React.Dispatch<React.SetStateAction<boolean>>, setCurrentModal: React.Dispatch<React.SetStateAction<string>>}){
    const { setIsActive, setCurrentModal,  } = props
    return (
        <button onClick={(e) => {
            e.preventDefault()
           setIsActive(true)
           setCurrentModal("edit_modal")
            
        }} className="btn_edit font-semibold  bg-primary3 text-white flex items-center gap-1 pl-2 pr-2 pt-1 pb-1 rounded "><FaEdit/>Edit</button>
    )
}