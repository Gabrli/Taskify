import Form from "../formComponents/form";
import { Helmet } from "react-helmet-async";
export default function LoginPage() {
  return (
    <>
    <Helmet>
     <title>Login</title>
     <meta name="description" content="Login to your account in Taskify !"/>
     <link rel="canonical" href="/login"/>
    </Helmet>
    <main className="login_page h-screen flex justify-center items-center">
      <Form />
    </main>
    </>
  );
}
