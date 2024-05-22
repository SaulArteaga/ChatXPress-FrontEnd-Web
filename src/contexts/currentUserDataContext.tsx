import React from "react";
import { IUsersResponse } from "../interfaces/IUsersResponse";

/**
 * The type for the context, it is used to set up the current
 * user we are editing in the modify and delete user.
 */
type currentUserDataType = {
  currentUser: IUsersResponse;
  setCurrentUser: Function;
};

const currentUserDataContext = React.createContext({} as currentUserDataType);

export { currentUserDataContext };
export type { currentUserDataType };
