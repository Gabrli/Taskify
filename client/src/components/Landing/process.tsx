import { useContext } from "react";
import { themeContext } from "../../App";
import ProcessTile from "./processComponents/processTile";

export default function Process() {
  const theme = useContext(themeContext);
  return (
    <section id="process" className="w-full procces_box pb-10 pt-10">
      <header className="w-full flex justify-center items-center pb-10">
        <h3
          className={`text-4xl ${
            theme === "dark" ? "text-text_dark" : "text-text_light"
          } font-semibold`}
        >
          How it does works ?
        </h3>
      </header>
      <section className="flex justify-evenly items-center w-full mobile1:flex-col mobile1:gap-7">
        <ProcessTile
          title="Login or Sign up"
          order="1"
          description="Login to your account. If you don't have any account, create !"
        />
        <ProcessTile
          title="Go to section where you can create new task "
          order="2"
          description="In a dashboard click in the button 'New ' "
        />
        <ProcessTile
          title="Create your task"
          order="3"
          description="Complete all inputs and click 'Create'"
        />
        <ProcessTile
          title="Notifications"
          order="4"
          description="After creating task, you will get a notification with all needed informations "
        />
      </section>
    </section>
  );
}
