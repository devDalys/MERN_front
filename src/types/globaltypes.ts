import {store} from '@configredux/store.ts';
import {RegisterErrors} from '@configredux/slices/auth/auth.types.ts';

export interface QueryError {
  msg?: string;
  fields?: RegisterErrors[];
}
export interface QueryResponse<T> {
  data: T;
  loading: boolean;
  errorBody: QueryError;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum ErrorMessages {
  email = 'Введите EMAIL',
  password = 'Длинна пароля должна быть от 3 до 50 символов',
  required = 'Обязательное поле',
  name = 'Введите от 3 до 20 символов',
}
