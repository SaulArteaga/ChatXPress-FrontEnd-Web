import { ITotalActiveUsersResponse } from "../interfaces/ITotalActiveUsersResponse";
import { ITotalUsersResponse } from "../interfaces/ITotalUsersResponse";
import { IUsersRequest } from "../interfaces/IUsersRequest";
import { IUsersResponse } from "../interfaces/IUsersResponse";
import {
  deleteInitRequest,
  getInitRequest,
  putInitRequest,
  createUserInitRequest,
} from "./request.service";
import { getToken } from "./storeData.service";

const PATH = "http://localhost:3002/api/v1/";

/**
 * This function retrieves all users from the database with the token.
 * @returns An array of IUsersResponse
 */
export const getUsers = async (): Promise<IUsersResponse[]> => {
  const request: RequestInfo = `${PATH}users`;
  const token = await getToken("JWT");
  const response = await fetch(request, getInitRequest(token!));

  const data = await response.json();
  const dataUsers: IUsersResponse[] = [];
  if (data) {
    data.forEach((element: IUsersResponse) => {
      const user: IUsersResponse = {
        _id: "",
        department: "",
        email: "",
        idRole: "",
        isActive: false,
        lastname: "",
        name: "",
        password: "",
      };
      user._id = element._id;
      user.department = element.department;
      user.email = element.email;
      user.idRole = element.idRole;
      user.isActive = element.isActive;
      user.lastname = element.lastname;
      user.name = element.name;
      user.password = element.password;

      dataUsers.push(user);
    });
    return dataUsers;
  }
  return [];
};

/**
 * This function searchs for an user on the database and stores
 * it on a variable to send it.
 * @param email
 * @returns An array of IUsersResponse with one user
 */
export const getUserByEmail = async (email: string) => {
  const request: RequestInfo = `${PATH}user/${email}`;
  const token = await getToken("JWT");
  const response = await fetch(request, getInitRequest(token!));
  const data = await response.json();
  const dataUsers: IUsersResponse[] = [];
  if (data) {
    const user = {
      _id: data._id,
      department: data.department,
      email: data.email,
      idRole: data.idRole,
      isActive: data.isActive,
      lastname: data.lastname,
      name: data.name,
      password: data.password,
    };

    dataUsers.push(user);
    return dataUsers;
  }
  return [];
};

/**
 * This function modifies an user from the database using its mail.
 * @param user
 * @param email
 * @returns A boolean depending if the status is correct
 */
export const modifyUserByEmail = async (user: IUsersRequest, email: string) => {
  const request: RequestInfo = `${PATH}user/${email}`;
  const token = await getToken("JWT");
  const response = await fetch(request, putInitRequest(user, token!));
  return response.status === 200;
};

/**
 * This function deletes an user from the database using its mail.
 * @param email
 * @returns A boolean depending if the status is correct
 */
export const deleteUserByEmail = async (email: string) => {
  const request: RequestInfo = `${PATH}user/${email}`;
  const token = await getToken("JWT");
  const response = await fetch(request, deleteInitRequest(token!));
  return response.status === 200;
};

/**
 * This function creates an user using the data passed with the token.
 * @param user
 * @returns A boolean depending if the status is correct
 */
export const createUser = async (user: IUsersRequest) => {
  console.log(user);
  const request: RequestInfo = `${PATH}user`;
  const token = await getToken("JWT");
  const response = await fetch(request, createUserInitRequest(user, token!));
  return response.status === 200;
};

/**
 * This function gets a count of all active users on the database.
 * @returns An object with the count of all the active users.
 */
export const getActiveUsers = async (): Promise<ITotalActiveUsersResponse> => {
  const request: RequestInfo = `${PATH}users/active`;
  const token = await getToken("JWT");
  const response = await fetch(request, getInitRequest(token!));

  const data = await response.json();
  if (data) {
    return data;
  }
  return {} as ITotalActiveUsersResponse;
};

/**
 * This function gets a count of all users in the database.
 * @returns An object with the count of all users.
 */
export const getTotalUsers = async (): Promise<ITotalUsersResponse> => {
  const request: RequestInfo = `${PATH}users/total`;
  const token = await getToken("JWT");
  const response = await fetch(request, getInitRequest(token!));

  const data = await response.json();
  if (data) {
    return data;
  }
  return {} as ITotalUsersResponse;
};
