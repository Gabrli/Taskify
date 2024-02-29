import useCurrentLocation from "../../hooks/useCurrentLocation";
import useCorrectHref from "../../hooks/useCorrectHref";
import { useContext } from "react";
import { themeContext } from "../../App";

export default function FormFooter() {
  const currentLocation = useCurrentLocation();
  const correctHref = useCorrectHref(currentLocation);
  const theme = useContext(themeContext)

  return (
    <footer className="pt-3 pb-3">
      <p className={`${theme === "dark"?"text-text_dark" : "text-text_light"} p-2 font-medium`}>
        {correctHref === '/login' ? "New user ?" : "You have account ?"}{" "}
        <a className="text-blue-500" href={correctHref}>
          {correctHref === "/login" ? "Login" : "Register"}
        </a>
      </p>
    </footer>
  );
}
