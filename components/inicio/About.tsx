import Image from "next/image";
import Link from "next/link";

import type { IconType } from "react-icons";
import { PiHandshake, PiScales, PiShieldCheck } from "react-icons/pi";

interface Valor {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

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

export default function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="w-full rounded-b-4xl bg-sand"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 py-20 sm:px-6 lg:gap-24 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto */}
          <div className="flex flex-col items-start gap-6">
            <p className="flex items-center gap-3 font-heading text-sm font-semibold text-primary">
              <span aria-hidden className="h-0.5 w-8 bg-accent" />
              Sobre Arena Sur SAC
            </p>

            <h2
              id="about-title"
              className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-balance text-dark lg:text-5xl"
            >
              Comprometidos con la comercialización de{" "}
              <em className="italic text-primary">minerales.</em>
            </h2>

            <p className="max-w-xl font-body text-base leading-relaxed text-pretty text-dark/80 lg:text-xl">
              En ARENASUR S.A.C. desarrollamos actividades relacionadas con la
              comercialización de minerales auríferos y argentíferos en el
              Perú.
            </p>

            <Link
              href="/sobre-nosotros"
              className="mt-2 w-fit rounded-4xl border-2 border-primary px-6 py-3 font-body text-sm font-semibold text-primary transition-[background-color,color,transform] duration-200 ease-out hover:bg-primary hover:text-white-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-[0.97] motion-reduce:transition-none"
            >
              Conócenos un poco más
            </Link>
          </div>

          {/* Imagen + frase */}
          <figure className="flex flex-col gap-6">
            <Image
              src="/images/img-about.webp"
              // TODO: reemplaza por una descripción real de lo que muestra la foto
              alt="ARENASUR S.A.C., comercialización de minerales auríferos y argentíferos"
              width={450}
              height={450}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full rounded-4xl outline-2 outline-offset-[6px] outline-accent"
            />
            <figcaption className="border-l-4 border-accent pl-4 font-heading text-lg font-semibold italic text-primary lg:text-xl">
              “Cada acuerdo debe generar valor para ambas partes.”
            </figcaption>
          </figure>
        </div>

        {/* Valores */}
        <ul className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {valores.map(({ id, icon: Icon, title, description }) => (
            <li key={id} className="border-t-2 border-primary/25 pt-6">
              <Icon aria-hidden className="mb-4 size-7 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold text-primary">
                {title}
              </h3>
              <p className="font-body text-base leading-relaxed text-dark/80">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}