import React, { useState } from "react";
import {
  isUserLoggedType,
  userLoggedContext,
} from "../contexts/isUserLoggedContext";

type ContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ContextsProvider(props: ContextProviderProps) {
  const { children } = props;

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  return (
    <userLoggedContext.Provider value={userLoggedData}>
      {children}
    </userLoggedContext.Provider>
  );
}

export default ContextsProvider;
