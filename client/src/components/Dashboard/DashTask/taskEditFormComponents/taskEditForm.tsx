import { useState } from "react"
import TaskNameInput from "../../dashInputs/taskNameInput"
import TaskDescriptionInput from "../../dashInputs/taskDescriptionInput"
import TaskDateInput from "../../dashInputs/taskDateInput"
import ButtonCancle from "../../dashInputs/buttonCancle"
export default function TaskEditForm(props: {name:string, description:string, date_start:string, date_end:string, setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,  editTask: (taskName: string, taskDescryption: string, dateStart: string, dateEnd: string, taskId: string) => Promise<void>, task_id:string, setIsWrong: React.Dispatch<React.SetStateAction<boolean>>}){
    const { name, description, date_start, date_end, setIsEditing, editTask, task_id, setIsWrong} = props
    const [newTaskName, setNewTaskName] = useState(name)
    const [newTaskDescription, setNewTaskDescription] = useState(description)
    const [newDateStart, setNewDateStart] = useState(date_start)
    const [newDateEnd, setNewDateEnd] = useState(date_end)
    return (
        <form className="flex flex-col gap-2 p-6">
          <TaskNameInput value={newTaskName} inputId="edit_task_name_input" inputName="edit_task_name_input" setValue={setNewTaskName}  />
          <TaskDescriptionInput value={newTaskDescription} inputId="edit_task_description_input" inputName="edit_task_description_input" setValue={setNewTaskDescription}/>
          <section className="flex justify-between items-center gap-3">
            <TaskDateInput value={newDateStart} inputId="task_edit_date_start" inputName="task_edit_date_start" setValue={setNewDateStart}/>
            <TaskDateInput value={newDateEnd} inputId="task_edit_date_end" inputName="task_edit_date_end" setValue={setNewDateEnd}/>
          </section>
          <button onClick={() => {
            setIsEditing(false)
            editTask(newTaskName, newTaskDescription, newDateStart, newDateEnd, task_id)
          }} className="transition duration-700 ease-in-out ml-auto mr-auto bg-primary text-white font-semibold bg-opacity-20 h-custom-height-modal-inputs rounded w-modalInputs hover:bg-primary2">
            Save
          </button>
          <ButtonCancle setState={setIsEditing} setIsWrong={setIsWrong}/>
        </form>
    )
}