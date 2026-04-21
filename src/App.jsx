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
        <main className="relative w-full">
          {/* Hero fixo no fundo, mas com z-0 para permitir interação */}
          <div className="sticky top-0 h-screen w-full z-0">
            <Hero />
          </div>
          {/* Conteúdo que sobe, com z-10 para cobrir o Hero */}
          <div className="relative z-10 bg-[#0a0a0a] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pt-4 border-t border-white/5">
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}
