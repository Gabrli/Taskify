import { useEffect, useState } from "react";
import { TASK_QUERY } from "../../helpers/tasksQueries";
import signalEffect from "../../assets/audio/livechat-129007.mp3";
import { ITask } from "../../types/ITask";
import { INotyfiaction } from "../../types/INotyfiactionInterface";
import { useCalculations } from "../useCalculations";
export const useNotyficationLogic = () => {
  const [notyfiactions, setNotyfications] = useState<INotyfiaction[]>([]);

  useEffect(() => {
    const getElementsFromTask = async () => {
      try {
        const res = await TASK_QUERY();
        const newTasks = res.data.tasks.map((task: ITask) => task);
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

  const builderNotyfications = (tasks: ITask[]) => {
    const newExtractedList = tasks.map((task) => {
      const { date_start, date_end, name } = task;

      const calculationsFun = useCalculations(date_start, date_end);
      const percentages = calculationsFun.mustToDoResult;
      const finishedDays = calculationsFun.finishedDays;
      const futureDays = calculationsFun.futureDays;
      const progress = calculationsFun.progress;

      const newNotyfication: INotyfiaction = {
        id: Math.random(),
        name: name,
        date_start: date_start,
        date_end: date_end,
        mustToDo: percentages,
        finishedDays: finishedDays,
        futureDays: futureDays,
        progress: progress,
        status: calculationsFun.status,
      };

      return newNotyfication;
    });

    setNotyfications(newExtractedList);
  };

  return { notyfiactions };
};
