import { BarChart, Bar, Cell } from "recharts";
import { useCallback, useContext,  useState } from "react";
import { themeContext } from "../../pages/dashboardPage";
import { searchItem } from "../../../types/searchItem";
import { useCalculations } from "../../../hooks/useCalculations";
import { chartDaysData } from "../../../types/chartDaysData";
export default function DashDaysChart(props: { foundItem: searchItem}) {
  const { date_start, date_end, isStarted } = props.foundItem
  const theme = useContext(themeContext)
  const calculations = useCalculations(date_start as string, date_end as string, isStarted as boolean )
  const data:chartDaysData[] = [
    {name: "Finisched Days", pv:calculations.diffDays, uv: calculations.finishedDays, amt:calculations.diffDays},
    {name:"future days", pv:calculations.diffDays, uv:calculations.futureDays, amt:calculations.diffDays}
  ];

  

  
    
 
  
    const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
      console.log(entry)
    },
    [setActiveIndex]
  );

  return (
    <div>
      <p className={`text-sm pt-3 pl-3 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Click each rectangle </p>
      <BarChart width={150} height={100} data={data}>
        <Bar dataKey="uv" onClick={handleClick}>
          {data.map((entr, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
              className={`${entr}`}
            />
          ))
          }
        </Bar>
      </BarChart>
      <p className={`content text-sm pb-3  pl-3 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>{` ${activeItem.name}: ${activeItem.uv}`}</p>
    </div>
  );
  
}
