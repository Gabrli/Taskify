import { useEffect, useState } from "react";

export default function useCorrectHref(location:string){
    const [href, setHref] = useState("")

    useEffect(() => {
        if(location === '/login'){
            setHref('/register')
        } else {
            setHref('/login')
        }
    }, [href])

    return href
}