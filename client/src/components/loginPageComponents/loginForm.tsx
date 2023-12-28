import ButtonLogin from "./Inputs/buttonLogin";
import LoginFooter from "./loginFooter";
import axios from "axios";
import { authToken } from "../../auth/token";
import { useState } from "react";
import LoginPassword from "./Inputs/loginPassword";
import LoginName from "./Inputs/loginName";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const sendDataToServer = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.API_URL}/auth/login`, {
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

    console.log("send");
  };
  return (
    <form className="w-form flex flex-col justify-center items-center bg-black rounded-lg ">
      <header className="p-2 pb-6">
        <h2 className="text-white font-bold text-3xl p-2">Login</h2>
      </header>
      <div className="flex flex-col justify-center items-center gap-4 pb-4">
        <LoginName username={username} setUserName={setUserName} />
        <LoginPassword password={password} setPassword={setPassword} />
        <ButtonLogin sendDataFun={sendDataToServer} />
      </div>
      <LoginFooter />
    </form>
  );
}