import * as React from 'react';
import {Input} from '@components/ui/Input/Input.tsx';
import styles from './LoginForm.module.scss';
import {Controller, useForm} from 'react-hook-form';
import {ILoginForm} from './LoginForm.entity.ts';
import {Button} from '@components/ui/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup
  .object()
  .shape({
    login: yup.string().email('Введите EMAIL').required(),
    password: yup.string().min(3).max(50).required(),
  });

export const LoginForm: React.FC = () => {

  const {control, handleSubmit, getValues} = useForm<ILoginForm>({
    reValidateMode: 'onChange', resolver: yupResolver(schema), defaultValues: {
      login: '',
      password: '',
    },
  });
  console.log(getValues());

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller control={control} name='login'
                  render={({field, fieldState}) => {
                    console.log(fieldState.error)
                    return (<Input {...field} labelText='Почта' />);
                  }} />
      <Controller control={control} name='password'
                  render={({field}) => (<Input {...field} type='password' labelText='Пароль' />)} />
      <Button isLoading={false} type='submit'>Войти</Button>
    </form>
  );
};
