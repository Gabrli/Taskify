import { useEffect, useState } from "react";
import { IFinallyStatus } from "../types/IFinallyStatus";
import { FaCheck, FaWalking } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";

export const useBadge = (status: string) => {
  const [finallyStatus, setFinallyStatus] = useState<IFinallyStatus>({
    textContent: "",
    icon: <></>,
    bg: "",
  });
  useEffect(() => {
    if (status === "complited") {
      setFinallyStatus({
        textContent: "complited",
        icon: <FaCheck />,
        bg: "bg-green-500",
      });
    } else if (status === "waiting") {
      setFinallyStatus({
        textContent: "waiting",
        icon: <IoTimerOutline />,
        bg: "bg-orange-500",
      });
    } else {
      setFinallyStatus({
        textContent: "started",
        icon: <FaWalking />,
        bg: "bg-blue-500",
      });
    }
  }, [status]);

  return finallyStatus;
};
