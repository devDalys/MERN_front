import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {Layout} from '@components/ui/Layout';
import {AuthForm} from '@components/AuthForm';
import {LoginForm} from '@components/LoginForm/LoginForm.tsx';
import {RegisterForm} from '@components/RegisterForm';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<Layout />}>
      <Route path="*" element={<div>404</div>} />
      <Route index element={<div>Главная</div>} />
      <Route path="auth" element={<AuthForm />}>
        <Route index element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Route>,
  ),
);
