import Notyfication from "./notyfication";
import { useNotyficationLogic } from "../../hooks/useNotyficationLogic";
export default function NotyfiactionWrapper() {
  
  const { notyfiactions } = useNotyficationLogic();

  return (
    <div className=" notifications_wrapper h-custom-height-notyfication-list ">
      <ul className="w-full   flex flex-col justify-center items-center ">
        {notyfiactions.map((notyfication) => {
          return <Notyfication element={notyfication} key={notyfication.id} />;
        })}
      </ul>
    </div>
  );
}
