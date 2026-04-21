import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
        resize: true,
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true, // Sistema panorâmico conectado
        color: "#ffffff",
        distance: 150,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none", // Movimento em todas as direções (panorâmico)
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: { min: 0.2, max: 0.8 },
        straight: false,
      },
      number: {
        density: { enable: true, area: 1000 },
        value: 100, // Mais partículas rodando
      },
      opacity: {
        value: { min: 0.1, max: 0.3 },
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}
