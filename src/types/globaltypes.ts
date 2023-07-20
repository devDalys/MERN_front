import {store} from "@configredux/store.ts";

export interface QueryError {
    msg?: string;
}
export interface QueryResponse<T> {
    data: T,
    loading: boolean;
    errorBody: QueryError
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


