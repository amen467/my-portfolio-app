import React from 'react';
import './App.css';
import SecondPage from './SecondPage';
import Header from "./Header"
import Slideshow from './Slideshow';

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
