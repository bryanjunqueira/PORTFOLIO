import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiClock, FiX, FiMaximize2, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/* ─── Tecnologias do projeto Raizys ──────────────────────── */
const raizysStack = [
  { label: 'HTML',       dot: '#f16529' },
  { label: 'CSS',        dot: '#2965f1' },
  { label: 'JavaScript', dot: '#f7df1e' },
];

/* ─── Galeria ─────────────────────────────────────────────── */
const raizysGallery = [
  {
    id: 1,
    image: '/projetos/raizys/raizys1.png',
    title: 'Página Inicial',
    description: 'Landing page principal apresentando a visão sobre ecossistemas corporativos e a importância de sistemas que sustentam operações essenciais.',
  },
  {
    id: 2,
    image: '/projetos/raizys/raizys2.png',
    title: 'Pilares de Atuação',
    description: 'Apresentação detalhada dos serviços focados nos setores de Agro, Varejo e Transporte com valor claro para cada área.',
  },
  {
    id: 3,
    image: '/projetos/raizys/raizys3.png',
    title: 'Rodapé e Navegação',
    description: 'Acesso simplificado às áreas institucionais, informações de parcerias e formulário limpo para inscrição em newsletter.',
  },
  {
    id: 4,
    image: '/projetos/raizys/raizys4.png',
    title: 'Regulamento Oficial',
    description: 'Modal integrado em overlay detalhando as condições, regras e responsabilidades do Programa de Parceiros Indicadores.',
  },
  {
    id: 5,
    image: '/projetos/raizys/raizys5.png',
    title: 'Formulário de Indicação',
    description: 'Página de registro minimalista e segura de leads e indicações para viabilizar um acompanhamento dinâmico focado em conversão.',
  },
  {
    id: 6,
    image: '/projetos/raizys/raizys6.png',
    title: 'Raizys Empresarial',
    description: 'Impactante seção hero destacando a plataforma de gestão e automação colaborativa focada em rigor operacional robusto.',
  },
  {
    id: 7,
    image: '/projetos/raizys/raizys7.png',
    title: 'Raizys Agro',
    description: 'Recorte visual da landing page especializada voltada para o rigoroso controle de propriedades, safras e produtores rurais integrados.',
  },
  {
    id: 8,
    image: '/projetos/raizys/raizys8.png',
    title: 'Visão Mobile',
    description: 'Adaptação responsiva premium que mantém a sofisticação da marca sem perder performance para acessos via dispositivos móveis.',
  },
];

