import ButtonAdd from "./modalInputs/buttonAdd";
import ButtonCancle from "../dashInputs/buttonCancle";

export default function ModalFooter(props: {eventHandler: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, setIsActive: React.Dispatch<React.SetStateAction<boolean>>, setIsWrong: React.Dispatch<React.SetStateAction<boolean>>}){
    const { eventHandler, setIsActive, setIsWrong } = props
    return (
        <footer className="flex flex-col justify-center items-center gap-2">
            <ButtonAdd eventHandler={eventHandler}/>
            <ButtonCancle setState={setIsActive} setIsWrong={setIsWrong}/>
        </footer>
    )
}