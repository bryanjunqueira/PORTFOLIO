import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon, FiHome, FiUser, FiCode, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'Sobre', href: '#sobre', icon: FiUser },
  { name: 'Skills', href: '#tecnologias', icon: FiCode },
  { name: 'Projetos', href: '#projetos', icon: FiFolder },
  { name: 'Experiência', href: '#trajetoria', icon: FiBriefcase },
  { name: 'Contato', href: '#contato', icon: FiMail },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollState, setScrollState] = useState('top'); // 'top' | 'hidden' | 'visible'
  const [theme, setTheme] = useState('dark');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Inicializar o tema
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    }

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 100) {
          // Near the top — header is in normal flow
          setScrollState('top');
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling UP — show sticky header
          setScrollState('visible');
        } else if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling DOWN — hide sticky header
          setScrollState('hidden');
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  };

  // Build dynamic class based on scroll state
  const headerClass = [
    'header',
    scrollState === 'top' ? 'header--top' : '',
    scrollState === 'visible' ? 'header--sticky-visible' : '',
    scrollState === 'hidden' ? 'header--sticky-hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className="header-bar">
          {/* Logo */}
          <div className="header-col header-col--left">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="header-logo"
            >
              Bryan Junqueira
            </a>
          </div>

          {/* Navigation (desktop) */}
          <div className="header-col header-col--center">
            <nav className="header-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="header-nav__link"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right actions (Theme toggle + Mobile hamburger) */}
          <div className="header-col header-col--right">
            <button
              onClick={toggleTheme}
              className="header-theme-toggle"
              aria-label="Alternar tema"
              title="Alternar tema"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="header-hamburger"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop escurecido */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Card Flutuante Minimalista */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[100px] left-1/2 -translate-x-1/2 w-[85%] max-w-[320px] min-h-[420px] z-[200] bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-12 shadow-2xl md:hidden flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-start gap-8">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      className="flex items-center gap-5 text-[0.95rem] font-light text-white/50 hover:text-white transition-colors tracking-widest"
                    >
                      <Icon size={18} className="opacity-50" />
                      <span>{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
