import * as usersAPI from './users-api';

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);

    //persisist token in localStorage
    localStorage.setItem('token', token);
    return token;
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    //persisist token in localStorage
    localStorage.setItem('token', token);
    return getUser();
}

export function getToken() {
    const token = localStorage.getItem('token');
    // getItem will return null if no key
    if (!token) return null;
    return token;
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
    localStorage.removeItem('token');
}

export function checkToken() {
    return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}