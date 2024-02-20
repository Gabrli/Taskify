import { useEffect } from "react";
import DashAlert from "./dashAlertComponents/dashAlert";

export default function DashAlertContainer(props: {setIsAlert: React.Dispatch<React.SetStateAction<boolean>>,  isAlert: boolean}){
    const { setIsAlert, isAlert } = props
    useEffect(() => {
        setTimeout(() => {setIsAlert(false)}, 6000)
    }, [isAlert])
    return (
        <div className={`absolute right-4 bottom-4 flex justify-center ${isAlert ? "isAlertShow" : "isAlertHidden"} items-center mobile1:bottom-20`}>
            <DashAlert  />
        </div>
    )
}