import axios from "axios";
import { userId } from "../components/formComponents/form";

export const TASK_QUERY = async () => {
  return await axios.post("http://127.0.0.1:8000/tasks/getAll", {
    uid: userId,
  });
};

export const ADD_TASK_QUERY = async (
  taskName: string,
  taskDescryption: string,
  dateStart: string,
  dateEnd: string
) => {
  return await axios.post("http://127.0.0.1:8000/tasks/create", {
    uid: userId,
    name: taskName,
    description:taskDescryption,
    date_start: dateStart,
    date_end: dateEnd
  });
  
};

export const EDIT_TASK_QUERY = async (taskName: string,
   taskDescryption: string,
   dateStart: string,
   dateEnd: string,
   taskId: string) => {

      return await axios
      .post("http://127.0.0.1:8000/tasks/edit", {
        uid: userId,
        task_id: taskId,
        name: taskName,
        description: taskDescryption,
        date_start: dateStart,
        date_end: dateEnd,
      })
}

export const REMOVE_TASK_QUERY = async (taskId: string) => {
   return await axios
   .post("http://127.0.0.1:8000/tasks/remove", {
     uid: userId,
     task_id: taskId,
   })
}
