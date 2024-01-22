import { useEffect, useState } from "react";
import { TASK_QUERY } from "../helpers/tasksQueries";
import signalEffect from "../assets/audio/livechat-129007.mp3";
import { task } from "../types/taskInterface";
import { notyfiaction } from "../types/notyfiactionInterface";
import { useCalculations } from "./useCalculations";
export const useNotyficationLogic = () => {
  const [notyfiactions, setNotyfications] = useState<notyfiaction[]>([]);

  useEffect(() => {
    const getElementsFromTask = async () => {
      try {
        const res = await TASK_QUERY();
        const newTasks = res.data.tasks.map((task: task) => task);
        builderNotyfications(newTasks);
      } catch (error) {
        console.log(error);
      }
    };

    const checkElementsInNotyficationList = () => {
      const signal = new Audio(signalEffect);
      if (notyfiactions.length >= 1) {
        signal.play();
      } else {
        return;
      }
    };

    getElementsFromTask();
    checkElementsInNotyficationList();
  }, []);

  
  const builderNotyfications = (tasks: task[]) => {
    const newExtractedList = tasks.map((task) => {
      const { date_start, date_end, name, isStarted } = task;
      

      const calculationsFun = useCalculations(date_start, date_end, isStarted);
      const procent = calculationsFun.mustToDoResult;
      const finishedDays = calculationsFun.finishedDays;
      const futureDays = calculationsFun.futureDays;
      const progress = calculationsFun.progress;

      const newNotyfication: notyfiaction = {
        id: Math.random(),
        name: name,
        date_start: date_start,
        date_end: date_end,
        mustToDo: procent,
        finishedDays: finishedDays,
        futureDays: futureDays,
        progress: progress,
        isStarted: calculationsFun.isStarted,
      };

      return newNotyfication;
    });

    setNotyfications(newExtractedList);
  };

  return { notyfiactions };
};
