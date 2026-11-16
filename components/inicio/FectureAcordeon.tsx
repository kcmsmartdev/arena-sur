"use client";

import { useId, useState } from "react";

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Relaciones comerciales transparentes",
    description:
      "Promovemos acuerdos basados en la comunicación clara, el respeto mutuo y condiciones comerciales que generen valor para ambas partes.",
  },
  {
    title: "Conocemos a quienes trabajan con nosotros",
    description:
      "Promovemos acuerdos basados en la comunicación clara, el respeto mutuo y condiciones comerciales que generen valor para ambas partes.",
  },
  {
    title: "Atención al origen de los minerales",
    description:
      "La procedencia de los minerales es un aspecto importante de nuestra actividad. Promovemos la revisión de información y documentación que permita conocer su origen.",
  },
  {
    title: "Responsabilidad en cada operación",
    description:
      "Asumimos cada relación comercial con seriedad y compromiso, procurando que nuestras actividades se desarrollen bajo criterios de transparencia y responsabilidad.",
  },
];

const DURATION_MS = 6000;

function SealIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 shrink-0 transition-colors duration-300"
    >
      <path
        d="M12 1.5l2.6 1.9 3.2-.1 1 3.1 2.6 1.9-1 3.1 1 3.1-2.6 1.9-1 3.1-3.2-.1L12 22.5l-2.6-1.9-3.2.1-1-3.1-2.6-1.9 1-3.1-1-3.1 2.6-1.9 1-3.1 3.2.1L12 1.5z"
        className={active ? "fill-accent" : "fill-border"}
      />
      <path
        d="M8 12.4l2.7 2.7L16.2 9.5"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active ? "stroke-white" : "stroke-primary/60"}
      />
    </svg>
  );
}

export default function FeatureAccordion() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const baseId = useId();

  const next = () => setActive((i) => (i + 1) % FEATURES.length);

  return (
    <div
      className="w-full max-w-160 rounded-[28px] border border-border bg-gray-dark px-6 py-4 sm:px-10 sm:py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul className="divide-y divide-primary/15">
        {FEATURES.map((feature, i) => {
          const isActive = i === active;
          const buttonId = `${baseId}-btn-${i}`;
          const panelId = `${baseId}-panel-${i}`;

          return (
            <li key={feature.title} className="relative">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-center gap-4 rounded-lg py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <SealIcon active={isActive} />
                  <span
                    className={`font-heading text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] font-medium tracking-tight transition-colors duration-300 ${
                      isActive
                        ? "text-black"
                        : "text-muted"
                    }`}
                  >
                    {feature.title}
                  </span>
                </button>
              </h3>

              {/* Altura animada con grid rows: sin medir con JS */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[34ch] pb-7 pl-10 font-body text-[1.0625rem] leading-relaxed text-black sm:max-w-[44ch]">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Línea de progreso sobre el divisor del ítem activo */}
              {isActive && (
                <span
                  aria-hidden="true"
                  key={active}
                  onAnimationEnd={next}
                  className="feature-progress absolute inset-x-0 bottom-0 h-1 origin-left"
                  style={{
                    animationDuration: `${DURATION_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}