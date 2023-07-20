
export interface QueryError {
    msg?: string;
}
export interface QueryResponse<T> {
    data: T,
    loading: boolean;
    errorBody: QueryError
}
