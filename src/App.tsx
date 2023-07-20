import {useTSelector} from "./redux/useTSelector.ts";
import {login} from "./redux/slices/auth";
import {useAppDispatch} from "./redux/useAppDispatch.ts";
import {useEffect} from "react";

function App() {
  const state = useTSelector().login;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(login({email: 'idalys@gmail.com', password: 'testPassword'}))

  }, [])
  console.log(state)

  return (<div>test</div>)

}

export default App
