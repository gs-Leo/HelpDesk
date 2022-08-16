import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes'


function App() {

  useEffect(()=> {
    fetch('/test')
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </div>
  );
}

export default App;