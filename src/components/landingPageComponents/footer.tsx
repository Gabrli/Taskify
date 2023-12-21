import contactImage from '../../assets/img/contactImg.svg'
import { CiMail } from "react-icons/ci";
import { FaPhone, FaGithub } from "react-icons/fa";
export default function Footer(){
    return (
        <footer className="flex justify-evenly items-center h-custom-height-landing-plus positive-box w-full  absolute bottom-0  ">
            <div >
                <img className='w-contactImg' alt="contact picture" src={contactImage}/>
            </div>
            <ul className='flex flex-col gap-3 border-x-2 pl-14 pr-14'>
                <li className='text-white text-lg'><a className='flex items-center gap-2 font-semibold' href='#'><CiMail /> Email</a></li>
                <li className='text-white text-lg'><a className='flex items-center gap-2 font-semibold' href='#'><FaPhone /> Phone</a></li>
                <li className='text-white text-lg'><a className='flex items-center gap-2 font-semibold' href='#'><FaGithub /> Project repo</a></li>
                <li className='text-white text-xl'><a className='flex items-center gap-2 font-bold' href='#'><span className='text-pink-500'>Coded by:</span> Gabriel Wiśniewski</a></li>
            </ul>

        </footer>
    )
}