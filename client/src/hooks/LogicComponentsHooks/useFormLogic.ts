import { useContext, useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router";
import { LOGIN_FORM_QUERY, REGISTER_FORM_QUERY } from "../../helpers/formQueries";
import { checkingIDFromDb } from "../../auth/checkingIDFromDB";
import useCurrentLocation from "../useCurrentLocation";
import useCorrectContent from "../useCorrectContent";
import { themeContext } from "../../App";

export const useFormLogic = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const theme = useContext(themeContext)
  const currentLocation = useCurrentLocation();
  const correctContent = useCorrectContent(currentLocation);

  const sendDataToServer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true)
    const hashedPassword = bcrypt.hashSync(password, 10);

    if (currentLocation === "/login") {
      await LOGIN_FORM_QUERY(username, password).then((res) =>{
        setIsLoading(false)
        console.log(res.code)
        if(res.code === "ERR_BAD_REQUEST"){
          setIsWrong(true)
          
        } else {
          checkingIDFromDb(res.data.uid, navigate, username)
          setIsWrong(false)
          
        }
    });
    } else {
      await REGISTER_FORM_QUERY(username, mail, hashedPassword).then((res) => {
        setIsLoading(false)
        if(res.code === "ERR_BAD_REQUEST"){
          setIsWrong(true)
        } else {
          checkingIDFromDb(res.data.uid, navigate, username)
          setIsWrong(false)
        }
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
    isLoading,
    theme
  };
};
