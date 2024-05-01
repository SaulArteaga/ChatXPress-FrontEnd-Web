import { IUsersResponse } from "../interfaces/IUsersResponse";
import { getInitRequest } from "./request.service";

const PATH = "http://localhost:3000/api/v1/";

export const getUsers = async (): Promise<IUsersResponse[]> => {
  const request: RequestInfo = `${PATH}users`;
  const response = await fetch(request, getInitRequest());

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
  const request: RequestInfo = `${PATH}user/email/${email}`;
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
