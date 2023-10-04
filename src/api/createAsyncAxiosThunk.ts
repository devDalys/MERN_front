import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {QueryError} from '@type/globaltypes.ts';
import {api} from '@api/axios.ts';

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS'
  | 'CONNECT'
  | 'TRACE';

export const createAsyncAxiosThunk = <T, D = undefined, QueryErrorResponse = QueryError>(
  path: string,
  method: HttpMethod,
): ReturnType<typeof createAsyncThunk<T, D, {rejectValue: AxiosError<QueryErrorResponse>}>> =>
  createAsyncThunk<
    T,
    D,
    {
      rejectValue: AxiosError<QueryErrorResponse>;
    }
  >('login', async (arg: D | undefined, thunkAPI) => {
    try {
      if (
        !['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'].includes(
          method,
        )
      ) {
        throw new Error('Unsupported HTTP method');
      }

      if (method === 'GET' && arg !== undefined) {
        throw new Error('GET request cannot have a request body');
      }

      if (method === 'GET') {
        const response: AxiosResponse<T> = await api.get<T>(path);
        return response.data;
      } else {
        const response: AxiosResponse<T> = await api.request<T>({
          url: path,
          method,
          data: arg,
        });
        return response.data;
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err?.response?.data) {
        return thunkAPI.rejectWithValue(err as AxiosError<QueryErrorResponse>);
      } else {
        throw err;
      }
    }
  });
