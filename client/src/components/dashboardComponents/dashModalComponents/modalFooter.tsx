import ButtonAdd from "./modalInputs/buttonAdd";
import ButtonCancle from "./modalInputs/buttonCancle";

export default function ModalFooter(props: {eventHandler: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, setIsActive: React.Dispatch<React.SetStateAction<boolean>>, }){
    const { eventHandler, setIsActive } = props
    return (
        <footer className="flex flex-col justify-center items-center gap-2">
            <ButtonAdd eventHandler={eventHandler}/>
            <ButtonCancle setIsActive={setIsActive}/>
        </footer>
    )
}