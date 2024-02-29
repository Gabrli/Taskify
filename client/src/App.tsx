import LandingPage from "./views/landingPage";
import LoginPage from "./views/loginPage";
import PrivateRoute from "./auth/privateRoute";
import DashboardPage from "./views/dashboardPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./views/registerPage";
import AccountPage from "./views/accountPage";
import { createContext, useEffect, useState } from "react";

const themeContext = createContext("");

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as string;
    setTheme(localTheme);
  }, []);

  return (
    <>
      <themeContext.Provider value={theme}>
        <Routes>
          <Route path="/" element={<LandingPage setTheme={setTheme} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<PrivateRoute />}>
            <Route
              element={<DashboardPage setTheme={setTheme} />}
              path="/dashboard"
            />
            <Route element={<AccountPage />} path="/account" />
          </Route>
        </Routes>
      </themeContext.Provider>
    </>
  );
}

export default App;
export { themeContext };
