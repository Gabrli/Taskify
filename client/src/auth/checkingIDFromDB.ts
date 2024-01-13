import { NavigateFunction } from "react-router";
import { authToken } from "./token";
const userId = {id: ""}
export const checkingIDFromDb = (id: string, navigate: NavigateFunction) => {
  console.log(id)
  if (id) {
    authToken.token = true;
    userId.id = id;
    localStorage.setItem("token", `${authToken.token}`)
    localStorage.setItem("uid", `${userId.id}`)
    navigate("/dashboard");
    
  } else {
    authToken.token = false;
  }
};

export { userId };
