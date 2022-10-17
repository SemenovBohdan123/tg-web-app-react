import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebAppc

function App() {

  useEffect(() => {
    tg.ready()
  }, [])



  return (
    <div className="App">
    </div>
  );
}

export default App;
