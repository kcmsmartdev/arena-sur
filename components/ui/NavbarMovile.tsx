"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

interface MenuLink {
  href: string;
  name: string;
}

// TODO: unifica estas rutas con Navbar (desktop) y el resto del sitio.
// Idealmente vive en un solo archivo compartido por ambos navbars.
const menu: MenuLink[] = [
  { href: "/", name: "Inicio" },
  { href: "/servicios", name: "Servicios" },
  { href: "/responsabilidad", name: "Responsabilidad" },
  { href: "/sobre-nosotros", name: "Nosotros" },
  { href: "/contacto", name: "Contacto" },
];

const isActivePath = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export default function NavbarMobile() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = () => setOpenMenu(false);

  // Cierra al navegar (incluye botón "atrás" del navegador)
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  // Bloquea el scroll del body mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenMenu]);

  // Cierra con Escape y devuelve el foco al botón
  useEffect(() => {
    if (!isOpenMenu) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpenMenu]);

  // Si la pantalla llega a desktop con el menú abierto, ciérralo (y libera el scroll)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpenMenu(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-out motion-reduce:transition-none lg:hidden ${
        // Con el menú abierto no hay blur en el header: un backdrop-filter
        // en el padre anularía el blur del fondo oscuro del menú.
        scrolled && !isOpenMenu
          ? "border-white/10 bg-footer/90 backdrop-blur-md"
          : "border-transparent bg-footer"
      }`}
    >
      <div className="relative z-50 flex items-center justify-between px-5 py-3">
        <Link
          href="/"
          onClick={close}
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

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpenMenu((open) => !open)}
          aria-label={isOpenMenu ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpenMenu}
          aria-controls="mobile-menu"
          className="grid size-11 place-items-center rounded-4xl border-2 border-white-warm text-white-warm transition-transform duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-95 motion-reduce:transition-none"
        >
          {isOpenMenu ? (
            <IoCloseSharp aria-hidden className="size-6" />
          ) : (
            <HiOutlineMenu aria-hidden className="size-6" />
          )}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full h-[calc(100dvh-100%)] transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
          isOpenMenu
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <div
          aria-hidden
          onClick={close}
          className="absolute inset-0 bg-footer/70 backdrop-blur-xs"
        />

        <nav
          id="mobile-menu"
          aria-label="Principal"
          className="relative mx-5 mt-2 rounded-3xl bg-white-warm p-3"
        >
          <ul className="flex flex-col">
            {menu.map(({ href, name }) => {
              const active = isActivePath(pathname, href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3.5 font-body text-xl font-semibold transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary active:bg-sand motion-reduce:transition-none ${
                      active ? "bg-sand text-primary" : "text-dark"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}