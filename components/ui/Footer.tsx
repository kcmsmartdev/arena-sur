import Image from "next/image";
import Link from "next/link";

import type { IconType } from "react-icons";
import { ImWhatsapp } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";

import Cta from "../shared/Cta";

interface FooterLink {
  name: string;
  href: string;
  icon?: IconType;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

// TODO: confirma todas las rutas. Las de "Servicios" apuntan a las anclas de
// /nuestros-servicios y las de "Recursos" son una propuesta mía.
// TODO: reemplaza el teléfono y el correo de ejemplo por los reales.
const groups: FooterGroup[] = [
  {
    title: "Empresa",
    links: [
      { name: "Inicio", href: "/" },
      { name: "Nosotros", href: "/sobre-nosotros" },
      { name: "Responsabilidad", href: "/responsabilidad" },
    ],
  },
  {
    title: "Servicios",
    links: [
      {
        name: "Compra y venta de minerales",
        href: "/nuestros-servicios#compra-venta-de-minerales",
      },
      {
        name: "Acopio de minerales",
        href: "/nuestros-servicios#acopio-de-minerales",
      },
      {
        name: "Procesamiento de minerales",
        href: "/nuestros-servicios#procesamiento-de-minerales",
      },
    ],
  },
  {
    title: "Recursos",
    links: [
      { name: "Términos y condiciones", href: "/terminos-y-condiciones" },
      { name: "Política de cookies", href: "/politica-de-cookies" },
      { name: "Política de privacidad", href: "/politica-de-privacidad" },
      { name: "Generar reclamo", href: "/reclamos" },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        name: "+51 999 999 999",
        href: "https://wa.me/51999999999",
        icon: ImWhatsapp,
      },
      {
        name: "tuemail@correo.com",
        href: "mailto:tuemail@correo.com",
        icon: MdAlternateEmail,
      },
    ],
  },
];

const linkClass =
  "inline-flex items-center gap-2 rounded-sm py-2 font-body text-sm break-words text-white-warm/75 underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 ease-out hover:text-white-warm hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none";

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);
  const currentYear = new Date().getFullYear();

  
export default function Footer() {


  return (
    <footer className="w-full bg-footer">
      <Cta />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-8">
          {/* Marca */}
          <div className="col-span-2 flex flex-col items-start gap-5 md:col-span-4 lg:col-span-4">
            <Link
              href="/"
              className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Image
                src="/logo-white.svg"
                alt="ARENASUR S.A.C."
                height={450}
                width={450}
                className="h-auto w-36 lg:w-44"
              />
            </Link>
            <p className="max-w-xs font-body text-sm leading-relaxed text-pretty text-white-warm/75">
              Comercialización, acopio y procesamiento de minerales de oro y
              plata en el Perú.
            </p>
          </div>

          {/* Columnas de enlaces */}
          {groups.map(({ title, links }, index) => (
            <nav
              key={title}
              aria-labelledby={`footer-group-${index}`}
              className="lg:col-span-2"
            >
              <h2
                id={`footer-group-${index}`}
                className="mb-3 font-heading text-base font-semibold text-white-warm lg:text-lg"
              >
                {title}
              </h2>

              <ul className="flex flex-col">
                {links.map(({ name, href, icon: Icon }) => {
                  const content = (
                    <>
                      {Icon && (
                        <Icon aria-hidden className="size-4 shrink-0 text-secondary" />
                      )}
                      {name}
                    </>
                  );

                  return (
                    <li key={name}>
                      {isExternal(href) ? (
                        <a
                          href={href}
                          className={linkClass}
                          {...(href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link href={href} className={linkClass}>
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 lg:mt-20">
          <p className="font-body text-sm text-white-warm/60">
            Copyright ©{currentYear} Arena sur S.A.C.
          </p>
        </div>
      </div>
    </footer>
  );
}