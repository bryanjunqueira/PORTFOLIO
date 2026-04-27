import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Detect theme changes
    const observer = new MutationObserver(() => {
      const isLight = document.documentElement.classList.contains("light-theme");
      setTheme(isLight ? "light" : "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Initial check
    if (document.documentElement.classList.contains("light-theme")) {
      setTheme("light");
    }

    return () => observer.disconnect();
  }, []);

  const particleColor = theme === "light" ? "#000000" : "#ffffff";

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
      color: { value: particleColor },
      links: {
        enable: true,
        color: particleColor,
        distance: 150,
        opacity: theme === "light" ? 0.15 : 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: { min: 0.2, max: 0.8 },
        straight: false,
      },
      number: {
        density: { enable: true, area: 1000 },
        value: 100,
      },
      opacity: {
        value: theme === "light" ? { min: 0.15, max: 0.4 } : { min: 0.1, max: 0.3 },
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      key={theme}
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}
