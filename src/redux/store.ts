import {configureStore} from '@reduxjs/toolkit'
import {loginReducer} from "@configredux/slices/auth";



export const store = configureStore({
    reducer: {
        login: loginReducer
    },

})


