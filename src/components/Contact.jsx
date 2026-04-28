import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const socialLinks = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/qr/3ELEQTDKLUNTE1',
      icon: <FaWhatsapp size={18} />,
      colorClass: 'contact-btn--whatsapp',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bryanjunqueira',
      icon: <FiLinkedin size={18} />,
      colorClass: 'contact-btn--linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/bryanjunqueira',
      icon: <FiGithub size={18} />,
      colorClass: 'contact-btn--github',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/bryan_junqueira?igsh=eGJ5N3R6eGppdTlm',
      icon: <FiInstagram size={18} />,
      colorClass: 'contact-btn--instagram',
    },
  ];

  return (
    <section id="contato" className="contact-section">
      {/* Gradient glow background */}
      <div className="contact-glow" />

      <div ref={ref} className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="contact-content"
        >
          {/* Icon */}
          <div className="contact-icon-ring">
            <span className="contact-icon-dot" />
          </div>

          {/* Title */}
          <h2 className="contact-title">
            Iniciar Conversa
          </h2>

          {/* Description */}
          <p className="contact-description">
            Independentemente de ser uma oportunidade, uma parceria ou apenas uma dúvida, 
            minha caixa de entrada está sempre aberta. Tentarei o meu melhor 
            para responder a você!
          </p>

          {/* Social Buttons */}
          <motion.div
            className="contact-buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-btn ${link.colorClass}`}
              >
                <span className="contact-btn__icon">{link.icon}</span>
                <span className="contact-btn__label">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-footer__gradient" />
        <p className="contact-footer__text">
          © 2026 Bryan Junqueira. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}
