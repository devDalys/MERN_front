import {useSelector} from 'react-redux';
import {RootState} from '@type/globaltypes.ts';

export const useTSelector = () => useSelector((state: RootState) => state);
