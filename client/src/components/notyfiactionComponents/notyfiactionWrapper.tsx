import { task } from "../../types/taskInterface";
import { notyfiaction } from "../../types/notyfiactionInterface";
import { useEffect, useState } from "react";
import { TASK_QUERY } from "../../helpers/tasksQueries";

import Notyfication from "./notyfication";

export default function NotyfiactionWrapper() {
  const [notyfiactions, setNotyfications] = useState<notyfiaction[]>([]);

  useEffect(() => {
    const getElementsFromTask = async () => {
      try {
        await TASK_QUERY().then((res) => {
          const newTasks = res.data.tasks.map((task: task) => task);
          builderNotyfications(newTasks);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getElementsFromTask();
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

  const displayNotyfications = notyfiactions.map((notyfication) => {
    return <Notyfication element={notyfication} key={notyfication.id} />;
  });

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

  return (
    <div className="overflow-y-scroll h-custom-height-notyfication-list ">
      <ul className="w-full   flex flex-col justify-center items-center gap-2">
        {displayNotyfications}
      </ul>
    </div>
  );
}
