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
              className="text-lg font-semibold tracking-wide text-white hover:text-text-secondary transition-colors"
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
                  className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-300"
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
              className="group hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full border border-white/15 text-white/90 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              <FiDownload size={14} className="group-hover:animate-bounce" />
              Baixar CV
            </a>

            {/* Mobile: CV compacto + hamburger */}
            <a
              href="/Curriculo-Bryan-Junqueira.pdf"
              download="Bryan_Junqueira_CV.pdf"
              className="md:hidden inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full border border-white/15 text-white/90"
            >
              <FiDownload size={12} />
              CV
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
