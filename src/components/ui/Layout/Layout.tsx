import styles from './Layout.module.scss';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import * as React from 'react';
import {getAccessToken} from '@helpers/auth';
import {ROUTES} from '@configroutes/routes.ts';

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const token = getAccessToken();
    if (!token && ![ROUTES.auth.root, ROUTES.auth.register].includes(location.pathname))
      navigate(ROUTES.auth.root);
  }, [location.pathname, navigate]);

  return (
    <div className={styles.app}>
      <div className={styles.layout}>
        <Outlet />
      </div>
    </div>
  );
};
