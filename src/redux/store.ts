import {configureStore} from '@reduxjs/toolkit';
import {loginReducer, registerReducer} from '@configredux/slices/auth';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});
