import { useContext } from "react";
import { themeContext } from "../../../../App";
export default function SubTitle() {
  const theme = useContext(themeContext)
  return (
    <div className="mobile1:w-full pt-4    mobile1:pb-6  " >
      <p className={`pt-4 pl-1 w-full text-base flex flex-col gap-4 pb-5 pt-5 mobile1:text-base  mobile1:justify-start  ${theme === "dark"? "text-text_dark" : "text-text_light"} `}>
      <p className="w-5/6">You want something to organize your working time on its own ?</p>

      <p className="w-5/6">Use our application to inteligent managment your task !</p>
      </p>
    </div>
  );
}
