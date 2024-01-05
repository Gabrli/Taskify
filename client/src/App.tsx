import LandingPage from "./components/pages/landingPage"
import LoginPage from "./components/pages/loginPage"
import PrivateRoute from "./auth/privateRoute"
import DashboardPage from "./components/pages/dashboardPage"
import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./components/pages/registerPage"
import NotyfiactionPage from "./components/pages/notyficationPage"
function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route element={<PrivateRoute/>}>
        <Route element={<DashboardPage/>} path="/dashboard"/>
        <Route element={<NotyfiactionPage/>} path="/notyfiaction"/>
      </Route>
     </Routes>
    </>
  )
}

export default App