/* ─── Lightbox ──────────────────────────────────────────────
   Exibe a imagem em tela cheia com navegação por teclado/clique
*/
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
      {/* Fechar */}
      <button
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 text-white/60 hover:text-white transition-all"
        onClick={onClose}
      >
        <FiX size={20} />
      </button>

      {/* Contador */}
      <span className="absolute top-5 left-1/2 -translate-x-1/2 font-mono text-xs text-white/30 tracking-widest">
        {String(current + 1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}
      </span>

      {/* Imagem */}
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

      {/* Legenda */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="lightbox-caption-title">{item.title}</p>
        <p className="lightbox-caption-desc">{item.description}</p>
      </div>

      {/* Setas */}
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

/* ─── Componente principal ───────────────────────────────── */
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [isModalOpen,    setIsModalOpen]    = useState(false);
  const [lightboxIndex,  setLightboxIndex]  = useState(null); // null = fechado

  /* Bloqueia scroll do body */
  useEffect(() => {
    const locked = isModalOpen || lightboxIndex !== null;
    document.body.style.overflow     = locked ? 'hidden' : '';
    document.body.style.paddingRight = locked ? '8px'    : '';
    return () => { document.body.style.overflow = ''; document.body.style.paddingRight = ''; };
  }, [isModalOpen, lightboxIndex]);

  /* ESC fecha modal principal */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && lightboxIndex === null) setIsModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      {/* ══════════ SEÇÃO PROJETOS ══════════ */}
      <section id="projetos" className="section-padding relative z-10">
        <div className="projects-container" ref={ref}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="projects-header"
          >
            <h2 className="text-3xl font-semibold mb-3">Projetos em Destaque</h2>
            <p className="text-text-secondary text-base font-light">
              Uma imersão na arquitetura e visual dos principais trabalhos recentes.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="projects-grid">
            <div className="projects-left-col">

              {/* Card Raizys */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                onClick={() => setIsModalOpen(true)}
                className="project-card-main group card-glass rounded-[1.75rem] overflow-hidden cursor-pointer relative flex flex-col items-center justify-center"
              >
                <div className="absolute inset-0 bg-dark-card/95 transition-opacity duration-700 group-hover:bg-dark-card/55 z-0" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-1000 z-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${raizysGallery[0].image})` }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 gap-6">
                  <div className="project-logo-wrapper transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                    <img
                      src="/projetos/raizys/logo.png"
                      alt="Logo Raízes"
                      className="w-full h-full object-contain drop-shadow-2xl"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    <div className="hidden absolute inset-0 items-center justify-center border-2 border-dashed border-white/20 rounded-xl flex-col gap-2">
                      <span className="text-sm font-medium text-text-muted">Raizys</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-white/60 tracking-[0.25em] uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    Explorar Visuais →
                  </span>
                </div>
                <div className="absolute top-5 left-5 z-10 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-[11px] font-medium text-white/50 tracking-widest uppercase">Website</span>
                </div>
              </motion.div>

              {/* Card Projeto de Rota */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.28, ease: 'easeOut' }}
                className="project-card-coming group card-glass rounded-[1.75rem] overflow-hidden flex flex-col items-center justify-center border border-dashed border-white/[0.06] bg-dark-card/20 hover:border-white/[0.12] transition-colors duration-500 relative"
              >
                <div className="flex flex-col items-center gap-4 text-text-muted opacity-50 group-hover:opacity-90 transition-all duration-400 px-8 text-center">
                  <FiClock size={28} strokeWidth={1.5} className="opacity-70" />
                  <div>
                    <p className="text-lg font-serif tracking-wide text-white/65 mb-1">Projeto de Rota</p>
                    <p className="text-[11px] font-light uppercase tracking-[0.3em] opacity-60">Em breve</p>
                  </div>
                </div>
              </motion.div>

            </div>
            <div className="projects-right-col" />
          </div>

        </div>
      </section>

      {/* ══════════ LIGHTBOX ══════════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={raizysGallery}
            startIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>

      {/* ══════════ MODAL EDITORIAL ══════════ */}
      <AnimatePresence>
        {isModalOpen && lightboxIndex === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-lg p-3 md:p-6 lg:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Botão fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
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

              {/* ── HERO do modal ── */}
              <div className="modal-hero">
                <div className="modal-hero__identity">
                  <img src="/projetos/raizys/logo.png" alt="Logo Raizys" className="modal-hero__logo" />
                  <div>
                    <p className="modal-hero__eyebrow">Case Study</p>
                    <h2 className="modal-hero__title">Raizys</h2>
                    <p className="modal-hero__subtitle">Sistema de Gestão & Landing Pages</p>
                  </div>
                </div>
                <div className="modal-tech-strip">
                  <span className="modal-tech-strip__label">Stack</span>
                  <div className="modal-tech-strip__tags">
                    {raizysStack.map((tech) => (
                      <span key={tech.label} className="modal-tech-tag" style={{ '--dot': tech.dot }}>
                        <span className="modal-tech-tag__dot" />
                        {tech.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── IMAGEM DESTAQUE (hero visual do projeto) ── */}
              <div className="modal-featured">
                <div
                  className="modal-featured__img-wrap group"
                  onClick={() => openLightbox(0)}
                  title="Ver em tela cheia"
                >
                  <img
                    src={raizysGallery[0].image}
                    alt="Raizys — Página Inicial"
                    className="modal-featured__img"
                  />
                  {/* Overlay com ícone de zoom */}
                  <div className="modal-featured__overlay">
                    <div className="modal-featured__zoom-btn">
                      <FiMaximize2 size={18} />
                      <span>Ver em tela cheia</span>
                    </div>
                  </div>
                </div>
                <p className="modal-featured__hint">↑ Clique para expandir · Role para ver todas as telas</p>
              </div>

              <div className="modal-divider" />

              {/* ── GALERIA EDITORIAL ── */}
              <div className="modal-gallery">
                {raizysGallery.map((item, idx) => {
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
                      {/* Imagem compacta */}
                      <div
                        className="modal-gallery__img-wrap group/img"
                        onClick={() => openLightbox(idx)}
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
                        {/* Botão tela cheia ao hover */}
                        <div className="modal-gallery__fullscreen-btn">
                          <FiMaximize2 size={14} />
                        </div>
                      </div>

                      {/* Texto */}
                      <div className={`modal-gallery__text ${isEven ? 'modal-gallery__text--left' : 'modal-gallery__text--right'}`}>
                        <h3 className="modal-gallery__title">{item.title}</h3>
                        <div className="modal-gallery__bar" />
                        <p className="modal-gallery__desc">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ── FOOTER com botão Acessar Projeto ── */}
              <div className="modal-footer">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="modal-footer__btn"
                >
                  ← Fechar
                </button>

                <a
                  href="https://www.raizys.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-access-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={15} />
                  Acessar Projeto
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
