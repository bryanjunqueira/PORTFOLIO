import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Skills', href: '#tecnologias' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Experiência', href: '#trajetoria' },
  { name: 'Contato', href: '#contato' },
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a] pt-28 px-8 md:hidden light-invert-ignore"
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
