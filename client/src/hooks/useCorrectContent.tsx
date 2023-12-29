import { useEffect, useState } from "react"

export default function useCorrectContent(location:string){
    const [content, setContent] = useState("")

    useEffect(() => {
       
        if(location === '/login'){
            setContent("login_form")
        } else {
            setContent("register_form")
        }
    }, [content])

    return content
}