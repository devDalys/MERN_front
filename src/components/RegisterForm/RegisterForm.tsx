import * as React from 'react';
import {useAppDispatch} from '@configredux/useAppDispatch.ts';
import {register} from '@configredux/slices/auth';
import * as yup from 'yup';
import {ErrorMessages} from '@type/globaltypes.ts';
import {Controller, useForm} from 'react-hook-form';
import {IRegisterForm} from '@components/RegisterForm/RegisterForm.entity.ts';
import {yupResolver} from '@hookform/resolvers/yup';
import {Input} from '@components/ui/Input/Input.tsx';
import styles from './RegisterForm.module.scss';
import {Button} from '@components/ui/Button';

const schema = yup.object().shape({
  email: yup.string().email(ErrorMessages.email).required(ErrorMessages.required),
  password: yup
    .string()
    .min(3, ErrorMessages.password)
    .max(50, ErrorMessages.password)
    .required(ErrorMessages.required),
  firstName: yup
    .string()
    .min(3, ErrorMessages.name)
    .max(50, ErrorMessages.name)
    .required(ErrorMessages.required),
  lastName: yup
    .string()
    .min(3, ErrorMessages.name)
    .max(50, ErrorMessages.name)
    .required(ErrorMessages.required),
});

export const RegisterForm: React.FC = () => {
  const {handleSubmit, control} = useForm<IRegisterForm>({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: IRegisterForm) => {
    const res = await dispatch(register(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        control={control}
        name={'email'}
        render={({field, fieldState}) => (
          <Input {...field} errorText={fieldState.error?.message} labelText={'Email'} />
        )}
      />
      <Controller
        control={control}
        name={'firstName'}
        render={({field, fieldState}) => (
          <Input {...field} errorText={fieldState.error?.message} labelText={'Имя'} />
        )}
      />
      <Controller
        control={control}
        name={'lastName'}
        render={({field, fieldState}) => (
          <Input {...field} errorText={fieldState.error?.message} labelText={'Фамилия'} />
        )}
      />
      <Controller
        control={control}
        name={'password'}
        render={({field, fieldState}) => (
          <Input {...field} errorText={fieldState.error?.message} labelText={'Пароль'} />
        )}
      />
      <Button isLoading={false} type="submit">
        Зарегистрироваться
      </Button>
    </form>
  );
};
