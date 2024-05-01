import React, { useState } from "react";
import {
  isUserLoggedType,
  userLoggedContext,
} from "../contexts/isUserLoggedContext";
import { IUsersResponse } from "../interfaces/IUsersResponse";
import { usersContext, usersType } from "../contexts/usersContext";

type ContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ContextsProvider(props: ContextProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<IUsersResponse[]>([]);

  const setUser = (username: string) => setName(username);
  const setUserEmail = (email: string) => setEmail(email);
  const userIsLogged = () => setIsLogged(!isLogged);

  const userLoggedData: isUserLoggedType = {
    isLogged,
    setUser,
    setUserEmail,
    email,
    userIsLogged,
    name,
  };

  const usersData: usersType = {
    users,
    setUsers,
  };

  return (
    <usersContext.Provider value={usersData}>
      <userLoggedContext.Provider value={userLoggedData}>
        {children}
      </userLoggedContext.Provider>
    </usersContext.Provider>
  );
}

export default ContextsProvider;
