import logo from '../../assets/img/logoipsum-292.svg'
import LandingNav from './landingNav';
export default function Header(props: { setTheme:React.Dispatch<React.SetStateAction<string>>}) {

  const { setTheme } = props
    
  return (
    <header className='flex justify-between pt-3  items-center '>
      <div className="flex pl-5  justify-center items-center gap-3">
        <img className='w-logo' src={logo}/>
        <p className='text-purple-700 font-semibold '>Taskify</p>
      </div>

      <LandingNav  setTheme={setTheme} />
      
    </header>
  );
}
