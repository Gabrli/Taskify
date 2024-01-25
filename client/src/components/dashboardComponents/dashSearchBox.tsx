import { useContext, useState } from "react";
import DashChartsBox from "./dashChartsBox";
import DashSearchInputbox from "./dashSearchComponents/dashSearchInputBox";
import { taskListContext } from "../pages/dashboardPage";
import { searchItem } from "../../types/ISearchItem";

export default function DashSearchBox() {
  const taskList = useContext(taskListContext)
  const [foundItem, setFoundItem] = useState<searchItem>( {
  
    date_start:"",
    date_end:"",
    isStarted: false
  })
  const filterTaskList = (value:string) => {
    const findItem = taskList.find((task) => task.name === value)
    
    
   setFoundItem({date_start: findItem?.date_start, date_end: findItem?.date_end, isStarted:findItem?.isStarted})
    

    
  }
  return (
    <div className="w-full  flex justify-evenly items-center pt-20 mobile1:pl-0 mobile1:pr-5">
      <DashSearchInputbox fun={filterTaskList} />
      <DashChartsBox foundItem={foundItem}/>
    </div>
  );
}
