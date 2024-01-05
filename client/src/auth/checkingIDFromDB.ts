import { NavigateFunction } from "react-router";
import { authToken } from "./token";
let userId: string;
export const checkingIDFromDb = (id:string, navigate: NavigateFunction) => {
    
    if (id) {
        authToken.token = true;
        userId = id
        navigate("/dashboard");
        console.log(userId)
      } else {
        authToken.token = false;
    }
}

export { userId }