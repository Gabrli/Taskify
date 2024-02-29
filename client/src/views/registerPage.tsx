import { useContext } from "react";
import Form from "../components/Form/form";
import { Helmet } from "react-helmet-async";
import { themeContext } from "../App";
export default function RegisterPage() {
  const theme = useContext(themeContext)
  return (
    <>
    <Helmet>
     <title>Register</title>
     <meta name="description" content="Create new account on Taskify !"/>
     <link rel="canonical" href="/register"/>
    </Helmet>
    <div className={`${theme === "dark" ? "bg-bgdarkcolor" : "bg-bglightcolor"} w-full h-screen flex justify-center items-center`}>
      <Form />
    </div>
    </>
  );
}
