import LandingPage from "./components/pages/landingPage"
import LoginPage from "./components/pages/loginPage"
import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./components/pages/registerPage"
function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
     </Routes>
    </>
  )
}

export default App
