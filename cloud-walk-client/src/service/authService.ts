import { api } from "./index";
import { loginObj } from "../types/interfaces";

const loginService = {
  login: (values: loginObj) =>
    api
      .post("auth/sign-in-user", values)
      .then((response) => response.data)
      .catch((error) => error.response.data),
  loggedUser: () =>
    api
      .get("auth/user-logged")
      .then((response) => response.data)
      .catch((error) => error.response.data),
};

export default loginService;
