import { useState } from "react";
import NameInput from "./inputs/nameInput";
import PasswordInput from "./inputs/passwordInput";
import EmailInput from "./inputs/emailInput";
import ButtonForm from "./inputs/buttonForm";
import FormFooter from "./formFooter";
import { useNavigate } from "react-router";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useCorrectContent from "../../hooks/useCorrectContent";

import bcrypt from "bcryptjs";
import {
  LOGIN_FORM_QUERY,
  REGISTER_FORM_QUERY,
} from "../../helpers/formQueries";
import { checkingIDFromDb } from "../../auth/checkingIDFromDB";

export default function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate()
  const currentLocation = useCurrentLocation();
  const correctContent = useCorrectContent(currentLocation);

  const sendDataToServer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const haschedPassword = bcrypt.hashSync(password, 10);

    if (currentLocation === "/login") {
      LOGIN_FORM_QUERY(username, password).then((res) => {
        checkingIDFromDb(res.data.uid, navigate);
      });
    } else {
      REGISTER_FORM_QUERY(username, mail, haschedPassword).then((res) => {
        checkingIDFromDb(res.data.uid, navigate);
      });
    }
  };
  return (
    <form className="w-form flex flex-col justify-center items-center bg-black rounded-lg">
      <header className="p-2 pb-6">
        <h2 className="text-white font-bold text-3xl p-2">
          {correctContent === "login_form" ? "Login" : "Register"}
        </h2>
      </header>
      <div className="flex flex-col justify-center items-center gap-4 pb-4">
        {correctContent === "login_form" ? (
          <>
            <NameInput setUserName={setUserName} username={username} />
            <PasswordInput setPassword={setPassword} password={password} />
          </>
        ) : (
          <>
            <NameInput setUserName={setUserName} username={username} />
            <PasswordInput setPassword={setPassword} password={password} />
            <EmailInput setMail={setMail} mail={mail} />
          </>
        )}
        <ButtonForm sendDataFun={sendDataToServer} />
      </div>
      <FormFooter />
    </form>
  );
}
