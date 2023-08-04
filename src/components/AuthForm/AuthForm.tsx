import * as React from 'react'
import {NavLink, Outlet} from "react-router-dom";
import {ROUTES} from "@configroutes/routes.ts";
import styles from './AuthForm.module.scss'


export const AuthForm: React.FC = () => {

    return (
        <div className={styles.form}>
			<div className={styles.buttons}>
                <NavLink to={ROUTES.auth.root}>
                    <button className={styles.button}>Вход</button>
                </NavLink>
                <NavLink to={ROUTES.auth.register}>
                    <button className={styles.button}>Регистрация</button>
                </NavLink>
            </div>
            <Outlet />
        </div>)
}
