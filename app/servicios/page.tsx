import type { Metadata } from "next";

import type { IconType } from "react-icons";
import {
  PiArrowsLeftRight,
  PiCheck,
  PiFactory,
  PiWarehouse,
} from "react-icons/pi";

export const metadata: Metadata = {
  title: "Nuestros servicios | ARENASUR S.A.C.",
  description:
    "Compra y venta, acopio y procesamiento de minerales de oro y plata en el Perú. Conoce los servicios de ARENASUR S.A.C.",
};

interface Servicio {
  id: number;
  slug: string;
  icon: IconType;
  title: string;
  description: string;
  points: string[];
  featured?: boolean;
}

// TODO: textos en borrador, armados con tu propio copy. Faltan los detalles
// reales de cada servicio (cómo opera, requisitos, capacidades, ubicación).
// Los slugs coinciden con las anclas de Services y Footer.
const servicios: Servicio[] = [
  {
    id: 1,
    slug: "compra-venta-de-minerales",
    icon: PiArrowsLeftRight,
    title: "Compra y venta de minerales",
    description:
      "Comercializamos minerales auríferos y argentíferos en el Perú, con acuerdos claros y operaciones transparentes para ambas partes. Cada operación se construye sobre la confianza y el cumplimiento de lo acordado.",
    points: [
      "Comercialización de minerales auríferos y argentíferos.",
      "Acuerdos claros que generan valor para ambas partes.",
      "Operaciones transparentes y cumplimiento de lo pactado.",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "acopio-de-minerales",
    icon: PiWarehouse,
    title: "Acopio de minerales",
    description:
      "Recibimos y reunimos minerales de oro y plata para su posterior comercialización o procesamiento, manteniendo una comunicación clara con quienes confían en nosotros.",
    points: [
      "Recepción y reunión de minerales de oro y plata.",
      "Orientado a su posterior comercialización o procesamiento.",
      "Relaciones basadas en el respeto y la comunicación.",
    ],
  },
  {
    id: 3,
    slug: "procesamiento-de-minerales",
    icon: PiFactory,
    title: "Procesamiento de minerales",
    description:
      "Procesamos minerales de oro y plata, cumpliendo cada acuerdo con compromiso y responsabilidad, y actuando de manera responsable en cada una de nuestras actividades.",
    points: [
      "Procesamiento de minerales de oro y plata.",
      "Compromiso y responsabilidad en cada operación.",
      "Acuerdos cumplidos con transparencia.",
    ],
  },
];

export default function NuestrosServiciosPage() {
  return (
    <>
      {/* Cabecera */}
      <section
        aria-labelledby="services-page-title"
        className="w-full rounded-b-4xl bg-sand"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 pb-16 pt-32 sm:px-6 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-40">
          <h1
            id="services-page-title"
            className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-dark sm:text-5xl lg:text-6xl"
          >
            Servicios para la comercialización de{" "}
            <em className="italic text-primary">minerales de oro y plata.</em>
          </h1>

          <p className="max-w-2xl font-body text-base leading-relaxed text-pretty text-dark/80 lg:text-xl">
            Trabajamos con compromiso y transparencia en cada etapa de
            nuestras operaciones.
          </p>

          <nav aria-label="Servicios">
            <ul className="flex flex-wrap gap-3">
              {servicios.map(({ id, slug, title }) => (
                <li key={id}>
                  <a
                    href={`#${slug}`}
                    className="inline-block rounded-4xl border-2 border-primary px-5 py-2.5 font-body text-sm font-semibold text-primary transition-[background-color,color,transform] duration-200 ease-out hover:bg-primary hover:text-white-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-[0.97] motion-reduce:transition-none"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Servicios */}
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        {servicios.map(
          ({ id, slug, icon: Icon, title, description, points, featured }) => (
            <section
              key={id}
              id={slug}
              aria-labelledby={`${slug}-title`}
              className={`grid scroll-mt-28 grid-cols-1 gap-8 rounded-4xl p-8 md:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16 ${
                featured ? "bg-primary text-white-warm" : "bg-sand text-dark"
              }`}
            >
              <div className="flex flex-col items-start gap-6 lg:col-span-5">
                <Icon
                  aria-hidden
                  className={`size-10 ${featured ? "text-accent" : "text-primary"}`}
                />
                <h2
                  id={`${slug}-title`}
                  className={`font-heading text-3xl font-bold leading-[1.1] tracking-tight text-balance lg:text-5xl ${
                    featured ? "" : "text-primary"
                  }`}
                >
                  {title}
                </h2>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <p
                  className={`max-w-2xl font-body text-lg leading-relaxed text-pretty lg:text-xl ${
                    featured ? "text-white-warm/85" : "text-dark/80"
                  }`}
                >
                  {description}
                </p>

                <ul
                  className={`border-b-2 ${
                    featured ? "border-white-warm/20" : "border-primary/25"
                  }`}
                >
                  {points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-3 border-t-2 py-4 font-body text-base leading-relaxed ${
                        featured
                          ? "border-white-warm/20 text-white-warm"
                          : "border-primary/25 text-dark"
                      }`}
                    >
                      <PiCheck
                        aria-hidden
                        className={`mt-1 size-5 shrink-0 ${
                          featured ? "text-accent" : "text-primary"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ),
        )}
      </div>
    </>
  );
}