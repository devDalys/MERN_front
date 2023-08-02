import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {Layout} from "@components/Layout";
import {AuthForm} from "@components/AuthForm";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='*' element={<Layout />}>
            <Route path='*' element={<div>404</div>}/>
            <Route index element={<div>Главная</div>}/>
            <Route path='auth'>
                <Route index element={<AuthForm />} />
                <Route path='login' element={<AuthForm />} />
                <Route path='register' element={<AuthForm />} />
            </Route>
        </Route>
    ))
