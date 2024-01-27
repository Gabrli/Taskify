import { useContext } from 'react';
import logo from '../../assets/img/logoipsum-300.svg'
import LandingNav from './landingNav';
import { themeContext } from '../../App';
export default function Header(props: { setTheme:React.Dispatch<React.SetStateAction<string>>}) {

  const { setTheme } = props
  const theme = useContext(themeContext)
    
  return (
    <header className={`flex justify-between pt-2  pb-2 border-b ${theme === "dark" ? "border-static1" : "border-static2"}   items-center mobile1:pb-0`}>
      <div className="flex pl-5  justify-center items-center gap-3">
        <img className='w-logo' src={logo}/>
        <p className={`${theme === "dark"?"text-text_dark" : "text-text_light"} font-semibold `}>Taskify</p>
      </div>

      <LandingNav  setTheme={setTheme} />
      
    </header>
  );
}
