import './App.css';
import SecondPage from './components/SecondPage';
import Header from "./components/Header"
import Slideshow from './components/Slideshow';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Slideshow />
      <SecondPage />
    </div>
  );
}

export default App;
