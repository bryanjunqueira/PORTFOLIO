import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiClock } from 'react-icons/fi';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-3">Projetos em Destaque</h2>
          <p className="text-text-secondary text-base font-light">
            Seleção de trabalhos recentes e experimentações pessoais.
          </p>
        </motion.div>

        {/* Empty States Placeholder */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
              className="group card-glass rounded-2xl flex flex-col items-center justify-center min-h-[300px] border border-white/[0.04] bg-dark-card/30 border-dashed"
            >
              <div className="flex items-center gap-3 text-text-muted">
                <FiClock size={20} strokeWidth={1.5} />
                <span className="text-sm font-medium tracking-wide">Em desenvolvimento</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
