import { Cell, BarChart, Bar } from "recharts";
import { searchItem } from "../../../types/searchItem";
import { useCalculations } from "../../../hooks/useCalculations";
import { useEffect, useCallback, useState, useContext } from "react";
import { themeContext } from "../../pages/dashboardPage";
export default function DashChart(props: { foundItem: searchItem}) {
  const { date_start, date_end , isStarted} = props.foundItem
  const calculations = useCalculations(date_start as string, date_end as string, isStarted as boolean )
  const theme = useContext(themeContext)
  const data = [
    {name: "Progress", pv: calculations.progress, uv:calculations.progress, amt:100},
    {name: "Must to do", pv: calculations.mustToDoResult, uv:calculations.mustToDoResult, amt:100}
  ]
  useEffect(() => {console.log(data)}, [])
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div>
      <p className={`text-sm pt-3 pl-3 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>Click each rectangle </p>
      <BarChart width={150} height={100} data={data}>
        <Bar dataKey="uv" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      <p className={`content text-sm pt-2 pl-3 pb-2 ${theme === "dark"?"text-text_dark":"text-text_light"}`}>{` ${activeItem.name}: ${activeItem.uv}%`}</p>
    </div>
  );
}
  
 

    
     

