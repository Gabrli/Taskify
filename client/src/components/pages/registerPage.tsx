import Form from "../formComponents/form";
import { Helmet } from "react-helmet-async";
export default function RegisterPage() {
  return (
    <>
    <Helmet>
     <title>Register</title>
     <meta name="description" content="Create new account on Taskify !"/>
     <link rel="canonical" href="/register"/>
    </Helmet>
    <main className="register_page h-screen flex justify-center items-center">
      <Form />
    </main>
    </>
  );
}
