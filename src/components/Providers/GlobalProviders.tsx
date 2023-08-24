import React from "react";
import {Provider} from 'react-redux'
import {store} from "../../redux/store.ts";
import {ErrorBoundary} from "@components/Providers/ErrorBoundary";
import {SnackbarProvider} from '@components/ui/Snackbar';

type Props = {
    children: React.ReactNode
};

export const GlobalProviders: React.FC<Props> = ({children}) => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                    <SnackbarProvider>
                      {children}
                    </SnackbarProvider>
            </ErrorBoundary>
        </Provider>
    )
}
