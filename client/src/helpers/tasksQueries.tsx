import axios from "axios";
import { userId } from "../auth/checkingIDFromDB";

export const TASK_QUERY = async () => {
  return await axios.post(`https://gabryss-taskify.hf.space/tasks/getAll`, {
    uid: userId.id,
  })
};

export const NOTYFICATION_TASK_QUERY = async () => {
  return await axios.post(`https://gabryss-taskify.hf.space/tasks/getAll`, {
    uid: userId.id,
  })
}

export const ADD_TASK_QUERY = async (
  taskName: string,
  taskDescryption: string,
  dateStart: string,
  dateEnd: string,
 
) => {
  return await axios.post(`https://gabryss-taskify.hf.space/tasks/create`, {
    uid: userId.id,
    name: taskName,
    description:taskDescryption,
    date_start: dateStart,
    date_end: dateEnd
  }).catch((err) => {
    return err
  })
  
};

export const EDIT_TASK_QUERY = async (taskName: string,
   taskDescryption: string,
   dateStart: string,
   dateEnd: string,
   taskId: string) => {

      return await axios
      .post(`https://gabryss-taskify.hf.space/tasks/edit`, {
        uid: userId.id,
        task_id: taskId,
        name: taskName,
        description: taskDescryption,
        date_start: dateStart,
        date_end: dateEnd,
      }).catch((err) => {
        return err
      })
}

export const REMOVE_TASK_QUERY = async (taskId: string) => {
   return await axios
   .post(`https://gabryss-taskify.hf.space/tasks/remove`, {
     uid: userId.id,
     task_id: taskId,
   })
}
