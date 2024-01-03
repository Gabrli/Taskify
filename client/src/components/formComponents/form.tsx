import { useState } from "react";
import NameInput from "./inputs/nameInput";
import PasswordInput from "./inputs/passwordInput";
import EmailInput from "./inputs/emailInput";
import ButtonForm from "./inputs/buttonForm";
import FormFooter from "./formFooter";
import axios from "axios";
import { authToken } from "../../auth/token";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useCorrectContent from "../../hooks/useCorrectContent";
import { useNavigate } from "react-router";
import bcrypt from "bcryptjs";

let userId: string;

export default function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const currentLocation = useCurrentLocation();
  const correctContent = useCorrectContent(currentLocation);

  const navigate = useNavigate();

  const sendDataToServer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const haschedPassword = bcrypt.hashSync(password, 10);

    if (currentLocation === "/login") {
      await axios
        .post("http://127.0.0.1:8000/accounts/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.data.uid) {
            authToken.token = true;
            userId = res.data.uid;
            navigate("/dashboard");
          } else {
            authToken.token = false;
          }
        });
    } else {
      await axios
        .post("http://127.0.0.1:8000/accounts/register", {
          username: username,
          email: mail,
          password: haschedPassword,
        })
        .then((res) => {
          if (res.data.uid) {
            authToken.token = true;
            userId = res.data.uid;
            navigate("/dashboard");
          } else {
            authToken.token = false;
          }
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

export { userId };
