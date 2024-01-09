import { MdClear } from "react-icons/md";
export default function NotyficationsHeader(props: {counter: number}){
    const { counter } = props
    return (
        <header className=" p-2 bg-fuchsia-500 rounded flex justify-center items-center gap-4">
            <p className="text-white pl-1">Your notyfications: </p>
            <p className="bg-red-500 text-white rounded p-2">{counter} new</p>
            
            <button className="flex items-center bg-white pl-2 pr-2 pt-1 pb-1 rounded gap-1 "><MdClear /> Clear all</button>
        </header>
    )
}