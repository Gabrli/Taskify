import { useFormLogic } from "../../hooks/LogicComponentsHooks/useFormLogic";
import ButtonForm from "./inputs/buttonForm";
import FormFooter from "./formFooter";
import FormInput from "./inputs/formInput";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import LoaderPopup from "../Loader/loaderPopup";


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
    isLoading,
    theme
  } = useFormLogic();



  return (
      <>
      <LoaderPopup isLoading={isLoading}/>
      <form className="w-form flex flex-col justify-center items-center  rounded-lg">
      <header className="p-2 pb-6 flex flex-col justify-center items-center">
        <h2 className={`${theme === "dark" ? "text-text_dark" : "text-text_light"} font-bold text-3xl p-2 `}>
          {correctContent === "login_form" ? "Welcome back" : "Join"}
        </h2>
        {isWrong ? (
          <p className="text-red-500 p-1 text-center">
            Incorrect data in the form. Check entered data !
          </p>
        ) : (
          ""
        )}
      </header>
      <div className="w-full flex flex-col justify-center items-center gap-4 pb-4">
        {correctContent === "login_form" ? (
          <>
            <FormInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              value={username}
              setValue={setUserName}
              placeholder="username"
              type="text"
              inputId="form_name_input"
              inputName="form_name_input"
              icon={<FaRegUser />}
            />
            <FormInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              value={password}
              setValue={setPassword}
              placeholder="password"
              type="password"
              inputId="form_password_input"
              inputName="form_password_input"
              icon={<RiLockPasswordFill />}
            />
          </>
        ) : (
          <>
            <FormInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              value={username}
              setValue={setUserName}
              placeholder="Your name"
              type="text"
              inputId="form_name_input"
              inputName="form_name_input"
              icon={<FaRegUser />}
            />
            <FormInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              value={password}
              setValue={setPassword}
              placeholder="Your password"
              type="password"
              inputId="form_password_input"
              inputName="form_password_input"
              icon={<RiLockPasswordFill />}
            />
            <FormInput
              isWrong={isWrong}
              setIsWrong={setIsWrong}
              value={mail}
              setValue={setMail}
              placeholder="Your email"
              type="mail"
              inputId="form_mail_input"
              inputName="form_mail_input"
              icon={<CiMail />}
            />
          </>
        )}
        
        <ButtonForm sendDataFun={sendDataToServer} />
      </div>
      <FormFooter />
    </form>
      
    </>
    
    
  );
}
