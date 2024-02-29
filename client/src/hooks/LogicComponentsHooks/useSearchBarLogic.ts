import { useContext, useState } from "react";
import { taskListContext } from "../../contexts/taskListContext";
import { ISearchItem } from "../../types/ISearchItem";
export const userSearchBarLogic = () => {
    const taskList = useContext(taskListContext);
    const [foundItem, setFoundItem] = useState<ISearchItem>({
      date_start: "",
      date_end: "",
      status: "",
    });
    const filterTaskList = (value: string) => {
      const findItem = taskList.find((task) => task.name === value);
  
      setFoundItem({
        date_start: findItem?.date_start,
        date_end: findItem?.date_end,
        status: findItem?.status,
      });
    };

    return { foundItem, filterTaskList}
}