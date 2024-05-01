export const storeData = async (cookie: string | null) => {
  try {
    if (cookie != null) {
      await localStorage.setItem("JWT", cookie);
    }
  } catch (error) {}
};

export const getCookie = async (key: string) => {
  return await localStorage.getItem(key);
};
