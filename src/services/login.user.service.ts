import { API_SERVER } from "../data/data";
import { IUserLoginRequest } from "../interfaces/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { postInitRequest } from "./request.service";
import { storeToken } from "./storeData.service";

/**
 * This function checks if the user is an admin in the database,
 * if it is logs him in, if not returns null.
 * @param user
 * @returns The data from login response or null
 */
const loginUser = async (
  user: IUserLoginRequest
): Promise<IUserLoginResponse | null> => {
  const request: RequestInfo = `${API_SERVER.PATH}user/login`;
  const response = await fetch(request, postInitRequest(user));

  if (response.status === 200) {
    const jsonResponse: IUserLoginResponse = await response.json();
    await storeToken(jsonResponse.token);
    return jsonResponse;
  }
  return null;
};

export default loginUser;
