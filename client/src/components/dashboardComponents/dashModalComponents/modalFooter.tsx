import ButtonAdd from "./modalInputs/buttonAdd";
import ButtonCancle from "./modalInputs/buttonCancle";

export default function ModalFooter(){
    return (
        <footer className="flex flex-col justify-center items-center gap-2">
            <ButtonAdd/>
            <ButtonCancle/>
        </footer>
    )
}