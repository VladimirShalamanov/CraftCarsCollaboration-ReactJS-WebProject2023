import Path from "../utils/paths";
import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/users';
const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}${Path.Login}`, {
        email,
        password,
    });
    
    return result;
};

export const register = (email, username, password) => request.post(`${baseUrl}${Path.Register}`, {
    email,
    username,
    password,
});
// email and pass is minimum for the server
// you can add more - username, ...

export const logout = () => request.get(`${baseUrl}${Path.Logout}`);