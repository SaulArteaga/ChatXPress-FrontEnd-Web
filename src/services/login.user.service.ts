import { IUserLoginRequest } from "../interfaces/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { postInitRequest } from "./request.service";
// import { postInitRequest } from "./request.service";

const LOGIN_PATH = "http://localhost:3000/api/v1/user/login";

const loginUser = async (
  user: IUserLoginRequest
): Promise<IUserLoginResponse | null> => {
  const request: RequestInfo = `${LOGIN_PATH}`;
  console.log("aqui-> " + JSON.stringify(user));
  const response = await fetch(request, postInitRequest(user));

  if (response.status === 200) {
    const jsonResponse: IUserLoginResponse = await response.json();
    return jsonResponse;
  }
  return null;
};

export default loginUser;
