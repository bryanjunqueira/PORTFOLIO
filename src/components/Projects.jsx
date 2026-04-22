import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiClock, FiX } from 'react-icons/fi';

// Dados da galeria do projeto principal (Raízes)
const raizysGallery = [
  {
    id: 1,
    image: '/projetos/raizys/raizys1.png',
    title: 'Página Inicial',
    description: 'Landing page principal apresentando a visão sobre ecossistemas corporativos e a importância de sistemas que sustentam operações essenciais.'
  },
  {
    id: 2,
    image: '/projetos/raizys/raizys2.png',
    title: 'Pilares de Atuação',
    description: 'Apresentação detalhada dos serviços focados nos setores de Agro, Varejo e Transporte com valor claro para cada área.'
  },
  {
    id: 3,
    image: '/projetos/raizys/raizys3.png',
    title: 'Rodapé e Navegação',
    description: 'Acesso simplificado às áreas institucionais, informações de parcerias e formulário limpo para inscrição em newsletter.'
  },
  {
    id: 4,
    image: '/projetos/raizys/raizys4.png',
    title: 'Regulamento Oficial',
    description: 'Modal integrado em overlay detalhando as condições, regras e responsabilidades do Programa de Parceiros Indicadores.'
  },
  {
    id: 5,
    image: '/projetos/raizys/raizys5.png',
    title: 'Formulário de Indicação',
    description: 'Página de registro minimalista e segura de leads e indicações para viabilizar um acompanhamento dinâmico focado em conversão.'
  },
  {
    id: 6,
    image: '/projetos/raizys/raizys6.png',
    title: 'Raizys Empresarial',
    description: 'Impactante seção hero destacando a plataforma de gestão e automação colaborativa focada em rigor operacional robusto.'
  },
  {
    id: 7,
    image: '/projetos/raizys/raizys7.png',
    title: 'Raizys Agro',
    description: 'Recorte visual da landing page especializada voltada para o rigoroso controle de propriedades, safras e produtores rurais integrados.'
  },
  {
    id: 8,
    image: '/projetos/raizys/raizys8.png',
    title: 'Visão Mobile',
    description: 'Adaptação responsiva premium que mantém a sofisticação da marca sem perder performance para acessos via dispositivos móveis.'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Controle do Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Impede scroll do body enquanto Modal aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '8px'; // Previne pulo
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => { 
      document.body.style.overflow = ''; 
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);

  // Teclas de atalho para fechar o Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="projetos" className="section-padding relative z-10">
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
              Uma imersão na arquitetura e visual dos principais trabalhos recentes.
            </p>
          </motion.div>

          {/* Grid de Projetos usando flex ou grid para formatos personalizados */}
          <div ref={ref} className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch justify-center">
            
            {/* Projeto 1: Raízes (Clica para abrir Modal) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              onClick={openModal}
              // Card mais alto do que largo -> Aspect ratio tipo 3/4 ou 9/16 e max-width
              className="w-full md:w-[45%] max-w-[500px] mx-auto md:mx-0 group card-glass rounded-[2rem] overflow-hidden cursor-pointer relative flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-white/[0.02] aspect-[3/4] md:aspect-[4/5] min-h-[500px]"
            >
              {/* Efeito interativo mostrando thumbnails por baixo */}
              <div className="absolute inset-0 bg-dark-card/95 transition-opacity duration-700 group-hover:bg-dark-card/60 z-0" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${raizysGallery[0].image})` }}
              />

              {/* Logo do Projeto */}
              <div className="relative z-10 w-full flex flex-col items-center justify-center text-center p-6">
                {/* Imagem enviada via chat e salva como logo.png */}
                <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-4">
                  <img 
                    src="/projetos/raizys/logo.png" 
                    alt="Logo Raízes" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex'; // fallback visual
                    }}
                  />
                  <div className="hidden absolute w-3/4 h-3/4 items-center justify-center border-2 border-dashed border-white/20 rounded-xl flex-col gap-2">
                    <span className="text-sm font-medium text-text-muted">logo.png</span>
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-medium text-white/90 tracking-widest uppercase opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Explorar Visuais
                </h3>
              </div>
            </motion.div>


            {/* Projeto 2: Placeholder de Rota */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full md:w-[45%] max-w-[500px] mx-auto md:mx-0 group card-glass rounded-[2rem] overflow-hidden flex flex-col items-center justify-center border border-white/[0.04] bg-dark-card/30 border-dashed relative hover:border-white/[0.08] transition-colors duration-500 aspect-[3/4] md:aspect-[4/5] min-h-[500px]"
            >
               <div className="flex flex-col items-center gap-5 text-text-muted opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <FiClock size={32} strokeWidth={1.5} className="mb-2 opacity-80" />
                <span className="text-xl md:text-2xl font-serif tracking-wide text-white/70">Projeto de Rota</span>
                <span className="text-xs md:text-sm font-light uppercase tracking-[0.3em] opacity-70">Em breve</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MODAL MODO "CASE STUDY" (SCROLL VERTICAL) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-6 lg:p-10"
            onClick={closeModal} // Fecha se clicar fora do modal
          >
            
            {/* Fechar botão Float */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-white/60 hover:text-white bg-black/40 hover:bg-black/70 p-3 rounded-full backdrop-blur-md transition-all focus:outline-none border border-white/10 hover:scale-110"
            >
              <FiX size={24} />
            </button>

            {/* Container do Modal (Diminuído o tamanho máximo e setado scroll vertical) */}
            <motion.div
              initial={{ scale: 0.96, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro do card
              // Diminuído o max-w para ficar mais elegante e alongado
              className="w-full max-w-[1000px] h-full max-h-[85vh] bg-[#0c0c0c] border border-white/10 rounded-2xl md:rounded-3xl overflow-y-auto overflow-x-hidden shadow-2xl relative custom-scrollbar overscroll-contain"
            >
              
              {/* Header do Estudo de Caso dentro do modal */}
              <div className="w-full py-16 md:py-20 px-8 md:px-16 flex flex-col items-center text-center border-b border-white/5 bg-gradient-to-b from-[#111] to-[#0c0c0c]">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-wide drop-shadow-lg">
                  Visuais do Projeto
                </h2>
                <div className="w-16 h-px bg-white/20 mb-6"></div>
                <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
                  Role a página para explorar as interfaces, decisões de fluxo e a estruturação visual deste projeto em detalhes.
                </p>
              </div>

              {/* Lista de Imagens e Descrições (Vertical) */}
              <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-20 px-6 md:px-12 lg:px-20">
                {raizysGallery.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col border border-white/5 bg-[#141414] rounded-2xl overflow-hidden group hover:border-white/10 transition-colors"
                  >
                    {/* Imagem (Seção visual completa) */}
                    <div className="w-full bg-[#050505] p-2 md:p-6 flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-auto max-h-[70vh] object-contain rounded-lg drop-shadow-xl transition-transform duration-700 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Legenda (Seção de texto abaixo da foto) */}
                    <div className="p-8 md:p-10 bg-gradient-to-t from-[#0e0e0e] to-[#121212]">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-mono text-white/30 tracking-widest px-2 py-1 bg-white/5 rounded">0{idx + 1}</span>
                        {/* Nova tipografia para os títulos (usando serif e itálico para dar elegância editorial) */}
                        <h3 className="text-2xl md:text-3xl font-serif text-white/90 font-medium tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-3xl border-l-[3px] border-white/10 pl-5 ml-1 mt-6">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer do Modal */}
              <div className="w-full py-12 px-8 flex justify-center border-t border-white/5 bg-[#0a0a0a]">
                <button 
                  onClick={closeModal}
                  className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 transition-colors text-sm tracking-widest uppercase font-medium"
                >
                  Fechar Galeria
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
