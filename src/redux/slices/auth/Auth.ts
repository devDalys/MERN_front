import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosResponse} from 'axios'
import {LoginProps, LoginResponse} from "./auth.types.ts";
import {setAccessToken} from "@helpers/auth";
import {api} from "@api/axios.ts";

export const login = createAsyncThunk('login', async (arg: LoginProps, thunkAPI) => {
    try {
        const response:AxiosResponse<LoginResponse> = await api.post('/auth/login', arg);
        const {token, ...data} = response.data;
        if(token){
            setAccessToken(token)
        }
        return data

    } catch (e) {
        thunkAPI.rejectWithValue(e)
    }
})


