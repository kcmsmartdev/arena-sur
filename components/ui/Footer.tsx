import Image from "next/image"
import Link from "next/link"


const classLink = "font-body text-white text-sm hover:text-muted transition-colors duration-300 ease-in-out"

const currentYears= new Date().getFullYear()

export default function Footer(){
    return(
        <footer className="w-full bg-footer">
            <div className="w-full max-w-7xl mx-auto px-3  py-16 rounded-t-4xl flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
                    <div>
                        <Image 
                        src="/logo-white.svg"
                        alt="logo footer"
                        height={450}
                        width={450}
                        className="w-32 lg:w-40 h-auto"/>
                    </div>
                    
                    <div>
                        <h2 className="font-heading text-secondary text-base md:text-lg mb-5">
                            Agencia
                        </h2>

                        <ul className="flex flex-col gap-3">
                            <Link href={"/"}
                            className={classLink}>
                                Inicio
                            </Link>

                            <Link href={"/sobre-nosotros"}
                            className={classLink}>
                                Nosotros
                            </Link>

                            <Link href={"/responsabilidad"}
                            className={classLink}>
                                Responsabilidad
                            </Link>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="font-heading text-secondary text-base md:text-lg mb-5">
                            Servicios
                        </h2>

                        <ul className="flex flex-col gap-3">
                            <Link href={"/"}
                            className={classLink}>
                                Compra y venta de minerales
                            </Link>

                            <Link href={"/sobre-nosotros"}
                            className={classLink}>
                                Acopio de minerales
                            </Link>

                            <Link href={"/responsabilidad"}
                            className={classLink}>
                                Procesamiento de minerales
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-secondary text-base md:text-lg mb-5">
                            Recursos
                        </h2>

                        <ul className="flex flex-col gap-3">
                            <Link href={"/"}
                            className={classLink}>
                               Términos y condiciones
                            </Link>

                            <Link href={"/sobre-nosotros"}
                            className={classLink}>
                                Política Cookies
                            </Link>

                            <Link href={"/responsabilidad"}
                            className={classLink}>
                               Política de privacidad
                            </Link>
                            <Link href={"/responsabilidad"}
                            className={classLink}>
                               Generear Reclamo
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-secondary text-base md:text-lg mb-5">
                            Contacto
                        </h2>

                        <ul className="flex flex-col gap-3">
                            <Link href={"/"}
                            className={classLink}>
                               +51 999 999 999
                            </Link>

                            <Link href={"/sobre-nosotros"}
                            className={classLink}>
                                tuemail@correo.com
                            </Link>

                           
                        </ul>
                    </div>
                </div>

                
            </div>
            <div className="py-12">
                <p className="font-heading text-sm text-muted text-center">Copyright ©{currentYears} Arena sur S.A.C.</p>
            </div>
        </footer>
    )
}