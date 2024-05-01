import { IUsersResponse } from "../interfaces/IUsersResponse";
import { getInitRequest } from "./request.service";

const GET_USERS_PATH = "http://localhost:3000/api/v1/users";

export const getUsers = async (): Promise<IUsersResponse[]> => {
  const request: RequestInfo = `${GET_USERS_PATH}`;
  const response = await fetch(request, getInitRequest());

  const data = await response.json();
  const dataUsers: IUsersResponse[] = [];
  if (dataUsers) {
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
