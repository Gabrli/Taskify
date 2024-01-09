import Notyfication from "./notyfication";
import { useNotyficationLogic } from "../../hooks/useNotyficationLogic";
export default function NotyfiactionWrapper() {
  const { notyfiactions } = useNotyficationLogic();

  return (
    <div className="overflow-y-scroll h-custom-height-notyfication-list ">
      <ul className="w-full   flex flex-col justify-center items-center gap-2">
        {notyfiactions.map((notyfication) => {
          return <Notyfication element={notyfication} key={notyfication.id} />;
        })}
      </ul>
    </div>
  );
}
