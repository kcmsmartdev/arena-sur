import Link from "next/link";

import type { IconType } from "react-icons";
import { PiArrowsLeftRight, PiFactory, PiWarehouse } from "react-icons/pi";

interface Service {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  buttonName: string;
  href: string;
  featured?: boolean;
}

// TODO: confirma las descripciones y las rutas de cada servicio
const services: Service[] = [
  {
    id: 1,
    icon: PiArrowsLeftRight,
    title: "Compra y venta de minerales",
    description:
      "Comercializamos minerales auríferos y argentíferos en el Perú, con acuerdos claros y operaciones transparentes para ambas partes.",
    buttonName: "Conocer más",
    href: "/nuestros-servicios#compra-venta-de-minerales",
    featured: true,
  },
  {
    id: 2,
    icon: PiWarehouse,
    title: "Acopio de minerales",
    description:
      "Recibimos y reunimos minerales de oro y plata para su posterior comercialización o procesamiento.",
    buttonName: "Conocer más",
    href: "/nuestros-servicios#acopio-de-minerales",
  },
  {
    id: 3,
    icon: PiFactory,
    title: "Procesamiento de minerales",
    description:
      "Procesamos minerales de oro y plata, cumpliendo cada acuerdo con compromiso y responsabilidad.",
    buttonName: "Conocer más",
    href: "/nuestros-servicios#procesamiento-de-minerales",
  },
];

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 py-20 sm:px-6 lg:gap-16 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <p className="font-heading text-sm font-semibold text-primary">
            Nuestros servicios
          </p>
          <h2
            id="services-title"
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-balance text-dark lg:text-5xl"
          >
            Soluciones para la comercialización de{" "}
            <em className="italic text-primary">minerales</em>
          </h2>
          <p className="max-w-2xl font-body text-base leading-relaxed text-pretty text-dark/80 lg:text-xl">
            Trabajamos con compromiso y transparencia en cada etapa de
            nuestras operaciones.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {services.map(
            ({ id, icon: Icon, title, description, buttonName, href, featured }) => (
              <li
                key={id}
                className={`group relative flex flex-col gap-8 rounded-4xl p-8 lg:p-10 ${
                  featured
                    ? "bg-primary text-white-warm lg:row-span-2 lg:justify-between"
                    : "bg-sand text-dark"
                }`}
              >
                <Icon
                  aria-hidden
                  className={featured ? "size-10 text-accent" : "size-8 text-primary"}
                />

                <div className="flex flex-col items-start gap-3">
                  <h3
                    className={`font-heading font-bold tracking-tight text-balance ${
                      featured ? "text-3xl lg:text-5xl" : "text-2xl"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`max-w-md font-body text-base leading-relaxed text-pretty ${
                      featured ? "text-white-warm/85 lg:text-lg" : "text-dark/80"
                    }`}
                  >
                    {description}
                  </p>

                  {/* Enlace extendido: toda la tarjeta es clicable */}
                  <Link
                    href={href}
                    className={`mt-3 font-body text-sm font-semibold underline decoration-2 underline-offset-4 transition-colors duration-200 ease-out after:absolute after:inset-0 after:rounded-4xl focus-visible:after:outline-2 focus-visible:after:outline-offset-2 motion-reduce:transition-none ${
                      featured
                        ? "text-white-warm decoration-accent group-hover:decoration-white-warm focus-visible:after:outline-accent"
                        : "text-primary decoration-accent group-hover:decoration-primary focus-visible:after:outline-primary"
                    }`}
                  >
                    {buttonName}
                    <span className="sr-only"> sobre {title.toLowerCase()}</span>
                  </Link>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}