import axios from "axios";

export const LOGIN_FORM_QUERY = async (username:string, password:string) => {
    return await axios
    .post("/accounts/login", {
      username: username,
      password: password,
    }).catch((err) => {
     return err
    })
}

export const REGISTER_FORM_QUERY = async (username:string, mail:string, haschedPassword:string) => {
    return await axios
    .post("/accounts/register", {
      username: username,
      email: mail,
      password: haschedPassword,
    }).catch((err) => {
      return err
    })
}