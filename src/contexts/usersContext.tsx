import React from "react";
import { IUsersResponse } from "../interfaces/IUsersResponse";

/**
 * This context is used to store the data of all the users into an array
 */
type usersType = {
  users: IUsersResponse[];
  setUsers: Function;
};

const usersContext = React.createContext({} as usersType);

export { usersContext };
export type { usersType };
