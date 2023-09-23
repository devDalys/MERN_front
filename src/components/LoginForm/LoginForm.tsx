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
import {useSnackbar} from '@components/ui/Snackbar';

const schema = yup.object().shape({
  login: yup.string().email(ErrorMessages.email).required(ErrorMessages.required),
  password: yup
    .string()
    .min(3, ErrorMessages.password)
    .max(50, ErrorMessages.password)
    .required(ErrorMessages.required),
});

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const loginState = useTSelector().login;
  const {showSnackbar} = useSnackbar();
  const {control, handleSubmit} = useForm<ILoginForm>({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = async (data: ILoginForm) => {
    const res = await dispatch(login({email: data.login, password: data.password}));
    if (res.meta.requestStatus === 'fulfilled') {
      showSnackbar({text: 'Вы успешно вошли!'});
    } else {
      showSnackbar({text: 'Неверный логин или пароль'});
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="login"
        render={({field, fieldState}) => {
          return (
            <Input
              {...field}
              autoComplete="email"
              type="email"
              inputMode="email"
              errorText={fieldState.error?.message}
              labelText="Email"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({field, fieldState}) => (
          <Input
            {...field}
            autoComplete="password"
            errorText={fieldState.error?.message}
            type="password"
            labelText="Пароль"
          />
        )}
      />
      <Button isLoading={loginState.loading} type="submit">
        Войти
      </Button>
    </form>
  );
};
