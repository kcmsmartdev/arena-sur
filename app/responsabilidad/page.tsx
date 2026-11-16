import type { Metadata } from "next";

import type { IconType } from "react-icons";
import { PiFileText, PiLeaf, PiSealCheck, PiUsersThree } from "react-icons/pi";

export const metadata: Metadata = {
  title: "Responsabilidad | ARENASUR S.A.C.",
  description:
    "Conoce los compromisos de ARENASUR S.A.C. con la minería formal, el cuidado de la naturaleza, los poblados y los acuerdos que benefician a todas las partes.",
};

interface Compromiso {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

// TODO: textos en borrador. Confirma que reflejen prácticas reales de la empresa
// antes de publicar (evité cifras, certificaciones y programas específicos).
const compromisos: Compromiso[] = [
  {
    id: 1,
    icon: PiSealCheck,
    title: "Minería formal",
    description:
      "Promovemos una minería que opera dentro del marco legal. Nos comprometemos a trabajar bajo las normas vigentes y a relacionarnos comercialmente con actores que respeten la formalidad.",
  },
  {
    id: 2,
    icon: PiLeaf,
    title: "Cuidado de la naturaleza",
    description:
      "Reconocemos que la actividad minera impacta en el entorno. Procuramos actuar de manera responsable con el medio ambiente y promover prácticas que reduzcan ese impacto.",
  },
  {
    id: 3,
    icon: PiUsersThree,
    title: "Respeto por los poblados",
    description:
      "Valoramos a las comunidades y poblados cercanos a la actividad minera. Buscamos mantener una relación de respeto, diálogo y beneficio mutuo.",
  },
  {
    id: 4,
    icon: PiFileText,
    title: "Contratos que benefician a todos",
    description:
      "Cada contrato debe ser claro y generar valor para todas las partes. Cumplimos nuestros acuerdos y buscamos que las condiciones sean transparentes y equilibradas.",
  },
];

export default function ResponsabilidadPage() {
  return (
    <>
      {/* Cabecera */}
      <section
        aria-labelledby="responsibility-title"
        className="w-full rounded-b-4xl bg-sand"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-40">
          <h1
            id="responsibility-title"
            className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-dark sm:text-5xl lg:col-span-7 lg:text-6xl"
          >
            Comprometidos con una minería{" "}
            <em className="italic text-primary">formal y responsable.</em>
          </h1>

          <p className="max-w-xl font-body text-base leading-relaxed text-pretty text-dark/80 lg:col-span-5 lg:text-xl">
            En ARENASUR S.A.C. entendemos que la comercialización de minerales
            debe generar valor sin dejar de lado el entorno donde se
            desarrolla. Por eso asumimos compromisos con la formalidad, la
            naturaleza, los poblados y la justicia en cada acuerdo.
          </p>
        </div>
      </section>

      {/* Compromisos */}
      <section aria-labelledby="commitments-title" className="w-full">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="rounded-4xl bg-primary px-8 py-12 text-white-warm md:px-14 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col gap-4 lg:col-span-4">
                <h2
                  id="commitments-title"
                  className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-balance lg:text-5xl"
                >
                  Nuestros compromisos
                </h2>
                <p className="max-w-sm font-body text-base leading-relaxed text-pretty text-white-warm/80 lg:text-lg">
                  Los principios que guían la forma en que trabajamos con
                  proveedores, clientes y comunidades.
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
                {compromisos.map(({ id, icon: Icon, title, description }) => (
                  <li key={id} className="border-t-2 border-white-warm/20 pt-6">
                    <Icon aria-hidden className="mb-4 size-8 text-accent" />
                    <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-balance">
                      {title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-pretty text-white-warm/80">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}