import { useContext, useEffect } from "react";
import signalEffect from "../../assets/audio/livechat-129007.mp3";
import {
  TASK_QUERY,
  ADD_TASK_QUERY,
  EDIT_TASK_QUERY,
  REMOVE_TASK_QUERY,
} from "../../helpers/tasksQueries";
import { ITask } from "../../types/ITask";
import {
  counterNotyficationsContext,
  taskListContext,
} from "../../components/pages/dashboardPage";

export const useDashTaskListLogic = (
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>,
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
) => {
 
  const counter = useContext(counterNotyficationsContext);
  const taskList = useContext(taskListContext);

  useEffect(() => {
    getTasksFromBackend();
  }, []);

  useEffect(() => {
    setCounter(taskList.length);
  }, [taskList]);

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
        console.log(res.code)
        if (res.code === "ERR_NETWORK") {
           console.log("error")
           setIsWrong(true)
         
        } else {
          setIsWrong(false)
          getTasksFromBackend();
          signalPlay();
          setCounter(counter + 1);
         
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
 

    taskList,
    removeTask,
    addNewTask,
    editTask,
    signalPlay,
    
    
  };
};
