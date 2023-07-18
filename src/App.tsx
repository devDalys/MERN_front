import {useTSelector} from "./redux/useTSelector.ts";

function App() {
  const state = useTSelector();
  console.log(state)

  return (<div>test</div>)

}

export default App
