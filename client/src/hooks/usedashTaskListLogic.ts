import {  useEffect, useState } from "react";
import signalEffect from "../assets/audio/livechat-129007.mp3";
import {
  TASK_QUERY,
  ADD_TASK_QUERY,
  EDIT_TASK_QUERY,
  REMOVE_TASK_QUERY,
} from "../helpers/tasksQueries";
import { task } from "../types/taskInterface";



export const useDashTaskListLogic = () => {
  const [taskList, setTaskList] = useState<task[]>([]);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    getTasksFromBackend();
  }, []);

  const signalPlay = () => {
    const signal = new Audio(signalEffect);
    signal.play();
  };

  const getTasksFromBackend = async () => {
    await TASK_QUERY().then((res) => {
      setTaskList(res.data.tasks);
    });
  };

  const addNewTask = async (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string
  ) => {
    await ADD_TASK_QUERY(taskName, taskDescryption, dateStart, dateEnd).then(
      (res) => {
        if (res.status === 500) {
          setIsWrong(true);
        } else {
          getTasksFromBackend();
          signalPlay();
        }
      }
    );
  };

  const editTask = async (
    taskName: string,
    taskDescryption: string,
    dateStart: string,
    dateEnd: string,
    taskId: string
  ) => {
    await EDIT_TASK_QUERY(
      taskName,
      taskDescryption,
      dateStart,
      dateEnd,
      taskId
    );
    getTasksFromBackend();
    signalPlay();
  };

  const removeTask = async (taskId: string) => {
    await REMOVE_TASK_QUERY(taskId);
    getTasksFromBackend();
  };

  

  return {
    isWrong,
    
    taskList,
    removeTask,
    addNewTask,
    editTask,
    setIsWrong
  };
};