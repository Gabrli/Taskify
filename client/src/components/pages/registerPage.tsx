import Form from "../formComponents/form";

export default function RegisterPage() {
  return (
    <>
     <head>
      <title>Register</title>
      <meta name="description" content="Register to taskify"/>
      <link rel="canonical" href="/register"/>
    </head>
    <main className="register_page h-screen flex justify-center items-center">
      <Form />
    </main>
    </>
  );
}
