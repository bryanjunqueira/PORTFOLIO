import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiCode, FiServer, FiTool, FiChevronDown, FiUser } from 'react-icons/fi';

const focusAreas = [
  {
    icon: FiCode,
    title: 'Front-End',
    number: '01',
    summary:
      'Desenvolvimento de interfaces modernas, responsivas e interativas com foco na experiência do usuário.',
    expanded:
      'Atuo no desenvolvimento de interfaces utilizando React, JavaScript e boas práticas de front-end, criando aplicações web modernas, organizadas e performáticas. Tenho foco em componentização, responsividade e construção de layouts que proporcionam uma experiência fluida e intuitiva para o usuário.',
  },
  {
    icon: FiServer,
    title: 'Back-End',
    number: '02',
    summary:
      'Construção de aplicações e integração de APIs com foco em estrutura, desempenho e escalabilidade.',
    expanded:
      'Desenvolvo aplicações back-end utilizando Node.js e Python, trabalhando com criação de APIs, lógica de negócio e integração com bancos de dados como MySQL. Busco sempre manter uma arquitetura organizada, com código limpo e escalável, garantindo eficiência e confiabilidade nas aplicações.',
  },
  {
    icon: FiTool,
    title: 'Resolução de Problemas',
    number: '03',
    summary:
      'Diagnóstico e resolução de problemas com foco em eficiência e experiência do usuário.',
    expanded:
      'Minha experiência com suporte técnico e manutenção de computadores me permite analisar e resolver problemas de forma rápida e eficiente. Tenho facilidade em identificar falhas, entender cenários complexos e propor soluções práticas, sempre focando na estabilidade dos sistemas e na melhor experiência possível para o usuário final.',
  },
];

function ExpandableCard({ area, index, isInView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.35 + index * 0.12,
        ease: 'easeOut',
      }}
      className="about-card group"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Número decorativo */}
      <span className="about-card__number">{area.number}</span>

      {/* Ícone */}
      <div className="about-card__icon-wrapper">
        <area.icon size={24} strokeWidth={1.5} />
      </div>

      {/* Título */}
      <h3 className="about-card__title">{area.title}</h3>

      {/* Resumo sempre visível */}
      <p className="about-card__desc">{area.summary}</p>

      {/* Conteúdo expandido */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="about-card__expanded"
          >
            <p className="about-card__expanded-text">{area.expanded}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão de expansão */}
      <div className="about-card__toggle">
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="about-card__arrow"
        >
          <FiChevronDown size={18} strokeWidth={2} />
        </motion.div>
      </div>

      {/* Borda inferior animada */}
      <span className="about-card__bar" />
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center py-24">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 lg:px-12 w-full">

        {/* ── Ícone de seção ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="about-section-icon"
        >
          <FiUser size={20} strokeWidth={1.5} />
        </motion.div>

        {/* ── Texto introdutório ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="about-intro"
        >
          <p className="about-intro-text">
            Estudante de Engenharia de Software focado na criação de aplicações web
            modernas e bem estruturadas.
          </p>
          <p className="about-intro-text about-intro-text--secondary">
            Desenvolvo soluções com atenção à organização do código e à experiência
            do usuário, buscando constante evolução e aprimoramento no desenvolvimento.
          </p>
        </motion.div>

        {/* ── Linha sutil separadora ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="about-divider"
        />

        {/* ── Cards de foco ── */}
        <div className="about-grid">
          {focusAreas.map((area, i) => (
            <ExpandableCard
              key={area.title}
              area={area}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
