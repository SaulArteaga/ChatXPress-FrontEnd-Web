import React, { useState } from "react";
import {
  isUserLoggedType,
  userLoggedContext,
} from "../contexts/isUserLoggedContext";
import { IUsersResponse } from "../interfaces/IUsersResponse";
import { usersContext, usersType } from "../contexts/usersContext";
import { isVisibleContext, isVisibleType } from "../contexts/isVisibleContext";
import {
  currentUserDataContext,
  currentUserDataType,
} from "../contexts/currentUserDataContext";

type ContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

/**
 * This context provider component is created to use all
 * the contexts created in the app.
 * @param props
 * @returns Context layer
 */
export function ContextsProvider(props: ContextProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<IUsersResponse[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const [currentUser, setCurrentUser] = useState<IUsersResponse>(
    {} as IUsersResponse
  );

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

  const currentUserData: currentUserDataType = {
    currentUser,
    setCurrentUser,
  };

  const usersData: usersType = {
    users,
    setUsers,
  };
  const isVisibleData: isVisibleType = {
    isVisible,
    setIsVisible,
  };

  return (
    <currentUserDataContext.Provider value={currentUserData}>
      <isVisibleContext.Provider value={isVisibleData}>
        <usersContext.Provider value={usersData}>
          <userLoggedContext.Provider value={userLoggedData}>
            {children}
          </userLoggedContext.Provider>
        </usersContext.Provider>
      </isVisibleContext.Provider>
    </currentUserDataContext.Provider>
  );
}

export default ContextsProvider;
