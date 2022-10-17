import { useEffect } from 'react';
import { useTelegram } from "../src/hooks/useTelegram";
import { Button } from "../src/components/Button/Button";
import './App.css';

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
