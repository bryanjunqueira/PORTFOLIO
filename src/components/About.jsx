import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiHeadphones } from 'react-icons/fi';

const focusAreas = [
  {
    icon: FiCode,
    title: 'Front-End',
    desc: 'Criação de UIs responsivas e interativas focadas na experiência do usuário.',
  },
  {
    icon: FiServer,
    title: 'Back-End',
    desc: 'Desenvolvimento de APIs robustas para suportar as necessidades do lado do cliente.',
  },
  {
    icon: FiHeadphones,
    title: 'Suporte & Resolução',
    desc: 'Análise ágil de problemas complexos e manutenção contínua de sistemas.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Texto Sobre Mim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-6">Sobre Mim</h2>
              <div className="space-y-4 text-text-secondary text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Sou estudante de Engenharia de Software e um desenvolvedor apaixonado por construir 
                  experiências digitais fluidas. Meu objetivo principal é aliar código organizado 
                  a um design de interface funcional.
                </p>
                <p>
                  Atualmente, atuo na área de suporte técnico. Essa vivência me ensinou a desmembrar 
                  problemas difíceis rapidamente e me deu empatia pelas reais dores dos usuários 
                  na ponta.
                </p>
                <p>
                  Fora da tela, busco constantemente aprender novas metodologias e refinar 
                  minhas habilidades no ecossistema web, sempre aberto a novos desafios.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Destaques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                whileHover={{ x: 6 }}
                className="group card-glass p-6 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 text-text-muted group-hover:text-white transition-colors duration-300">
                    <area.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg mb-2">{area.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed font-light">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
