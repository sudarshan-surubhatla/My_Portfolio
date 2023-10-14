import './css/style.css'
import './css/bootstrap-icons.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Services/Services';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects/>
      <Contact />
    </>
  );
}

export default App;
