import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contato" className="section-padding">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-6">Iniciar Conversa</h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed mb-12">
            Independentemente de ser uma oportunidade ou apenas uma dúvida, 
            minha caixa de entrada está sempre aberta. Tentarei o meu melhor 
            para responder a você!
          </p>

          <a
            href="mailto:bryanjunqueira777@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Diga Olá
          </a>

          {/* Social Links */}
          <div className="mt-16 flex items-center justify-center gap-6">
            <a
              href="https://github.com/Bryanzxxz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-white transition-colors p-2"
              aria-label="GitHub"
            >
              <FiGithub size={22} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:bryanjunqueira777@gmail.com"
              className="text-text-muted hover:text-white transition-colors p-2"
              aria-label="Email"
            >
              <FiMail size={22} strokeWidth={1.5} />
            </a>
            {/* If you have linkedin add here */}
          </div>
        </motion.div>
      </div>

      <div className="mt-32 max-w-7xl mx-auto px-6 lg:px-12 text-center pb-8">
        <p className="text-xs text-text-muted font-light">
          Projetado e desenvolvido por Bryan Lira Junqueira.
        </p>
      </div>
    </section>
  );
}
