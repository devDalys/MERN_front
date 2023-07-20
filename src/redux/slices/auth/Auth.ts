import {createSlice} from "@reduxjs/toolkit";
import {setAccessToken} from "@helpers/auth";
import {createAsyncAxiosThunk} from "@api/createAsyncAxiosThunk.ts";
import {generateInitialState} from "@configredux/generateInitialState.ts";
import {LoginProps, LoginResponse} from "@configredux/slices/auth/auth.types.ts";

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
            setAccessToken('')
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.errorBody.msg = ''
            setAccessToken(state.data.token)

        });
    }
})

export const loginReducer = loginSlice.reducer;



