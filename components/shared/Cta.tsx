import Link from "next/link"

import BgCta from "@/public/images/bg-cta.svg"

export default function Cta(){
    return(
        
        <div className="bg-footer p-5 rounded-t-4xl">

            <div className="bg-secondary rounded-4xl">
                <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-16 flex flex-col items-start gap-12">

                    <h2 className="font-body text-black uppercase font-bold text-3xl md:text-4xl lg:text-7xl">
                        ¿Listo para encontrar nuevas oportunidades comerciales?
                    </h2>

                    <Link
                        href="/contacto"
                        className="bg-accent text-black
                        px-6 py-3 rounded-4xl font-body text-sm  hover:bg-white  border-2 border-black  
                        transition-all duration-300">

                        Hablemos ahora
                    </Link>

                </div>
        
            </div>
        </div>

    )
}