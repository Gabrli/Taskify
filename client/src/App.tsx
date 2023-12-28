import LandingPage from "./components/pages/landingPage"
import LoginPage from "./components/pages/loginPage"
import PrivateRoute from "./auth/privateRoute"
import DashboardPage from "./components/pages/dashboardPage"
import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./components/pages/registerPage"
function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route element={<PrivateRoute/>}>
        <Route element={<DashboardPage/>} path="/dashboard"/>
      </Route>
     </Routes>
    </>
  )
}

export default App
