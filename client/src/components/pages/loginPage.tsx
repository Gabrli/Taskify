import Form from "../formComponents/form";

export default function LoginPage() {
  return (
    <>
      <head>
      <title>Login</title>
      <meta name="description" content="Login to your taskify account"/>
      <link rel="canonical" href="/login"/>
    </head>
    <main className="login_page h-screen flex justify-center items-center">
      <Form />
    </main>
    </>
  );
}
