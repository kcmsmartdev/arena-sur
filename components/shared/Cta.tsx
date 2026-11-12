import Link from "next/link"

import BgCta from "@/public/images/bg-cta.svg"

export default function Cta(){
    return(
        
<div className="bg-footer p-5 rounded-t-4xl">

 
    <div
        style={{ backgroundImage: `url(${BgCta.src})` }}
        className="relative min-h-105 rounded-4xl bg-cover bg-center bg-no-repeat flex items-center ">


        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-16 flex flex-col items-start gap-12">

            <h2 className="font-heading text-white uppercase font-bold text-3xl md:text-4xl lg:text-6xl">
                ¿Listo para encontrar nuevas oportunidades comerciales?
            </h2>

            <Link
                href="/contacto"
                className="group flex items-center gap-5 bg-white text-black
                px-6 py-3 rounded-4xl font-body text-sm font-semibold hover:bg-accent   
                transition-all duration-300">
                Hablemos ahora

                
            </Link>

        </div>
    </div>
</div>

    )
}