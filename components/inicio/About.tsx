import Image from "next/image"
import Link from "next/link";

import { IconType } from "react-icons"
import { PiScales } from "react-icons/pi";
import { LuOrbit } from "react-icons/lu";
import { RiGeminiLine } from "react-icons/ri";
interface ValoresTypes{
    id:number,
    icon:IconType,
    title:string,
    description:string,
}

const valoresContent:ValoresTypes[]=[
    {id:1, icon:PiScales , title:"Integridad", description:"Actuamos con honestidad y transparencia en nuestras relaciones comerciales."},
    {id:2, icon:LuOrbit , title:"Responsabilidad", description:"Asumimos con compromiso cada operación, procurando actuar de manera responsable en nuestras actividades."},
    {id:3, icon:RiGeminiLine , title:"Confianza", description:"Construimos relaciones comerciales sólidas mediante el respeto, la comunicación y el cumplimiento de nuestros acuerdos."},
]
export default function About(){
    return(
        <section className="w-full bg-white-warm rounded-b-4xl">
            <div className="max-w-7xl mx-auto px-3 py-28 flex flex-col gap-16 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full bg-sand px-5 py-7 rounded-4xl flex flex-col gap-4 border-2 border-primary outline-2">
                        <span className="w-fit px-4 py-2 rounded-4xl font-heading uppercase tracking-widest text-white text-xs font-semibold bg-black">
                            SOBRE ARENA SUR SAC
                        </span>
                        <h2 className="font-heading text-4xl lg:text-5xl text-primary mb-5 font-extrabold mt-2">
                            Comprometidos con la comercialización de <span className="italic text-black">minerales.</span>
                        </h2>
                        <p className="font-body text-base lg:text-xl mb-4">
                            En ARENASUR S.A.C. desarrollamos actividades relacionadas con la comercialización de minerales auríferos y argentíferos en el Perú.
                        </p>
                        <p className="font-body text-base lg:text-xl mb-4">
                            Nuestra operación comprende la compra y venta, el acopio y el procesamiento de minerales de oro y plata. Trabajamos con una visión orientada al crecimiento y al desarrollo de nuevas oportunidades comerciales dentro del sector minero.
                        </p>

                        <Link
                        href={"/sobre-nosotros"}
                        className="w-fit px-6 py-3 rounded-4xl bg-white font-body font-semibold text-sm text-black border-2 border-black transition-colors hover:bg-secondary  duration-300 ease-in-out">
                            Conócemos
                        </Link>
                    </div>

                    <div className="relative overflow-hidden w-full flex flex-col items-center justify-center p-5 rounded-4xl">
                        <Image
                        src={"/images/img-about.webp"}
                        alt="imagen sobre-nosotros"
                        width={450}
                        height={450}
                        className="w-full h-auto rounded-4xl relative z-30"/>
                        <p className="font-heading italic text-primary text-lg font-light text-center mt-1.5">
                           "Cada acuerdo debe generar valor para ambas partes."
                        </p>
                    </div>
                </div>
                
            
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                   {valoresContent.map((e)=>{
                    const Icon = e.icon;
                    
                    return(
                        <article key={e.id}
                        className="w-full border-t border-border  py-5">
                            <Icon className="size-5 text-primary mb-2" />
                            <h3 className="font-heading text-xs text-primary  font-bold tracking-widest uppercase mb-2">
                                {e.title}
                            </h3>
                            <p className="font-body text-sm">
                                {e.description}
                            </p>
                        </article>
                    )
                   })}
                </div>
            </div>
        </section>
    )
}