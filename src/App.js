import React from 'react';
import './App.css';
import SecondPage from './components/SecondPage';
import Header from "./components/Header"
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="app">
      <Header />
      <Slideshow />
      <SecondPage />
    </div>
  );
}

export default App;
