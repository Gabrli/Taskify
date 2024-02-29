export const useStatisticCalculations = (folders:number, tasks:number) => {
    const activityRatio = Math.round(tasks / folders)
    
    return { activityRatio }
}