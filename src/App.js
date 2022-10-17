import { useEffect } from 'react';
import { useTelegram } from "../src/hooks/useTelegram";
import './App.css';

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>

  );
}

export default App;
