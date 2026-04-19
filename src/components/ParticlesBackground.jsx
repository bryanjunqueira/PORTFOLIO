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
        enable: false, // Remoção das linhas para visual mais clean de dots
      },
      move: {
        direction: "top", // Movimento suave subindo
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: { min: 0.1, max: 0.4 },
        straight: true,
      },
      number: {
        density: { enable: true, area: 1000 },
        value: 50, // Menos partículas
      },
      opacity: {
        value: { min: 0.05, max: 0.2 },
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
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
