import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
