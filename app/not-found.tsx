import Link from "next/link";
import Image from "next/image";
import Imagen from "@/public/images/img-404.webp"
import Cta from "@/components/shared/Cta";
export default function NotFound(){
    return(
        <main className="w-full  min-h-screen flex flex-col items-center justify-center">

            <div className="flex flex-col items-center gap-4">

                <Image 
                src={Imagen}
                width={350}
                height={350}
                loading="lazy"
                alt="imagen 404"
                className="w-32 h-auto" />
                
                <h2 className="font-heading font-bold text-black text-8xl ">
                    404
                </h2>
                <p className="font-body text-muted w-full max-w-2xs text-center">
                   Lamentablemente, la página que buscas no existe.
                </p>

                <Link
                href={"/"}
                className="bg-black text-body font-semibold text-white px-5 py-3 rounded-4xl">
                    Regresar al inicio
                </Link>
            </div>
            
        </main>
    )
}