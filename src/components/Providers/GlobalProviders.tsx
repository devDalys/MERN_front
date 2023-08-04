import React from "react";
import {Provider} from 'react-redux'
import {store} from "../../redux/store.ts";
import {ErrorBoundary} from "@components/Providers/ErrorBoundary";

type Props = {
    children: React.ReactNode
};

export const GlobalProviders: React.FC<Props> = ({children}) => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                    {children}
            </ErrorBoundary>
        </Provider>
    )
}
