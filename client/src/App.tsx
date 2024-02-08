import LandingPage from "./components/pages/landingPage"
import LoginPage from "./components/pages/loginPage"
import PrivateRoute from "./auth/privateRoute"
import DashboardPage from "./components/pages/dashboardPage"
import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./components/pages/registerPage"
import AccountPage from "./components/pages/accountPage"
import { createContext, useEffect, useState } from "react"


const themeContext = createContext("")

function App() {
 
  const [theme, setTheme] = useState("dark")
  

  

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as string
    setTheme(localTheme)
   
  } ,[])

  return (
    <>
     <themeContext.Provider value={theme}>
     <Routes>
      <Route path="/" element={<LandingPage setTheme={setTheme}/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route element={<PrivateRoute/>}>
        <Route element={<DashboardPage setTheme={setTheme}/>} path="/dashboard"/>
        <Route element={<AccountPage/>} path="/account"/>
      </Route>
     </Routes>
     </themeContext.Provider>
    </>
  )
}

export default App
export { themeContext }
