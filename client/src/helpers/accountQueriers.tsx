import axios from "axios";
import { userId } from "../auth/checkingIDFromDB";

export const CHANGE_ACCOUNT_QUERY = async (newPassword: string) => {
  await axios.post("/accounts/changePassword", {
    uid: userId.id,
    new: newPassword,
  });
};

export const REMOVE_ACCOUNT_QUERY = async () => {
  await axios
    .post("/accounts/delete", {
      uid: userId.id,
    })
    .catch((err) => {
      return err;
    });
};
