import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { themeContext } from "../App";
import Form from "../components/Form/form";
export default function LoginPage() {
  const theme = useContext(themeContext)
  return (
    <>
    <Helmet>
     <title>Login</title>
     <meta name="description" content="Login to your account in Taskify !"/>
     <link rel="canonical" href="/login"/>
    </Helmet>
    <div className={`${theme === "dark" ? "bg-bgdarkcolor" : "bg-bglightcolor"} w-full h-screen flex justify-center items-center`}>
      <Form />
    </div>
    </>
  );
}
