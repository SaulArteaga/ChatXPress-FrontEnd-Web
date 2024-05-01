import React from "react";
import { IUsersResponse } from "../interfaces/IUsersResponse";

type usersType = {
  users: IUsersResponse[];
  setUsers: Function;
};

const usersContext = React.createContext({} as usersType);

export { usersContext };
export type { usersType };
