import LandingPage from "./components/pages/landingPage"
import LoginPage from "./components/pages/loginPage"
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
     </Routes>
    </>
  )
}

export default App
