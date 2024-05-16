import { IUsersRequest } from "../interfaces/IUsersRequest";
import { IUsersResponse } from "../interfaces/IUsersResponse";
import {
  deleteInitRequest,
  getInitRequest,
  putInitRequest,
  createUserInitRequest,
} from "./request.service";
import { getCookie } from "./storeData.service";

const PATH = "http://172.16.100.207:3000/api/v1/";

export const getUsers = async (): Promise<IUsersResponse[]> => {
  const request: RequestInfo = `${PATH}users`;
  const token = await getCookie("JWT");
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

export const getUserByEmail = async (email: string) => {
  const request: RequestInfo = `${PATH}user/${email}`;
  const response = await fetch(request, getInitRequest());
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

export const modifyUserByEmail = async (user: IUsersRequest, email: string) => {
  const request: RequestInfo = `${PATH}user/${email}`;
  const token = await getCookie("JWT");
  const response = await fetch(request, putInitRequest(user, token!));
  return response.status === 200;
};

export const deleteUserByEmail = async (email: string) => {
  const request: RequestInfo = `${PATH}user/${email}`;
  const token = await getCookie("JWT");
  const response = await fetch(request, deleteInitRequest(token!));
  return response.status === 200;
};

export const createUser = async (user: IUsersRequest) => {
  console.log(user);
  const request: RequestInfo = `${PATH}user`;
  const token = await getCookie("JWT");
  const response = await fetch(request, createUserInitRequest(user, token!));
  return response.status === 200;
};
