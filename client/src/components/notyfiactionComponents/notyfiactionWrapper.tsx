import { useState } from "react";
import { task } from "../../types/taskInterface";

export default function NotyfiactionWrapper(){
    const [taskList, setTaskList] = useState<task[]>([]) 
    const [notyfiaction, setNotyfication] = useState()

    return(
        <div className="flex flex-col justify-center items-center "></div>
    )
}