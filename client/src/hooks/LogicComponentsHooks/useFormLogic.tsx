import { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router";
import { LOGIN_FORM_QUERY, REGISTER_FORM_QUERY } from "../../helpers/formQueries";
import { checkingIDFromDb } from "../../auth/checkingIDFromDB";
import useCurrentLocation from "../useCurrentLocation";
import useCorrectContent from "../useCorrectContent";

export const useFormLogic = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const navigate = useNavigate();
  const currentLocation = useCurrentLocation();
  const correctContent = useCorrectContent(currentLocation);

  const sendDataToServer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const hashedPassword = bcrypt.hashSync(password, 10);

    if (currentLocation === "/login") {
      await LOGIN_FORM_QUERY(username, password).then((res) =>
        checkingIDFromDb(res.data.uid, navigate, username)
      );
    } else {
      await REGISTER_FORM_QUERY(username, mail, hashedPassword).then((res) => {
        checkingIDFromDb(res.data.uid, navigate, username);
      });
    }
  };

  return {
    username,
    setUserName,
    password,
    setPassword,
    mail,
    setMail,
    isWrong,
    setIsWrong,
    currentLocation,
    correctContent,
    sendDataToServer,
  };
};
