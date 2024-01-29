import { createContext,useState } from 'react';
import './App.css';
import UseContext from './components/UseContext';

// eslint-disable-next-line no-undef
export const ToggleTheme = createContext();

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState((state)=>!state);
  };

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;
