export const useCalculations = (
  dateStart: string,
  dateEnd: string,
  
) => {
  const calculations = (
    dateStart: string,
    dateEnd: string,
    
  ) => {
    const startDate: Date = new Date(dateStart);
    const endDate: Date = new Date(dateEnd);
    const currentDate: Date = new Date();
    const diffDays: number = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const timeDifferencePassed: number =
      currentDate.getTime() - startDate.getTime();

    let mustToDoResult: number;
    let progress: number;
    let futureDays: number;
    let finishedDays: number;
    let timeDifferenceFuture: number;
    let status:string;

    if (startDate <= currentDate) {
      status = "started";
      if (currentDate >= endDate) {
        status = "complited"
        mustToDoResult = 0;
        futureDays = 0;
        finishedDays = Math.floor(timeDifferencePassed / (1000 * 60 * 60 * 24));
        progress = 100;
        return {
          mustToDoResult,
          futureDays,
          finishedDays,
          progress,
          status,
          diffDays
        };
      } else {
       
        mustToDoResult = Math.round((1 / diffDays) * 100);
        timeDifferenceFuture = endDate.getTime() - currentDate.getTime();

        finishedDays = Math.floor(timeDifferencePassed / (1000 * 60 * 60 * 24));
        futureDays = Math.ceil(timeDifferenceFuture / (1000 * 60 * 60 * 24));
        progress = Math.round((finishedDays / diffDays) * 100);
        return {
          mustToDoResult,
          progress,
          finishedDays,
          futureDays,
          status,
          diffDays
        };
      }
    } else {
      status = "waiting";
      timeDifferenceFuture = startDate.getTime() - currentDate.getTime();
      futureDays = Math.ceil(timeDifferenceFuture / (1000 * 60 * 60 * 24));
      progress = 0;
      finishedDays = 0;
      mustToDoResult = 0;

      return {
        futureDays,
        progress,
        finishedDays,
        mustToDoResult,
        status,
        diffDays
      };
    }
  };

 return  calculations(dateStart, dateEnd);
};
