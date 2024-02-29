import { ISearchItem } from "../../../types/ISearchItem";

import { BarChart, Bar, Cell } from "recharts";
import { IChart } from "../../../types/IChart";
import { useChart } from "../../../hooks/useChart";
export default function DashChart(props: {
  foundItem: ISearchItem;
  chartOne: IChart;
  chartTwo: IChart;
  chartType: string;
}) {
  const { chartOne, chartTwo, chartType } = props;
  const { theme, chartsData, handleClick, activeItem, activeIndex } = useChart(
    chartOne,
    chartTwo
  );

  return (
    <div>
      <p
        className={`text-sm pt-3 pl-3 ${
          theme === "dark" ? "text-text_dark" : "text-text_light"
        }`}
      >
        Click each rectangle{" "}
      </p>
      <BarChart width={150} height={100} data={chartsData}>
        <Bar dataKey="uv" onClick={handleClick}>
          {chartsData.map((entr, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
              className={`${entr}`}
            />
          ))}
        </Bar>
      </BarChart>
      <p
        className={`content text-sm pb-3  pl-3 ${
          theme === "dark" ? "text-text_dark" : "text-text_light"
        }`}
      >{` ${activeItem.name}: ${activeItem.uv} ${
        chartType === "days" ? "days" : "%"
      }`}</p>
    </div>
  );
}
