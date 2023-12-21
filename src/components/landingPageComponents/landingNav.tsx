import { MdOutlineWbSunny } from "react-icons/md";
export default function LandingNav(){
    return(
        <nav className="pr-9">
            <ul className="flex justify-center items-center gap-10 rounded bg-custom-bg-nav-color p-2 border border-gray-500">
                <li className="text-xl text-white pl-2"><MdOutlineWbSunny /></li>
                <li className="text-xl font-semibold text-white pr-2">Login</li>
            </ul>
        </nav>
    )
}