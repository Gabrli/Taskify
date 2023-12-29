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
export default function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const currentLocation = useCurrentLocation();
  const correctContent = useCorrectContent(currentLocation);

  const sendDataToServer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (currentLocation === "/login") {
      console.log("login to account");
      await axios
        .post("/accounts/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.data.token) {
            authToken.token = true;
          } else {
            authToken.token = false;
          }
        });
    } else {
      console.log("send new user");
      await axios
        .post("/accounts/register", {
          username: username,
          email: mail,
          password: password,
        })
        .then((res) => {
          //console.log(res)
          if (res.data.token) {
            authToken.token = true;
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
