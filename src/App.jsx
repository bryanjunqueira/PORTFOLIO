import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechMarquee from './components/TechMarquee';
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
          <div className="content-panel relative z-10 bg-[#0a0a0a] rounded-t-[3rem] pt-4">
            <About />
            <TechMarquee />
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
