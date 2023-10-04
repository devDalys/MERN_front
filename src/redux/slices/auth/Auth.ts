import {createSlice} from '@reduxjs/toolkit';
import {setAccessToken} from '@helpers/auth';
import {createAsyncAxiosThunk} from '@api/createAsyncAxiosThunk.ts';
import {generateInitialState} from '@configredux/generateInitialState.ts';
import {
  LoginProps,
  LoginResponse,
  RegisterErrors,
  RegisterProps,
} from '@configredux/slices/auth/auth.types.ts';

export const login = createAsyncAxiosThunk<LoginResponse, LoginProps>('/auth/login', 'POST');
export const register = createAsyncAxiosThunk<LoginResponse, RegisterProps, RegisterErrors[]>(
  '/auth/register',
  'POST',
);

export const initialState = generateInitialState<LoginResponse>({
  token: '',
  _id: '',
  createdAt: '',
  email: '',
  firstName: '',
  lastName: '',
  updatedAt: '',
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errorBody.msg = action.payload?.response?.data.msg;
      state.loading = false;
      setAccessToken('');
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.errorBody.msg = '';
      setAccessToken(state.data.token);
    });
  },
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.errorBody.fields = action.payload?.response?.data;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.errorBody.msg = '';
      setAccessToken(state.data.token);
    });
  },
});

export const loginReducer = loginSlice.reducer;
export const registerReducer = registerSlice.reducer;
