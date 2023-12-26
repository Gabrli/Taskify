export default function LoginFooter() {
  return (
    <footer className="pt-3 pb-3">
      <p className="text-white p-2">
        You don't have account ?{" "}
        <a className="text-blue-500" href="/register">
          Create account
        </a>
      </p>
    </footer>
  );
}
