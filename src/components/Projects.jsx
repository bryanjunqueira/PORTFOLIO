import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiClock, FiX, FiMaximize2, FiExternalLink, FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';

/* ═══════════════════════════════════════════════════════════════
   DADOS DOS PROJETOS
   ═══════════════════════════════════════════════════════════════ */

const projects = [
  {
    id: 'raizys',
    title: 'Raizys',
    description: 'Sistema de gestão e landing pages para ecossistema corporativo com foco em setores de Agro, Varejo e Transporte.',
    cover: '/projetos/raizys/raizys1.png',
    logo: '/projetos/raizys/logo.png',
    url: 'https://www.raizys.com.br/',
    stack: [
      { label: 'HTML5',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { label: 'CSS3',       svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { label: 'JavaScript', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
    ],
    thumbnails: [
      '/projetos/raizys/raizys1.png',
      '/projetos/raizys/raizys2.png',
      '/projetos/raizys/raizys6.png',
    ],
    gallery: [
      { id: 1, image: '/projetos/raizys/raizys1.png', title: 'Página Inicial', description: 'Landing page principal apresentando a visão sobre ecossistemas corporativos e a importância de sistemas que sustentam operações essenciais.' },
      { id: 2, image: '/projetos/raizys/raizys2.png', title: 'Pilares de Atuação', description: 'Apresentação detalhada dos serviços focados nos setores de Agro, Varejo e Transporte com valor claro para cada área.' },
      { id: 3, image: '/projetos/raizys/raizys3.png', title: 'Rodapé e Navegação', description: 'Acesso simplificado às áreas institucionais, informações de parcerias e formulário limpo para inscrição em newsletter.' },
      { id: 4, image: '/projetos/raizys/raizys4.png', title: 'Regulamento Oficial', description: 'Modal integrado em overlay detalhando as condições, regras e responsabilidades do Programa de Parceiros Indicadores.' },
      { id: 5, image: '/projetos/raizys/raizys5.png', title: 'Formulário de Indicação', description: 'Página de registro minimalista e segura de leads e indicações para viabilizar um acompanhamento dinâmico focado em conversão.' },
      { id: 6, image: '/projetos/raizys/raizys6.png', title: 'Raizys Empresarial', description: 'Impactante seção hero destacando a plataforma de gestão e automação colaborativa focada em rigor operacional robusto.' },
      { id: 7, image: '/projetos/raizys/raizys7.png', title: 'Raizys Agro', description: 'Recorte visual da landing page especializada voltada para o rigoroso controle de propriedades, safras e produtores rurais integrados.' },
      { id: 8, image: '/projetos/raizys/raizys8.png', title: 'Visão Mobile', description: 'Adaptação responsiva premium que mantém a sofisticação da marca sem perder performance para acessos via dispositivos móveis.' },
    ],
    detailedDescription: 'Desenvolvimento completo de landing pages institucionais e páginas de produto para a Raizys — plataforma de gestão e automação corporativa. O projeto abrange múltiplas páginas responsivas com foco em conversão, clareza visual e identidade de marca consistente nos setores de Agro, Varejo e Transporte.',
  },
  {
    id: 'coming-soon',
    title: 'Projeto de Rota',
    badge: null,
    description: 'Sistema de rastreamento GPS em tempo real para gestão de rotas e equipes em campo.',
    cover: null,
    comingSoon: true,
  },
];

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════ */

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const item = images[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/96 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 text-white/60 hover:text-white transition-all"
        onClick={onClose}
      >
        <FiX size={20} />
      </button>

      <span className="absolute top-5 left-1/2 -translate-x-1/2 font-mono text-xs text-white/30 tracking-widest">
        {String(current + 1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}
      </span>

      <motion.img
        key={current}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        src={item.image}
        alt={item.title}
        className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="lightbox-caption-title">{item.title}</p>
        <p className="lightbox-caption-desc">{item.description}</p>
      </div>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/6 hover:bg-white/14 border border-white/10 text-white/60 hover:text-white transition-all"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/6 hover:bg-white/14 border border-white/10 text-white/60 hover:text-white transition-all"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <FiChevronRight size={22} />
          </button>
        </>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════════════════════ */

function ProjectCard({ project, index, isInView, onOpen }) {
  if (project.comingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15 + index * 0.12, ease: 'easeOut' }}
        className="proj-card proj-card--coming group"
      >
        <div className="proj-card__coming-inner">
          <FiClock size={24} strokeWidth={1.5} />
          <div>
            <p className="proj-card__coming-title">{project.title}</p>
            <p className="proj-card__coming-subtitle">Em breve</p>
          </div>
          {project.description && (
            <p className="proj-card__coming-desc">{project.description}</p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15 + index * 0.12, ease: 'easeOut' }}
      className="proj-card group"
      onClick={() => onOpen(project)}
    >
      {/* Cover image */}
      <div className="proj-card__cover">
        <img
          src={project.cover}
          alt={project.title}
          className="proj-card__cover-img"
          loading="lazy"
        />
        <div className="proj-card__cover-overlay">
          <div className="proj-card__cover-btn">
            <FiSearch size={16} />
            <span>Ver detalhes</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="proj-card__body">
        <div className="proj-card__header">
          <h3 className="proj-card__title">{project.title}</h3>
        </div>

        <p className="proj-card__desc">{project.description}</p>

        {/* Stack — SVG icons from devicons CDN */}
        {project.stack && (
          <div className="proj-card__stack">
            {project.stack.map((tech) => (
              <img
                key={tech.label}
                src={tech.svg}
                alt={tech.label}
                title={tech.label}
                className="proj-card__tech-icon"
              />
            ))}
          </div>
        )}

        {/* Thumbnails preview */}
        {project.thumbnails && (
          <div className="proj-card__thumbs">
            {project.thumbnails.map((src, i) => (
              <div key={i} className="proj-card__thumb">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="proj-card__footer">
          <span className="proj-card__footer-link">
            <FiSearch size={14} />
            Ver detalhes
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT MODAL — Redesigned
   ═══════════════════════════════════════════════════════════════ */

function ProjectModal({ project, onClose, onLightbox }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-lg p-3 md:p-6 lg:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full backdrop-blur-md transition-all focus:outline-none border border-white/10 hover:scale-110"
      >
        <FiX size={20} />
      </button>

      <motion.div
        initial={{ scale: 0.97, y: 16, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.97, y: 16, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="modal-container"
      >
        {/* ── HERO: imagem grande + info overlay ── */}
        <div className="modal-v2-hero">
          {project.gallery && project.gallery.length > 0 && (
            <div
              className="modal-v2-hero__img-wrap"
              onClick={() => onLightbox(0)}
            >
              <img
                src={project.gallery[0].image}
                alt={project.gallery[0].title}
                className="modal-v2-hero__img"
              />
              <div className="modal-v2-hero__gradient" />
            </div>
          )}
          <div className="modal-v2-hero__content">
            <div className="modal-v2-hero__top">
              {project.badge && (
                <span className="modal-v2-hero__badge">{project.badge}</span>
              )}
            </div>
            <div className="modal-v2-hero__bottom">
              <h2 className="modal-v2-hero__title">{project.title}</h2>
              <p className="modal-v2-hero__subtitle">{project.description}</p>
            </div>
          </div>
        </div>

        {/* ── BODY: description + stack side by side ── */}
        <div className="modal-v2-body">
          <div className="modal-v2-body__main">
            <div className="modal-v2-label">Descrição</div>
            <p className="modal-v2-body__text">{project.detailedDescription}</p>
          </div>
          <div className="modal-v2-body__side">
            <div className="modal-v2-label">Tecnologias</div>
            <div className="modal-v2-body__techs">
              {project.stack && project.stack.map((tech) => (
                <div key={tech.label} className="modal-v2-tech-chip">
                  <img src={tech.svg} alt={tech.label} className="modal-v2-tech-chip__icon" />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-v2-access-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={15} />
                Acessar Projeto
              </a>
            )}
          </div>
        </div>

        <div className="modal-divider" />

        {/* ── GALERIA ── */}
        {project.gallery && (
          <div className="modal-gallery">
            {project.gallery.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.04 }}
                  className={`modal-gallery__row ${isEven ? 'modal-gallery__row--normal' : 'modal-gallery__row--reverse'}`}
                >
                  <div
                    className="modal-gallery__img-wrap group/img"
                    onClick={() => onLightbox(idx)}
                    title="Ver em tela cheia"
                  >
                    <span className="modal-gallery__index">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="modal-gallery__img"
                      loading="lazy"
                    />
                    <div className="modal-gallery__fullscreen-btn">
                      <FiMaximize2 size={14} />
                    </div>
                  </div>
                  <div className={`modal-gallery__text ${isEven ? 'modal-gallery__text--left' : 'modal-gallery__text--right'}`}>
                    <h3 className="modal-gallery__title">{item.title}</h3>
                    <div className="modal-gallery__bar" />
                    <p className="modal-gallery__desc">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ── FOOTER ── */}
        <div className="modal-footer">
          <button onClick={onClose} className="modal-footer__btn">
            ← Fechar
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-v2-access-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={15} />
              Acessar Projeto
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
   ═══════════════════════════════════════════════════════════════ */

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [activeProject, setActiveProject] = useState(null);
  const [lightboxIndex, setLightboxIndex]  = useState(null);

  /* Lock scroll and hide header */
  useEffect(() => {
    const locked = activeProject !== null || lightboxIndex !== null;
    document.body.style.overflow     = locked ? 'hidden' : '';
    document.body.style.paddingRight = locked ? '8px'    : '';
    if (locked) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => { 
      document.body.style.overflow = ''; 
      document.body.style.paddingRight = ''; 
      document.body.classList.remove('modal-open');
    };
  }, [activeProject, lightboxIndex]);

  /* ESC closes modal */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && lightboxIndex === null) setActiveProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <section id="projetos" className="section-padding relative z-10">
        <div className="proj-section" ref={ref}>

          {/* Section title — left aligned */}
          <motion.div
            className="proj-section__title-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="proj-section__title-text">Projetos em Destaque</h2>
            <p className="proj-section__title-sub">Uma imersão nos principais trabalhos recentes.</p>
          </motion.div>

          {/* Grid */}
          <div className="proj-grid">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
                onOpen={setActiveProject}
              />
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && activeProject?.gallery && (
          <Lightbox
            images={activeProject.gallery}
            startIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && lightboxIndex === null && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
            onLightbox={openLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}
