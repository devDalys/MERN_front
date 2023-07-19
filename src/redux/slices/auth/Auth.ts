import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosResponse} from 'axios'
import {LoginProps, LoginResponse} from "./auth.types.ts";
import {setAccessToken} from "@helpers/auth";
import {api} from "@api/axios.ts";
import {QueryResponse} from "../../../types/globaltypes.ts";

export const login = createAsyncThunk('login', async (arg: LoginProps, thunkAPI) => {
    const response: AxiosResponse<LoginResponse> = await api.post('/auth/login', arg);

    if (response.data.token) {
        setAccessToken(response.data.token)
        return response.data
    }
    thunkAPI.rejectWithValue(response.data)
})


const initialState: QueryResponse<LoginResponse> = {
    data: {
        token: '',
        _id: '',
        createdAt: '',
        email: '',
        firstName: '',
        lastName: '',
        updatedAt: ''
    },
    loading: false,
    errorBody: {
        msg: ''
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.errorBody.msg = action.error.message as string;
            state.loading = false
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.data = action.payload as LoginResponse;
            state.loading = false;
        });
    }
})

export const loginReducer = loginSlice.reducer;



