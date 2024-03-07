import { useContext } from "react";
import { themeContext } from "../../../App";

export default function ProcessTile(props: {
  title: string;
  order: string;
  description: string;
}) {
  const { title, order, description } = props;
  const theme = useContext(themeContext);
  return (
    <div
      className={`p_tile w-1/6 h-custom-height-process-tile flex flex-col rounded-xl border border-stone-800 mobile1:w-2/3`}
    >
      <header className="w-full flex flex-col p-4 gap-3">
        <span className="flex justify-center w-customWidthOrderProcess h-custom-height-order-process items-center rounded-full bg-primary text-white font-medium">
          {order}
        </span>
        <h4
          className={`${
            theme === "dark" ? "text-text_dark" : "text-text_light"
          } font-medium`}
        >
          {title}
        </h4>
      </header>
      <section className="pl-3">
        <p className="text-gray-500 w-full">{description}</p>
      </section>
    </div>
  );
}
