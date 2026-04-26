import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="contato" className="py-24 relative z-10 bg-[#0a0a0a] border-t border-white/[0.04]">
      <div ref={ref} className="w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Título */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-inter">
            Iniciar Conversa
          </h2>
          
          {/* Texto descritivo */}
          <p className="mt-6 mb-12 text-white/50 text-sm lg:text-base font-light leading-relaxed max-w-xl mx-auto block">
            Independentemente de ser uma oportunidade, uma parceria ou apenas uma dúvida, 
            minha caixa de entrada está sempre aberta. Tentarei o meu melhor 
            para responder a você!
          </p>

          {/* Botões Idênticos à Referência (Pills Sleek) */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/qr/3ELEQTDKLUNTE1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-transparent border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-colors duration-300"
            >
              <FaWhatsapp size={15} className="text-[#25D366]" />
              <span className="text-[#25D366] text-[13px] font-medium">WhatsApp</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bryanjunqueira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-transparent border border-white/10 hover:border-white/30 transition-colors duration-300"
            >
              <FiLinkedin size={15} className="text-white/60" />
              <span className="text-white/60 text-[13px] font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/bryanjunqueira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-transparent border border-white/10 hover:border-white/30 transition-colors duration-300"
            >
              <FiGithub size={15} className="text-white/60" />
              <span className="text-white/60 text-[13px] font-medium">GitHub</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bryan_junqueira?igsh=eGJ5N3R6eGppdTlm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-transparent border border-white/10 hover:border-white/30 transition-colors duration-300"
            >
              <FiInstagram size={15} className="text-white/60" />
              <span className="text-white/60 text-[13px] font-medium">Instagram</span>
            </a>

          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 w-full border-t border-white/5 pt-8">
          <p className="text-[11px] text-white/30 font-light text-center">
            © 2025 Bryan Junqueira. Todos os direitos reservados.
          </p>
        </div>
        
      </div>
    </section>
  );
}
