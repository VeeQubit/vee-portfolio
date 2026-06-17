import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
    </>
  );
}

export default App;