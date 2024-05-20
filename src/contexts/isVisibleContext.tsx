import React from "react";

/**
 * This context is used to set up the modal visible or not.
 */
type isVisibleType = {
  isVisible: boolean;
  setIsVisible: Function;
};

const isVisibleContext = React.createContext({} as isVisibleType);

export { isVisibleContext };
export type { isVisibleType };
