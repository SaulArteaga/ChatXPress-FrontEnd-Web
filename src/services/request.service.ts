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
