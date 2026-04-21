import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ 
            opacity: 0, 
            y: 20,
            filter: "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0))"
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.2))"
          }}
          whileHover={{ 
            scale: 1.08,
            filter: "drop-shadow(0px 0px 45px rgba(255, 255, 255, 0.8))"
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            scale: { duration: 0.3, ease: "easeOut" },
            filter: { duration: 0.3, ease: "easeOut" }
          }}
          className="space-y-6 cursor-default"
        >
          <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-text-muted mb-2 sm:mb-4 inline-block transition-colors duration-300 hover:text-white">
            Olá, meu nome é Bryan
          </p>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
            Desenvolvedor <br className="hidden sm:block" />
            <span className="text-text-secondary font-medium">Front-End</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-muted max-w-2xl font-light leading-relaxed">
            Construindo interfaces limpas, performáticas e acessíveis. 
            Foco em entregar valor real através do design e do código.
          </p>
        </motion.div>
      </div>

      {/* Indicador de Scroll Clássico */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
