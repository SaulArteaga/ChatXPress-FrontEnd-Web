/**
 * This function formats the data into a GET header if the token is present.
 * If not, returns an empty header with GET method
 * @param token
 * @returns The header data
 */
export const getInitRequest = (token: string = ""): RequestInit => {
  if (token !== "") {
    return {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  }

  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

/**
 * This function formats the data into a post header to make the login.
 * If not, returns an empty header with GET method
 * @param body
 * @returns The header data and the body
 */
export const postInitRequest = (body?: object): RequestInit => {
  if (body) {
    return {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }

  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

/**
 * This function formats the data into a PUT header if the token is present and a body.
 * If not, returns an empty header with PUT method
 * @param token
 * @param body
 * @returns The header data and the body
 */
export const putInitRequest = (body?: object, token = ""): RequestInit => {
  if (token !== "") {
    return {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    };
  }

  return {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

/**
 * This function formats the data into a DELETE header if the token is present.
 * If not, returns an empty header with DELETE method
 * @param token
 * @returns The header data
 */
export const deleteInitRequest = (token = ""): RequestInit => {
  if (token !== "") {
    return {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  }

  return {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

/**
 * This function formats the data into a POST header if the token is present,
 * and a body with the data passed through params.
 * If not, returns an empty header with POST method
 * @param token
 * @param body
 * @returns The header data and the body
 */
export const createUserInitRequest = (
  body?: object,
  token = ""
): RequestInit => {
  if (token !== "") {
    return {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    };
  }

  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};
