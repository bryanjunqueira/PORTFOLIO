import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="noise-overlay">
        <Header />
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
