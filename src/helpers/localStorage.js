export const getToken = (key) => {
  const tokenData = localStorage.getItem(key);
  if (tokenData) {
    const parsedData = JSON.parse(tokenData);
    return parsedData;
  }
  return null;
};

export const setToken = (key, token) => {
  const savedToken = localStorage.setItem(key, JSON.stringify(token));
  if (savedToken) {
    console.log("token saved", savedToken);
  }
};

export const removeToken = (key) => {
  const removedToken = localStorage.removeItem(key);
  if (removedToken) {
    console.log("token removed", removedToken);
  }
};
