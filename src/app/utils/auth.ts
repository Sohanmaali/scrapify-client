import Cookies from 'js-cookie';
import {jwtDecode} from "jwt-decode";

import { login, setUser } from '../store/slices/authSlice';

// const TOKEN_KEY = process.env.NEXT_APP_COOKIE_PREFIX || 'scrapify';
const TOKEN_KEY = process.env.NEXT_PUBLIC_COOKIE_PREFIX || 'scrapify';
const expires = process.env.TOKEN_EXPIRY

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
  return !!getToken();
};



export function getUser() {
  const token:any = getToken();
  try {
    const data: any = jwtDecode(token); // Decode the JWT
    const userData = {
      _id: data._id,
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      image: data.featured_image?.filepath || null,
    };
    return userData;
  } catch (error) {
    return null
  }
}
