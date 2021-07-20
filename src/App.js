import './App.css';
import About from './components/About';
import Header from "./components/Header"
import Slideshow from './components/Slideshow';
import Home from './Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Slideshow />
      <About />
      <Contact />
    </div>
  );
}

export default App;
