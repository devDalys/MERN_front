import styles from './Layout.module.scss'
import {Outlet} from "react-router-dom";
import * as React from 'react'


export const Layout: React.FC = () => {


    return (
        <div className={styles.app}>
            <div className={styles.layout}>
                <Outlet />
            </div>
        </div>
    )
}
