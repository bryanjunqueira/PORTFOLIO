import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiBookOpen, FiCalendar } from 'react-icons/fi';

const trajectory = [
  {
    type: 'experience',
    title: 'Suporte Técnico',
    entity: 'GuaruToner',
    period: '2025 — o momento',
    icon: FiBriefcase,
    bullets: [
      'Diagnóstico avançado e resolução ágil de problemas em hardware e software para computadores, notebooks e impressoras, garantindo alta disponibilidade dos equipamentos.',
      'Prestação de suporte técnico presencial e remoto, com foco em uma experiência de atendimento ao cliente eficiente e humanizada.',
      'Configuração, estruturação e manutenção de redes locais, assegurando estabilidade e segurança na conectividade corporativa.',
      'Otimização de sistemas e execução de rotinas preventivas para mitigar falhas e reduzir o tempo de inatividade das operações.'
    ]
  },
  {
    type: 'education',
    title: 'Engenharia de Software',
    entity: 'Universidade São Judas Tadeu (Mooca)',
    period: '2025 — 2028',
    icon: FiBookOpen,
    bullets: [
      'Aprofundamento em arquitetura de sistemas, engenharia de requisitos e aplicação de padrões de projeto (Design Patterns).',
      'Desenvolvimento prático de aplicações Full Stack, integrando lógicas de front-end dinâmico e back-end resiliente.',
      'Foco na construção de sistemas escaláveis e eficientes, implementando metodologias ágeis e cultura de boas práticas de código limpo.'
    ]
  },
  {
    type: 'education',
    title: 'Técnico em Informática',
    entity: 'Colégio ENIAC',
    period: '2023 — 2024',
    icon: FiBookOpen,
    bullets: [
      'Construção de uma base técnica sólida em lógica de programação, algoritmos estruturados e fundamentos essenciais de TI.',
      'Aprendizado imersivo no desenvolvimento web inicial, incluindo estruturação de páginas (HTML/CSS), interatividade e bancos de dados.',
      'Domínio prático na montagem, manutenção e diagnóstico de hardware, bem como na implementação de infraestruturas de rede locais.'
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="trajetoria" className="section-padding relative z-10">
      {/* Container alinhado ao centro (com peso visual na direita) */}
      <div className="w-full flex justify-center px-6 lg:px-12" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start w-full max-w-[1150px]">
          
          {/* ── COLUNA ESQUERDA: Título e Desenho Gigante ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-start lg:sticky lg:top-32 lg:w-[400px] shrink-0 lg:mt-[360px]"
          >
            {/* Desenho Gigante Representativo em Preto/Branco */}
            <div className="relative mb-10 w-full flex justify-start">
              <div className="absolute left-6 top-6 w-32 h-32 bg-white blur-[90px] opacity-[0.08] rounded-full" />
              <svg 
                width="140" 
                height="140" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="url(#grad-traj)" 
                strokeWidth="0.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="opacity-70 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <defs>
                  <linearGradient id="grad-traj" x1="0" y1="0" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path d="M12 2L2 22l10-3 10 3L12 2z" />
                <path d="M12 2v17" />
              </svg>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight font-inter">Trajetória</h2>
          </motion.div>

          {/* ── COLUNA DIREITA: Cards ── */}
          <div className="flex flex-col gap-6 w-full lg:w-[700px] shrink-0">
            {trajectory.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * idx, ease: 'easeOut' }}
                  className="traj-card group"
                >
                  <div className="traj-card__header">
                    <div className="traj-card__title-group">
                      <h3 className="traj-card__title">{item.title}</h3>
                      <div className="traj-card__entity">
                        <Icon className="traj-card__icon" />
                        <span>{item.entity}</span>
                      </div>
                    </div>
                    <div className="traj-card__period">
                      <FiCalendar className="mr-2 opacity-60" />
                      {item.period}
                    </div>
                  </div>

                  <ul className="traj-card__bullets">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="traj-card__bullet-item">
                        <span className="traj-card__bullet-icon" />
                        <p>{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
