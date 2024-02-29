import { CHANGE_ACCOUNT_QUERY } from "../../../helpers/accountQueriers";
import { userId } from "../../../auth/checkingIDFromDB";
import { useContext, useEffect } from "react";
import bcrypt from "bcryptjs";

import { themeContext } from "../../../App";
export default function ButtonUpdatePassword(props: {
  newPassword: string;
  setIsWrong: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { newPassword, setIsWrong } = props;
  const theme = useContext(themeContext);

  useEffect(() => {
    const localId = localStorage.getItem("uid") as string;
    userId.id = localId;
  }, []);

  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        await CHANGE_ACCOUNT_QUERY(hashedPassword);
        setIsWrong("succesfull");
      }}
      className={`transition duration-700 ease-in-out w-full text-white pl-3 pr-3 pt-1 pb-1 rounded  ${
        theme === "dark" ? "bg-secondary" : "bg-primary3"
      } font-semibold hover:bg-orange-400`}
    >
      Update
    </button>
  );
}
