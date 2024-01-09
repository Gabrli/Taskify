
interface notyfiaction {
    id:number,
    name:string,
    mustToDo: number,
    date_start:string,
    date_end:string,
    progress:number,
    futureDays: number,
    finishedDays: number,
    isStarted: boolean
}

export type { notyfiaction }