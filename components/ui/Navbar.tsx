"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLink {
  href: string;
  name: string;
}

// TODO: unifica estas rutas con las del resto del sitio
// (Hero y Services usan /nuestros-servicios, About usa /sobre-nosotros)
const menu: MenuLink[] = [
  { href: "/", name: "Inicio" },
  { href: "/servicios", name: "Servicios" },
  { href: "/responsabilidad", name: "Responsabilidad" },
  { href: "/nosotros", name: "Nosotros" },
  { href: "/contacto", name: "Contacto" },
];

const isActivePath = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 hidden border-b transition-colors duration-300 ease-out motion-reduce:transition-none lg:block ${
        scrolled
          ? "border-white/10 bg-footer/90 backdrop-blur-md"
          : "border-transparent bg-footer"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-3"
      >
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Image
            src="/logo-white-color.svg"
            width={160}
            height={40}
            alt="ARENASUR S.A.C."
            priority
            className="h-auto w-20"
          />
        </Link>

        <ul className="flex items-center gap-10">
          {menu.map(({ href, name }) => {
            const active = isActivePath(pathname, href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block rounded-sm px-1 py-2 font-body text-sm font-semibold transition-colors duration-200 ease-out after:absolute after:inset-x-1 after:bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-200 after:ease-out hover:text-white-warm hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:after:transition-none ${
                    active
                      ? "text-white-warm after:scale-x-100"
                      : "text-white-warm/75 after:scale-x-0"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}