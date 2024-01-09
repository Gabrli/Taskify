import { useEffect, useState } from "react";
import { TASK_QUERY } from "../helpers/tasksQueries";
import signalEffect from '../assets/audio/livechat-129007.mp3'
import { task } from "../types/taskInterface";
import { notyfiaction } from "../types/notyfiactionInterface";

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

  const calculations = (dateStart: string, dateEnd: string) => {
    let startDate: Date = new Date(dateStart);
    let endDate: Date = new Date(dateEnd);

    const currentDate: Date = new Date();

    const diffDays: number = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const mustToDoResult: number = Math.round((1 / diffDays) * 100);
    const timeDifferenceFuture: number =
      endDate.getTime() - currentDate.getTime();
    const timeDifferencePassed: number =
      currentDate.getTime() - startDate.getTime();
    const finishedDays = Math.floor(
      timeDifferencePassed / (1000 * 60 * 60 * 24)
    );
    const futureDays = Math.ceil(timeDifferenceFuture / (1000 * 60 * 60 * 24));
    const progress = Math.round((finishedDays / diffDays) * 100);

    return { mustToDoResult, progress, finishedDays, futureDays };
  };

  const builderNotyfications = (tasks: task[]) => {
    const newExtractedList = tasks.map((task) => {
      const { date_start, date_end, name } = task;
      const calculationsFun = calculations(date_start, date_end);
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
      };

      return newNotyfication;
    });

    setNotyfications(newExtractedList);
  };

  return { notyfiactions };
};
