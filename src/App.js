import './App.css';
import SecondPage from './components/SecondPage';
import Header from "./components/Header"
import Slideshow from './components/Slideshow';
import Home from './Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Slideshow />
      <SecondPage />
      <AboutMe />
    </div>
  );
}

export default App;
