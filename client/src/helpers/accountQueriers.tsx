import axios from "axios";
import { userId } from "../auth/checkingIDFromDB";

export const CHANGE_ACCOUNT_QUERY = async (newPassword: string) => {
  await axios.post(`https://taskify-bed.onrender.com/accounts/changePassword`, {
    uid: userId.id,
    new: newPassword,
  });
};

export const REMOVE_ACCOUNT_QUERY = async () => {
  await axios
    .post(`https://taskify-bed.onrender.com/accounts/delete`, {
      uid: userId.id,
    })
    .catch((err) => {
      return err;
    });
};
