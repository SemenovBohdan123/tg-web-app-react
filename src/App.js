import { useEffect } from 'react';
import { useTelegram } from "../src/hooks/useTelegram";
import Header from "./components/Header";
import './App.css';

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>

  );
}

export default App;
