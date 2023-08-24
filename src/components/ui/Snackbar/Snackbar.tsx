import * as React from 'react';
import cn from 'classnames';
import styles from './Snackbar.module.scss';

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  text: string;
}

interface SnackbarContext {
  showSnackbar: (props: ContextProps) => void;
}

export const SnackbarContext = React.createContext<SnackbarContext>({showSnackbar: () => null});
const SnackbarProvider = SnackbarContext.Provider;

const snackbarVisibleTime = 1500;

export const Snackbar: React.FC<Props> = ({children}) => {
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState('');
  const showSnackbar = ({text}: ContextProps) => {
    setSnackbarVisible((state) => !state);
    setSnackbarText(text);

    const timeout = setTimeout(() => {
      setSnackbarVisible((state) => !state);
      clearTimeout(timeout);
    }, snackbarVisibleTime);
  };


  return (
    <SnackbarProvider value={{showSnackbar}}>
      {children}
      <div className={cn(styles.snackbar, {[styles.snackbarVisible]: snackbarVisible})}>
        {snackbarText}
      </div>
    </SnackbarProvider>
  );
};
