import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';

const TYPING_TEXT = 'Desenvolvedor Full-Stack';
const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 800;

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      if (!isDeleting) {
        // Typing
        if (indexRef.current < TYPING_TEXT.length) {
          indexRef.current += 1;
          setDisplayText(TYPING_TEXT.slice(0, indexRef.current));
          timeoutRef.current = setTimeout(tick, TYPING_SPEED);
        } else {
          // Finished typing — pause, then start deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, PAUSE_AFTER_TYPING);
        }
      } else {
        // Deleting
        if (indexRef.current > 0) {
          indexRef.current -= 1;
          setDisplayText(TYPING_TEXT.slice(0, indexRef.current));
          timeoutRef.current = setTimeout(tick, DELETING_SPEED);
        } else {
          // Finished deleting — pause, then start typing
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(false);
          }, PAUSE_AFTER_DELETING);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeoutRef.current);
  }, [isDeleting]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="hero-text-block"
        >
          {/* Big Name */}
          <h1 className="hero-name">
            Bryan Junqueira
          </h1>

          {/* Typing subtitle */}
          <div className="hero-typing-wrapper">
            <span className="hero-typing-text">
              {displayText}
            </span>
            <span className="hero-cursor">|</span>
          </div>

          {/* Description */}
          <p className="hero-description">
            Construindo interfaces limpas, performáticas e acessíveis.
            Foco em entregar valor real através do design e do código.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="hero-buttons"
          >
            <a
              href="/Curriculo-Bryan-Junqueira.pdf"
              download="Bryan_Junqueira_CV.pdf"
              className="hero-btn hero-btn--primary"
            >
              <FiDownload size={18} />
              <span>Baixar CV</span>
            </a>
            <a
              href="#contato"
              onClick={handleContactClick}
              className="hero-btn hero-btn--secondary"
            >
              <FiMail size={18} />
              <span>Entrar em contato</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
