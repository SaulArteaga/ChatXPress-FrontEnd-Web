import React from "react";
import { IUsersResponse } from "../interfaces/IUsersResponse";

type currentUserDataType = {
  currentUser: IUsersResponse | undefined;
  setCurrentUser: Function;
};

const currentUserDataContext = React.createContext({} as currentUserDataType);

export { currentUserDataContext };
export type { currentUserDataType };
