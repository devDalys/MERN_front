import React from "react";
import { Provider } from 'react-redux'
import {store} from "../../redux/store.ts";

type Props = {
    children: React.ReactNode
};

export const GlobalProviders: React.FC<Props> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
