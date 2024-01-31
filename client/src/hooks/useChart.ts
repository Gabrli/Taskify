import { useCallback, useContext, useState } from "react";
import { IChart } from "../types/IChart";
import { themeContext } from "../App";
export const useChart = (chartOne:IChart, chartTwo:IChart) => {
    const theme = useContext(themeContext);

    const chartsData: IChart[] = [chartOne, chartTwo];
  
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = chartsData[activeIndex];
  
    const handleClick = useCallback(
      (entry: any, index: number) => {
        setActiveIndex(index);
        console.log(entry);
      },
      [setActiveIndex]
    );

    return { theme, chartsData, activeItem, handleClick, activeIndex}
}