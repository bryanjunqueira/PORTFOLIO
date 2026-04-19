import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiSqlite,
  SiGit,
  SiHtml5,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const skills = [
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPython, name: 'Python' },
  { icon: SiHtml5, name: 'HTML5' },
  { icon: FaCss3Alt, name: 'CSS3' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiSqlite, name: 'SQLite' },
  { icon: SiGit, name: 'Git' },
  { icon: SiVite, name: 'Vite' },
];

function SkillCard({ skill, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6 border border-transparent hover:border-dark-border hover:bg-dark-card/50 rounded-xl transition-all duration-300"
    >
      <skill.icon
        size={28}
        className="text-text-muted mb-4 transition-colors duration-300 hover:text-white"
      />
      <span className="text-xs font-medium text-text-secondary tracking-wide">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold mb-3">Tecnologias</h2>
          <p className="text-text-secondary font-light text-base">
            Essas são as ferramentas com as quais construo o desenvolvimento diário.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
