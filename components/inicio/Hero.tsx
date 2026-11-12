import WaveBackground from "./WaveBackground ";
import Link from "next/link";
import ImageBG from "@/public/images/bg-hero.webp"
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden w-full min-h-screen">

            <WaveBackground />

            <div
                style={{ backgroundImage: `url(${ImageBG.src})` }}
                className="absolute inset-0 z-10 bg-cover bg-center"
            />

            <div className="relative z-30 px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center">
                <h1 className="font-heading font-bold text-4xl lg:text-7xl tracking-tight text-primary w-full max-w-4xl mb-4">
                    Comercializadora de <span className="text-secondary italic"><strong>minerales</strong></span> en Perú.
                </h1>

                <p className="font-body text-sm md:text-base text-muted w-full max-w-3xl">
                    En ARENASUR S.A.C. nos dedicamos a la comercialización, acopio y procesamiento de minerales de oro y plata, construyendo relaciones comerciales basadas en la confianza y transparencia.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-10">
                    <Link
                        href="/nuestros-servicios"
                        className="bg-accent text-black px-6 py-3 rounded-4xl relative overflow-hidden group flex gap-2 items-center border-2 border-black transition-transform duration-300 ease-in-out">
                        <span className="font-body text-sm">
                            Conoce nuestros servicios
                        </span>
                        <VscDebugBreakpointLog 
                        className="size-5 group-hover:scale-150  transition-transform duration-300 ease-in-out"/>
                    </Link>

                    <Link
                        href="/nuestros-servicios"
                        className="bg-muted text-white px-6 py-3 rounded-4xl border-2 border-black relative overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                        <span className="font-body text-sm font-medium">
                            Contáctanos
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}