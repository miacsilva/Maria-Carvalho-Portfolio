import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills"
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </>
  );
}

export default App;
