import Cookies from "universal-cookie";

const cookie = new Cookies();

export const token = () => cookie.get("x-auth-token");
export const isAuthenticated = () => !!token();

export const setToken = (token) => cookie.set("x-auth-token", token);


