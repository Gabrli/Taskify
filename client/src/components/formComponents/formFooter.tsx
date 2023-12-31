import useCurrentLocation from "../../hooks/useCurrentLocation";
import useCorrectHref from "../../hooks/useCorrectHref";

export default function FormFooter() {
  const currentLocation = useCurrentLocation();
  const correctHref = useCorrectHref(currentLocation);

  return (
    <footer className="pt-3 pb-3">
      <p className="text-white p-2">
        You don't need new account ?{" "}
        <a className="text-blue-500" href={correctHref}>
          {correctHref === "/login" ? "Login" : "Register"}
        </a>
      </p>
    </footer>
  );
}
