import axios from "axios";

export const LOGIN_FORM_QUERY = async (username:string, password:string) => {

    return await axios
    .post(`https://taskifybe-l4ksxiwp.b4a.run/accounts/login`, {
      username: username,
      password: password,
    }).catch((err) => {
     return err
    })
}

export const REGISTER_FORM_QUERY = async (username:string, mail:string, haschedPassword:string) => {

    return await axios
    .post(`https://taskifybe-l4ksxiwp.b4a.run/accounts/register`, {
      username: username,
      email: mail,
      password: haschedPassword,
    }).catch((err) => {
      return err
    })
}