import DashChartsBox from "../DashCharts/dashChartsBox";
import DashSearchInputbox from "./dashSearchInputBox";
import { userSearchBarLogic } from "../../../hooks/LogicComponentsHooks/useSearchBarLogic";

export default function DashSearchBox() {
  const { foundItem, filterTaskList } = userSearchBarLogic();
  return (
    <div className="w-full  flex justify-evenly items-center pt-20 mobile1:pl-0 mobile1:pr-0">
      <DashSearchInputbox fun={filterTaskList} />
      <DashChartsBox foundItem={foundItem} />
    </div>
  );
}
