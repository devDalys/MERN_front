import axios from 'axios'
import {getAccessToken} from "@helpers/auth";

const baseUrl = 'http://localhost:3000';

export const api = axios.create({
    baseURL: baseUrl,
    headers:{
        accesstoken: getAccessToken()
    },


})
