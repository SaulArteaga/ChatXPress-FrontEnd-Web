import React from "react";

type isVisibleType = {
  isVisible: boolean;
  setIsVisible: Function;
};

const isVisibleContext = React.createContext({} as isVisibleType);

export { isVisibleContext };
export type { isVisibleType };
