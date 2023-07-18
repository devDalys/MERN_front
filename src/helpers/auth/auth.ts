import {localStorageKeys} from "../../types/localstorage.ts";

export const getAccessToken = () => {
    return localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
}

export const setAccessToken = (token: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token)
}
