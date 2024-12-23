import Cookies from 'js-cookie';

const TOKEN_KEY = 'scrapify_auth_token';

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Expire in 7 days
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isAuthenticated = () => {
  console.log('get Token :', getToken());
  return !!getToken();
};
