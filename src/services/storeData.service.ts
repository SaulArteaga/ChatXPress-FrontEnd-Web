export const storeData = async (cookie: string | null) => {
  try {
    if (cookie != null) {
      await localStorage.setItem("JWT", cookie);
    }
  } catch (error) {}
};
