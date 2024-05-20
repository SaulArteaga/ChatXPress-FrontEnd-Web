import React from "react";

/**
 * This context is used to store the data of the logged user.
 */
type isUserLoggedType = {
  isLogged: boolean;
  userIsLogged: Function;
  setUser: Function;
  name: string;
  email: string;
  setUserEmail: Function;
};

const userLoggedContext = React.createContext({} as isUserLoggedType);

export { userLoggedContext };
export type { isUserLoggedType };
