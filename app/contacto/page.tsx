import type { Metadata } from "next";
import type { IconType } from "react-icons";
import { ImWhatsapp } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";

import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | ARENASUR S.A.C.",
  description:
    "Contáctanos. ARENASUR S.A.C. comercializa, acopia y procesa minerales de oro y plata en el Perú.",
};

interface Channel {
  name: string;
  value: string;
  href: string;
  icon: IconType;
  external?: boolean;
}

// TODO: reemplaza el número y el correo de ejemplo por los reales
const channels: Channel[] = [
  {
    name: "WhatsApp",
    value: "+51 999 999 999",
    href: "https://wa.me/51999999999",
    icon: ImWhatsapp,
    external: true,
  },
  {
    name: "Correo electrónico",
    value: "tuemail@correo.com",
    href: "mailto:tuemail@correo.com",
    icon: MdAlternateEmail,
  },
];

export default function ContactoPage() {
  return (
    <section
      aria-labelledby="contact-title"
      className="w-full rounded-b-4xl bg-sand"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-40">
        {/* Texto y medios de contacto */}
        <div className="flex flex-col gap-10 lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <div className="flex flex-col gap-5">
            <h1
              id="contact-title"
              className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-dark sm:text-5xl lg:text-6xl"
            >
              Hablemos de tu próxima{" "}
              <em className="italic text-primary">oportunidad comercial</em>
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-pretty text-dark/80 lg:text-xl">
              Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto
              contigo. También puedes escribirnos directamente por WhatsApp o
              correo.
            </p>
          </div>

          <ul className="border-b-2 border-primary/25">
            {channels.map(({ name, value, href, icon: Icon, external }) => (
              <li key={name} className="border-t-2 border-primary/25">
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-sm py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon aria-hidden className="size-6 shrink-0 text-primary" />
                  <span className="flex flex-col">
                    <span className="font-body text-sm text-dark/70">
                      {name}
                    </span>
                    <span className="font-heading text-xl font-semibold break-words text-primary underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 ease-out group-hover:decoration-accent motion-reduce:transition-none">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulario */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}