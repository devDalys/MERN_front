import {QueryResponse} from "@type/globaltypes.ts";

export const generateInitialState = <T>(values: T): QueryResponse<T> => {
    return {
        errorBody: {
            msg: ''
        },
        data: {...values},
        loading: false
    }
}
