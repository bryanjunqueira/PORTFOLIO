import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experiência', href: '#experiencia' },
  { name: 'Contato', href: '#contato' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, padding: '40px 60px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>

          {/* COLUNA 1 — Nome (esquerda) */}
          <div className="flex-1">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="inline-block text-lg font-semibold tracking-wide text-white hover:text-text-secondary hover:scale-110 hover:-translate-y-2 transition-all duration-300"
            >
              Bryan Junqueira
            </a>
          </div>

          {/* COLUNA 2 — Navegação (centro exato) */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="inline-block text-sm font-medium text-text-muted hover:text-white hover:scale-125 hover:-translate-y-2 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* COLUNA 3 — Baixar CV (direita) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <a
              href="/Curriculo-Bryan-Junqueira.pdf"
              download="Bryan_Junqueira_CV.pdf"
              className="group hidden md:inline-flex items-center justify-center gap-3 text-sm font-medium rounded-lg border border-white/80 bg-transparent text-white hover:bg-white/10 hover:scale-110 hover:-translate-y-2 transition-all duration-300"
              style={{ letterSpacing: 'normal', padding: '12px 28px' }}
            >
              <span style={{ lineHeight: '1' }}>Resume</span>
              <FiDownload size={16} className="group-hover:translate-y-[3px] transition-transform duration-200" style={{ marginTop: '1px' }} />
            </a>

            {/* Mobile: CV compacto + hamburger */}
            <a
              href="/Curriculo-Bryan-Junqueira.pdf"
              download="Bryan_Junqueira_CV.pdf"
              className="md:hidden inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg border border-white/80 bg-transparent text-white"
              style={{ letterSpacing: 'normal', padding: '10px 20px' }}
            >
              <span style={{ lineHeight: '1' }}>Resume</span>
              <FiDownload size={14} style={{ marginTop: '1px' }} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-text-secondary hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-28 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xl font-medium text-text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
