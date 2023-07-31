import * as React from 'react'
import {getAccessToken} from "@helpers/auth";
import {NavLink, Outlet} from "react-router-dom";
import {ROUTES} from "@routes/routes.ts";

enum AUTH_ENUM  {
    LOGIN,
    REGISTRATION
}

export const AuthForm: React.FC = () => {

    return (
        <div>
			<NavLink to={ROUTES.auth.login}>
				<div>Вход</div>
            </NavLink>
            <NavLink to={ROUTES.auth.register}>
				<div>Регистрация</div>
            </NavLink>
            <Outlet />
        </div>)
}
