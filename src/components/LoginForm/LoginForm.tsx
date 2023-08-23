import * as React from 'react';
import {Input} from '@components/ui/Input/Input.tsx';
import styles from './LoginForm.module.scss';
import {Controller, useForm} from 'react-hook-form';
import {ILoginForm} from './LoginForm.entity.ts';
import {Button} from '@components/ui/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessages} from '@type/globaltypes.ts';
import {useAppDispatch} from '@configredux/useAppDispatch.ts';
import {useTSelector} from '@configredux/useTSelector.ts';
import {login} from '@configredux/slices/auth';


const schema = yup
  .object()
  .shape({
    login: yup.string().email(ErrorMessages.email).required(ErrorMessages.required),
    password: yup.string().min(3, ErrorMessages.password).max(50, ErrorMessages.password).required(ErrorMessages.required),
  });

export const LoginForm: React.FC = () => {
	const dispatch = useAppDispatch();
  const loginState = useTSelector().login;

  const {control, handleSubmit, getValues} = useForm<ILoginForm>({
    reValidateMode: 'onChange', resolver: yupResolver(schema), defaultValues: {
      login: '',
      password: '',
    },
  });
  console.log(loginState);

  const onSubmit = (data: ILoginForm) => {
    dispatch(login({email: data.login, password: data.password}))
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller control={control} name='login'
                  render={({field, fieldState}) => {
                    return (<Input {...field} errorText={fieldState.error?.message} labelText='Почта' />);
                  }} />
      <Controller control={control} name='password'
                  render={({field, fieldState}) => (<Input {...field} errorText={fieldState.error?.message} type='password' labelText='Пароль' />)} />
      <Button isLoading={loginState.loading} type='submit'>Войти</Button>
    </form>
  );
};
