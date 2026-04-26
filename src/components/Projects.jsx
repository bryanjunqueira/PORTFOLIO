import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiX, FiMaximize2, FiExternalLink, FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';

/* ═══════════════════════════════════════════════════════════════
   DADOS DOS PROJETOS
   ═══════════════════════════════════════════════════════════════ */

const projects = [
  {
    id: 'raizys',
    title: 'Raizys',
    badge: 'DESTAQUE',
    description: 'Sistema de gestão e landing pages para ecossistema corporativo com foco em setores de Agro, Varejo e Transporte.',
    cover: '/projetos/raizys/raizys1.png',
    logo: '/projetos/raizys/logo.png',
    url: 'https://www.raizys.com.br/',
    stack: [
      { label: 'HTML5',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { label: 'CSS3',       svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { label: 'JavaScript', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
      { label: 'Python',     svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
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
    id: 'guarutoner-gps',
    title: 'Projeto de Rota - GPS',
    badge: 'DESTAQUE',
    description: 'Aplicação completa de gestão de atendimentos em campo com rastreamento GPS em tempo real, controle de rotas e relatórios operacionais.',
    cover: '/projetos/projeto-gps-rota/gps01.jpeg',
    stack: [
      { label: 'HTML5',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { label: 'CSS3',       svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { label: 'JavaScript', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
      { label: 'Node.js',    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { label: 'PostgreSQL', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
    gallery: [
      { id: 1, image: '/projetos/projeto-gps-rota/gps01.jpeg', title: 'Dashboard Operacional', description: 'Painel principal do gestor com mapa interativo em tempo real via Leaflet, exibindo localização GPS dos técnicos, status de rota e lista de destinos atribuídos.' },
      { id: 2, image: '/projetos/projeto-gps-rota/gps02.jpeg', title: 'Gestão de Rota do Técnico', description: 'Interface do técnico para gerenciar a fila de clientes com controles de próximo cliente, finalização de rota, edição por drag-and-drop e coordenadas GPS em tempo real.' },
      { id: 3, image: '/projetos/projeto-gps-rota/gps03.jpeg', title: 'Histórico de Atendimentos', description: 'Relatório completo com registros de todos os atendimentos concluídos organizados por data, técnico responsável e horário exato de conclusão.' },
      { id: 4, image: '/projetos/projeto-gps-rota/gps04.jpeg', title: 'Gestão de Equipe', description: 'Painel de equipe exibindo todos os membros cadastrados com seus respectivos cargos (Técnico/Gestor) e métricas de atendimentos concluídos.' },
      { id: 5, image: '/projetos/projeto-gps-rota/gps05.jpg', title: 'Mapa em Tempo Real — Mobile', description: 'Versão mobile responsiva do dashboard com mapa GPS, informações de localização do técnico e lista de destinos da rota atual.' },
      { id: 6, image: '/projetos/projeto-gps-rota/gps06.jpg', title: 'Fila de Clientes — Mobile', description: 'Interface mobile otimizada para o técnico com visualização do cliente atual, fila de atendimentos, coordenadas e ações rápidas.' },
      { id: 7, image: '/projetos/projeto-gps-rota/gps07.jpg', title: 'Relatórios — Mobile', description: 'Histórico de atendimentos adaptado para dispositivos móveis com cards expansíveis, badges de status e organização cronológica.' },
      { id: 8, image: '/projetos/projeto-gps-rota/gps08.jpg', title: 'Equipe — Mobile', description: 'Painel de equipe na versão mobile com cards individuais para cada membro, exibindo cargo, ícone de função e contador de produtividade.' },
    ],
    detailedDescription: 'Desenvolvi uma aplicação de gestão de atendimentos em campo focada em resolver um problema real de operação: falta de controle, rastreabilidade e organização.\n\nO sistema permite que o técnico gerencie suas rotas e atendimentos de forma estruturada, enquanto o gestor acompanha tudo em tempo real, incluindo localização via GPS, progresso das rotas e histórico completo das atividades.\n\nToda a aplicação foi pensada com foco em persistência de dados, continuidade de operação mesmo sem conexão e organização das informações para tomada de decisão. Mais do que um sistema funcional, é uma solução voltada para transformar processos manuais em um fluxo digital eficiente e confiável.',
  },
  {
    id: 'missao-heroi',
    title: 'Missão do Herói',
    badge: 'DESTAQUE',
    description: 'Jogo RPG desenvolvido com Canvas API, rodando a 60 FPS com sistemas de IA, missões, colisões e efeitos sonoros.',
    cover: '/projetos/Missão do Herói - Faculdade/jogo01.jpeg',
    stack: [
      { label: 'React',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { label: 'Vite',       svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { label: 'Tailwind',   svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { label: 'JavaScript', svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
      { label: 'HTML5',      svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { label: 'CSS3',       svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    gallery: [
      { id: 1, image: '/projetos/Missão do Herói - Faculdade/jogo01.jpeg', title: 'Menu Inicial', description: 'Interface desenvolvida com Tailwind CSS, apresentando um design responsivo e efeitos sonoros desde a tela principal.' },
      { id: 2, image: '/projetos/Missão do Herói - Faculdade/jogo02.jpeg', title: 'Game Loop', description: 'Motor customizado utilizando Canvas API para manter a renderização gráfica fluida a 60 FPS consistentes.' },
      { id: 3, image: '/projetos/Missão do Herói - Faculdade/jogo03.jpeg', title: 'Sistema de Classes', description: 'Arquitetura orientada a objetos para gerenciar o estado, atributos e comportamentos de jogadores, NPCs e inimigos.' },
      { id: 4, image: '/projetos/Missão do Herói - Faculdade/jogo04.jpeg', title: 'Inteligência Artificial', description: 'Sistema de pathfinding e perseguição para inimigos garantindo um combate dinâmico e estratégico.' },
      { id: 5, image: '/projetos/Missão do Herói - Faculdade/jogo05.jpeg', title: 'Detecção de Colisão', description: 'Física customizada para o mapa interativo, gerenciando paredes, obstáculos, projéteis e interações com baús.' },
      { id: 6, image: '/projetos/Missão do Herói - Faculdade/jogo06.jpeg', title: 'Sistema de Missões', description: 'Logística de quests e objetivos variados em tempo real que ditam a progressão do herói.' },
      { id: 7, type: 'video', image: '/projetos/Missão do Herói - Faculdade/jogo14.mp4', title: 'Gameplay Completa', description: 'Vídeo demonstrativo com as mecânicas, trilha sonora, movimentação de IA e combates do projeto rodando em tempo real.' }
    ],
    detailedDescription: 'Projeto acadêmico com o desenvolvimento de um RPG 2D construído do zero. O motor gráfico foi desenvolvido utilizando a Canvas API para máxima performance gráfica a 60 FPS, gerenciado pelo Vite e React 19. A aplicação destaca-se por não utilizar bibliotecas prontas de jogos (como Phaser), implementando manualmente todos os sistemas avançados: loop de renderização, lógica de orientação a objetos, algoritmos de colisão física, e inteligência artificial (IA) para controle de inimigos e perseguição. \n\nO projeto possui sistema de missões, trilha sonora interativa e interface estilizada com Tailwind CSS.',
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

      {item.type === 'video' ? (
        <motion.video
          key={current}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={item.image}
          controls
          autoPlay
          className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
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
      )}

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
   PROJECT CARD — Grid layout inspired by reference
   ═══════════════════════════════════════════════════════════════ */

function ProjectCardGrid({ project, index, isInView, onOpen }) {
  // Show max 4 icons in the stack, and a badge with the remaining count
  const displayStack = project.stack.slice(0, 4);
  const remainingCount = project.stack.length - 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
      className="proj-card-grid"
      onClick={() => onOpen(project)}
    >
      <div className="proj-card-grid__cover">
        {project.badge && (
          <div className="proj-card-grid__badge">{project.badge}</div>
        )}
        <img src={project.cover} alt={project.title} className="proj-card-grid__img" loading="lazy" />
      </div>
      <div className="proj-card-grid__body">
        <h3 className="proj-card-grid__title">
          {project.title} <FiArrowRight className="proj-card-grid__arrow" />
        </h3>
        <p className="proj-card-grid__desc">{project.description}</p>
        <div className="proj-card-grid__footer">
          <div className="proj-card-grid__stack">
            {displayStack.map((tech, i) => (
              <div key={i} className="proj-card-grid__tech-icon">
                <img src={tech.svg} alt={tech.label} title={tech.label} />
              </div>
            ))}
            {remainingCount > 0 && (
              <div className="proj-card-grid__tech-more">+{remainingCount}</div>
            )}
          </div>
          <span className="proj-card-grid__link">Ver Detalhes</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT MODAL
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
        {/* ── HERO ── */}
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
            <div className="modal-v2-hero__top" />
            <div className="modal-v2-hero__bottom">
              <h2 className="modal-v2-hero__title">{project.title}</h2>
              <p className="modal-v2-hero__subtitle">{project.description}</p>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
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
                    {item.type === 'video' ? (
                      <video
                        src={item.image}
                        className="modal-gallery__img"
                        muted
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="modal-gallery__img"
                        loading="lazy"
                      />
                    )}
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

          {/* Section title */}
          <motion.div
            className="proj-section__title-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="proj-section__title-text">Projetos em Destaque</h2>
            <p className="proj-section__title-sub">Uma imersão nos principais trabalhos recentes.</p>
          </motion.div>

          {/* Project grid */}
          <div className="proj-grid-container">
            {projects.map((project, i) => (
              <ProjectCardGrid
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
