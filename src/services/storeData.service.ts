/**
 * This function stores the token into the localstorage of the browser.
 * @param token
 */
export const storeToken = async (token: string | null) => {
  try {
    if (token != null) {
      localStorage.setItem("JWT", token);
    }
  } catch (error) {}
};

/**
 * This function gets the token from the localstorage in the browser
 * @param key
 * @returns The token of the conection
 */
export const getToken = async (key: string) => {
  return await localStorage.getItem(key);
};
