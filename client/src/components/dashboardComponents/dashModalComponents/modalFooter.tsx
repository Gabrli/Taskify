import ButtonAdd from "./modalInputs/buttonAdd";
import ButtonCancle from "../dashInputs/buttonCancle";

export default function ModalFooter(props: { addNewTask: (taskName: string, taskDescryption: string, dateStart: string, dateEnd: string) => void, setIsActive: React.Dispatch<React.SetStateAction<boolean>>, setIsWrong: React.Dispatch<React.SetStateAction<boolean>>, setIsAlert: React.Dispatch<React.SetStateAction<boolean>>}){
    const { addNewTask, setIsActive, setIsWrong, setIsAlert } = props
    return (
        <footer className="flex flex-col justify-center items-center gap-2">
            <ButtonAdd addNewTask={addNewTask} setIsAlert={setIsAlert}/>
            <ButtonCancle setState={setIsActive} setIsWrong={setIsWrong}/>
        </footer>
    )
}