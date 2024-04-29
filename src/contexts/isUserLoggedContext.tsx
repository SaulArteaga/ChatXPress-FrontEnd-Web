import React from "react";

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
