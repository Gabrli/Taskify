import { SlOptions } from "react-icons/sl";

export default function ButtonActiveOptions(props: {setIsDisplayOptions: React.Dispatch<React.SetStateAction<boolean>>, isDisplayOptions: boolean}){
    const { setIsDisplayOptions, isDisplayOptions} = props
    return (
        <button onClick={() => setIsDisplayOptions(!isDisplayOptions)} className="transition duration-600 ease-in-out text-text_dark font-medium p-2 rounded-full hover:bg-primary3"><SlOptions/></button>
    )
}