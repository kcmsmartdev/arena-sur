import Link from "next/link";

export default function Cta() {
  return (
    <section aria-labelledby="cta-title" className="rounded-t-4xl bg-footer">
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 rounded-4xl bg-secondary px-8 py-14 md:px-14 md:py-16 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-16 lg:py-20">
          <h2
            id="cta-title"
            className="max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance text-footer md:text-5xl lg:text-6xl"
          >
            ¿Listo para encontrar nuevas oportunidades comerciales?
          </h2>

          <Link
            href="/contacto"
            className="shrink-0 rounded-4xl border-2 border-footer bg-accent px-8 py-4 font-body text-base font-semibold text-footer transition-[background-color,transform] duration-200 ease-out hover:bg-white-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-footer active:scale-[0.97] motion-reduce:transition-none"
          >
            Hablemos ahora
          </Link>
        </div>
      </div>
    </section>
  );
}