import { useFormLogic } from "../../hooks/useFormLogic";
import NameInput from "./inputs/nameInput";
import PasswordInput from "./inputs/passwordInput";
import EmailInput from "./inputs/emailInput";
import ButtonForm from "./inputs/buttonForm";
import FormFooter from "./formFooter";
export default function Form() {
  const {
    username,
    setUserName,
    password,
    setPassword,
    mail,
    setMail,
    isWrong,
    setIsWrong,
    correctContent,
    sendDataToServer,
  } = useFormLogic();

  return (
    <form className="w-form flex flex-col justify-center items-center bg-primary2 rounded-lg">
      <header className="p-2 pb-6">
        <h2 className="text-white font-bold text-3xl p-2">
          {correctContent === "login_form" ? "Login" : "Register"}
        </h2>
        {isWrong ? (
          <p className="text-red-500 p-1 text-center">
            Incorrect data in the form. Correct data!
          </p>
        ) : (
          ""
        )}
      </header>
      <div className="flex flex-col justify-center items-center gap-4 pb-4">
        {correctContent === "login_form" ? (
          <>
            <NameInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              setUserName={setUserName}
              username={username}
            />
            <PasswordInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              setPassword={setPassword}
              password={password}
            />
          </>
        ) : (
          <>
            <NameInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              setUserName={setUserName}
              username={username}
            />
            <PasswordInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              setPassword={setPassword}
              password={password}
            />
            <EmailInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              setMail={setMail}
              mail={mail}
            />
          </>
        )}
        <ButtonForm sendDataFun={sendDataToServer} />
      </div>
      <FormFooter />
    </form>
  );
}