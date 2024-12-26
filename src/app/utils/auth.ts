import Cookies from 'js-cookie';

const TOKEN_KEY = process.env.JWT_SECRET || 'scrapify';
const expires:any = process.env.TOKEN_EXPIRY || "4h";
export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {expires}); 
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
