import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import CurrentWork from './components/Currentwork';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import MoreAbout from './components/MoreAbout';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <CurrentWork />
      <Projects />
      <Skills />
      <Testimonials />
      <MoreAbout />
      <Contact />
    </main>
  );
}
export default App;
