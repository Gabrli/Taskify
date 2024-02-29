import Notification from "./notification";
import { useWrapperNotificationLogic } from "../../hooks/LogicComponentsHooks/useWrapperNotificationLogic";
export default function NotifiactionWrapper() {
  
  const { notifiactions } = useWrapperNotificationLogic();

  return (
    <div className=" notifications_wrapper h-custom-height-notyfication-list ">
      <ul className="w-full   flex flex-col justify-center items-center ">
        {notifiactions.map((notification) => {
          return <Notification element={notification} key={notification.id} />;
        })}
      </ul>
    </div>
  );
}
