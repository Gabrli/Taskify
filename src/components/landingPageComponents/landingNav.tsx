import { MdOutlineWbSunny } from "react-icons/md";
export default function LandingNav(){
    return(
        <nav className="pr-9">
            <ul className="flex justify-center items-center gap-10 rounded bg-custom-bg-nav-color p-2 border border-gray-500 mobile1:gap-6">
                <li className="text-xl text-white pl-2 mobile1:text-lg mobile1:pl-0"><MdOutlineWbSunny /></li>
                <li className="text-xl font-semibold text-white pr-2 mobile1:text-lg mobile1:pr-0 ">Login</li>
            </ul>
        </nav>
    )
}