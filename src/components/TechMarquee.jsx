import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiMysql,
  SiTailwindcss,
  SiVite,
  SiFigma,
} from 'react-icons/si';

const technologies = [
  { icon: SiHtml5,        label: 'HTML5',      color: '#E34F26' },
  { icon: SiCss,          label: 'CSS3',       color: '#1572B6' },
  { icon: SiJavascript,   label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact,        label: 'React',      color: '#61DAFB' },
  { icon: SiNodedotjs,    label: 'Node.js',    color: '#339933' },
  { icon: SiPython,       label: 'Python',     color: '#3776AB' },
  { icon: SiGit,          label: 'Git',        color: '#F05032' },
  { icon: SiMysql,        label: 'MySQL',      color: '#4479A1' },
  { icon: SiTailwindcss,  label: 'Tailwind',   color: '#06B6D4' },
  { icon: SiVite,         label: 'Vite',       color: '#646CFF' },
  { icon: SiFigma,        label: 'Figma',      color: '#F24E1E' },
];

/* Duplica a lista para preencher a animação contínua */
const marqueeItems = [...technologies, ...technologies, ...technologies];

export default function TechMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="tecnologias" className="tech-marquee-section" ref={ref}>

      {/* ── Barra vertical decorativa na esquerda ── */}
      <div className="tech-marquee-accent" />

      {/* ── Título centralizado acima dos ícones ── */}
      <motion.div
        className="tech-marquee-title"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="tech-marquee-title__text">Tech Stack</span>
        <span className="tech-marquee-title__underline" />
      </motion.div>

      {/* ── Marquee wrapper com limites alinhados ao About ── */}
      <motion.div
        className="tech-marquee-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
      >
        <div className="tech-marquee-viewport">
          {/* Fade edges */}
          <div className="tech-marquee-fade tech-marquee-fade--left" />
          <div className="tech-marquee-fade tech-marquee-fade--right" />

          {/* Scrolling track */}
          <div className="tech-marquee-track">
            {marqueeItems.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.label}-${idx}`}
                  className="tech-marquee-item"
                  style={{ '--accent': tech.color }}
                >
                  <div className="tech-marquee-item__icon-wrap">
                    <Icon className="tech-marquee-item__icon" />
                  </div>
                  <span className="tech-marquee-item__label">{tech.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
