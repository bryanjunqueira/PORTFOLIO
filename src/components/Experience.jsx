import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const blocks = [
  {
    type: 'Profissional',
    items: [
      {
        title: 'Suporte Técnico',
        entity: 'Guarutoner',
        period: 'Atual',
      },
      {
        title: 'Estágio — Desenvolvimento Web',
        entity: 'ENIAC',
        period: '2024',
      },
    ]
  },
  {
    type: 'Educação',
    items: [
      {
        title: 'Engenharia de Software',
        entity: 'Universidade São Judas',
        period: '2025 – 2028',
      },
      {
        title: 'Técnico em Informática',
        entity: 'ENIAC',
        period: '2024',
      },
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experiencia" className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold mb-3">Trajetória</h2>
          <p className="text-text-secondary font-light text-base">
            O resumo da minha formação e atuação no mercado.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.type}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2), ease: "easeOut" }}
            >
              <h3 className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-8 border-b border-dark-border pb-4">
                {block.type}
              </h3>
              
              <div className="space-y-8">
                {block.items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between group">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1 group-hover:text-gray-300 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-text-secondary text-sm font-light">
                        {item.entity}
                      </span>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="text-xs font-medium text-text-muted bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.05]">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
