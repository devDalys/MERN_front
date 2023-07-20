import {createAsyncThunk} from "@reduxjs/toolkit";
import * as Axios from "axios";
import {QueryError} from "../types/globaltypes.ts";
import {api} from "@api/axios.ts";

export const createAsyncAxiosThunk = <T, D>(path: string) =>  createAsyncThunk<T, D, { rejectValue: Axios.AxiosError<QueryError> }>(
    'login',
    async (arg: D, thunkAPI) => {
        try {
            const response: Axios.AxiosResponse<T> = await api.post(path, arg);

            return response.data;
        } catch (err) {
            if (Axios.isAxiosError(err) && err?.response?.data) {
                return thunkAPI.rejectWithValue(err as Axios.AxiosError<QueryError>);
            } else {
                throw err;
            }
        }
    }
);
