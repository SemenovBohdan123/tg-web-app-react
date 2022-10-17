import { useEffect } from 'react';
import { useTelegram } from "../src/hooks/useTelegram";
import { Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import ProductList from './components/ProductList';
import Form from "./components/Form";

import './App.css';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
