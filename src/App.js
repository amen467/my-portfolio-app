import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./Header"
import Slideshow from './Slideshow';

function App() {
  return (
    <div className="app">
      <Header />
      <Slideshow />
    </div>
  );
}

export default App;
