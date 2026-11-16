import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import type { IconType } from "react-icons";
import { PiHandshake, PiScales, PiShieldCheck } from "react-icons/pi";

export const metadata: Metadata = {
  title: "Sobre nosotros | ARENASUR S.A.C.",
  description:
    "Conoce a ARENASUR S.A.C., comercializadora de minerales auríferos y argentíferos en el Perú, y los valores que guían cada operación.",
};

interface Valor {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

const servicios = [
  "Compra y venta de minerales",
  "Acopio de minerales",
  "Procesamiento de minerales",
];

const valores: Valor[] = [
  {
    id: 1,
    icon: PiScales,
    title: "Integridad",
    description:
      "Actuamos con honestidad y transparencia en nuestras relaciones comerciales.",
  },
  {
    id: 2,
    icon: PiShieldCheck,
    title: "Responsabilidad",
    description:
      "Asumimos con compromiso cada operación, procurando actuar de manera responsable en nuestras actividades.",
  },
  {
    id: 3,
    icon: PiHandshake,
    title: "Confianza",
    description:
      "Construimos relaciones comerciales sólidas mediante el respeto, la comunicación y el cumplimiento de nuestros acuerdos.",
  },
];

const h2Class =
  "font-heading text-3xl font-bold leading-[1.1] tracking-tight text-balance text-dark lg:text-5xl";

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Cabecera */}
      <section
        aria-labelledby="about-title"
        className="w-full rounded-b-4xl bg-sand"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="flex flex-col items-start gap-6">
            <h1
              id="about-title"
              className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-dark sm:text-5xl lg:text-6xl"
            >
              Comercializamos minerales con{" "}
              <em className="italic text-primary">confianza y transparencia.</em>
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-pretty text-dark/80 lg:text-xl">
              En ARENASUR S.A.C. desarrollamos actividades relacionadas con la
              comercialización de minerales auríferos y argentíferos en el
              Perú, construyendo relaciones comerciales sólidas basadas en el
              respeto y el cumplimiento de nuestros acuerdos.
            </p>
          </div>

          <figure className="flex flex-col gap-6">
            <Image
              src="/images/img-about.webp"
              // TODO: reemplaza por una descripción real de lo que muestra la foto
              alt="ARENASUR S.A.C., comercialización de minerales auríferos y argentíferos"
              width={450}
              height={450}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full rounded-4xl outline-2 outline-offset-[6px] outline-accent"
            />
            <figcaption className="border-l-4 border-accent pl-4 font-heading text-lg font-semibold italic text-primary lg:text-xl">
              “Cada acuerdo debe generar valor para ambas partes.”
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Qué hacemos */}
      <section aria-labelledby="what-we-do-title" className="w-full">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <h2 id="what-we-do-title" className={`${h2Class} lg:col-span-5`}>
            Qué hacemos
          </h2>

          <div className="flex flex-col items-start gap-8 lg:col-span-7">
            <p className="max-w-2xl font-body text-lg leading-relaxed text-pretty text-dark/80 lg:text-2xl">
              Nos dedicamos a la comercialización, acopio y procesamiento de
              minerales de oro y plata.
            </p>

            <ul className="w-full border-b-2 border-primary/25">
              {servicios.map((servicio) => (
                <li
                  key={servicio}
                  className="border-t-2 border-primary/25 py-4 font-heading text-xl font-semibold text-primary"
                >
                  {servicio}
                </li>
              ))}
            </ul>

            <Link
              href="/nuestros-servicios"
              className="rounded-4xl border-2 border-primary px-6 py-3 font-body text-sm font-semibold text-primary transition-[background-color,color,transform] duration-200 ease-out hover:bg-primary hover:text-white-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-[0.97] motion-reduce:transition-none"
            >
              Conoce nuestros servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Misión y visión */}
      {/* TODO: textos en borrador, confirma o reemplaza por los oficiales */}
      <section aria-label="Misión y visión" className="w-full">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28">
          <article className="flex flex-col gap-5 rounded-4xl bg-primary p-8 text-white-warm lg:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight lg:text-4xl">
              Misión
            </h2>
            <p className="max-w-lg font-body text-lg leading-relaxed text-pretty text-white-warm/85 lg:text-xl">
              Comercializar minerales auríferos y argentíferos con integridad,
              responsabilidad y transparencia, generando valor para ambas
              partes en cada acuerdo.
            </p>
          </article>

          <article className="flex flex-col gap-5 rounded-4xl bg-sand p-8 text-dark lg:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary lg:text-4xl">
              Visión
            </h2>
            <p className="max-w-lg font-body text-lg leading-relaxed text-pretty text-dark/80 lg:text-xl">
              Ser una comercializadora de minerales reconocida en el Perú por
              la confianza que construimos con cada cliente y proveedor.
            </p>
          </article>
        </div>
      </section>

      {/* Valores */}
      <section aria-labelledby="values-title" className="w-full">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-20 sm:px-6 lg:gap-14 lg:px-8 lg:pb-28">
          <h2 id="values-title" className={h2Class}>
            Nuestros valores
          </h2>

          <ul className="border-b-2 border-primary/25">
            {valores.map(({ id, icon: Icon, title, description }) => (
              <li
                key={id}
                className="grid grid-cols-1 gap-4 border-t-2 border-primary/25 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
              >
                <div className="flex items-center gap-4 lg:col-span-5">
                  <Icon aria-hidden className="size-8 shrink-0 text-primary" />
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-primary lg:text-3xl">
                    {title}
                  </h3>
                </div>
                <p className="max-w-xl font-body text-base leading-relaxed text-pretty text-dark/80 lg:col-span-7 lg:text-lg">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}