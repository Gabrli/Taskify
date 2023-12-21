import logo from '../../assets/img/logoipsum-292.svg'
import LandingNav from './landingNav';
export default function Header() {
    
  return (
    <header className='flex justify-between items-center pb-4'>
      <div className="p-10 flex justify-center items-center gap-5">
        <img className='w-logo' src={logo}/>
        <p className='text-purple-700 font-semibold'>Taskify</p>
      </div>

      <LandingNav/>
      
    </header>
  );
}
