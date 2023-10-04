import {SnackbarContext} from '@components/ui/Snackbar/Snackbar.tsx';
import {useContext} from 'react';

export {Snackbar as SnackbarProvider} from './Snackbar.tsx';
export const useSnackbar = () => useContext(SnackbarContext);
