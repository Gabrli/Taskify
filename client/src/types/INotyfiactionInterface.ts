
interface INotyfiaction {
    id:number,
    name:string,
    mustToDo: number,
    date_start:string,
    date_end:string,
    progress:number,
    futureDays: number,
    finishedDays: number,
    isStarted: boolean | undefined,
    
}

export type { INotyfiaction }