import { useContext } from "react";
import Modal from "./dashModalComponents/modal";
import { isActiveContext } from "../pages/dashboardPage";

export default function DashboardModal() {
  const isActive = useContext(isActiveContext);
  return (
    <div
      className={`h-screen fixed inset-0 bg-black ${
        isActive ? "" : "hidden"
      } bg-opacity-40 flex justify-center items-center `}
    >
      <Modal />
    </div>
  );
}
