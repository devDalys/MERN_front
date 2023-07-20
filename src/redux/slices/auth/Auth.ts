import {createSlice} from "@reduxjs/toolkit";
import {LoginProps, LoginResponse} from "./auth.types.ts";
import {setAccessToken} from "@helpers/auth";
import {createAsyncAxiosThunk} from "@api/createAsyncAxiosThunk.ts";
import {generateInitialState} from "@redux/generateInitialState.ts";

export const login = createAsyncAxiosThunk<LoginResponse, LoginProps>('/auth/login');


export const initialState = generateInitialState(
    {
        token: '',
        _id: '',
        createdAt: '',
        email: '',
        firstName: '',
        lastName: '',
        updatedAt: ''
    }
)

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.errorBody.msg = action.payload?.response?.data.msg;
            state.loading = false
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.data = action.payload;
            setAccessToken(state.data.token)
            state.loading = false;
        });
    }
})

export const loginReducer = loginSlice.reducer;



