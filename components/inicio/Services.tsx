import Link from "next/link"

interface Services {
    id:number,
    title:string,
    description:string,
    buttonName:string,
    href:string,
}
export default function Services(){
     
    return(
        <section className="w-full">
            <div className="max-w-7xl mx-auto px-3 py-20 flex flex-col items-center gap-4">
                <span className="font-heading uppercase tracking-widest text-primary text-xs font-semibold">
                    NUESTROS SERVICIOS
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl text-black max-w-3xl text-center font-bold">
                    Soluciones para la comercialización de <span className="text-secondary italic">minerales</span>
                </h2>
                <p className="font-body text-base text-center md:text-lg lg:text-2xl">
                    Trabajamos con compromiso y transparencia en cada etapa de nuestras operaciones.
                </p>
            </div>

            <div>

            
            </div>
        </section>
    )
}