import {useEffect} from 'react';
import {useTSelector} from '@configredux/useTSelector.ts';
import {useAppDispatch} from '@configredux/useAppDispatch.ts';
import {login} from '@configredux/slices/auth';
import {Input} from '@components/ui/Input/Input.tsx';
import './index.css';

function App() {
  const state = useTSelector().login;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(login({email: 'idalys@gmail.com', password: 'testPassword'}));
  }, []);
  console.log(state);

  return (
    <div className="app">
      <Input labelText="Телефон" />
    </div>
  );
}

export default App;
