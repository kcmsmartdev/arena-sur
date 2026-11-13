"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";


const iconMenuStyle = "size-6 text-white"

export default function NavbarMovile(){
    const [isOpenMenu, setOpenMenu] =useState(false);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        setOpenMenu(false);

    }, [pathname]);

    useEffect(()=>{
        document.body.style.overflow = isOpenMenu ? "hidden" : "";
        return () => {document.body.style.overflow = "";};
    }, [isOpenMenu])

    useEffect(()=>{
        
        const handleScroll=()=>{
            setScrolled(scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll,{passive:true})

        return window.addEventListener("scroll", handleScroll)
    },[])

    return(
        <div className={`fixed top-0 left-0 z-50 w-full lg:hidden bg-black`}>

            <nav className={`relative z-50 w-full flex flex-row justify-between items-center p-3`}>
                <Link href="/" aria-label="Inicio" onClick={() => setOpenMenu(false)}>
                <Image
                    src="/logo-white-color.svg"
                    width={160}
                    height={40}
                    alt="logo"
                    className="w-20 h-auto"
                />
                </Link>

                <button
                type="button"
                onClick={() => setOpenMenu(!isOpenMenu)}
                aria-label={isOpenMenu ? "Cerrar menú" : "Abrir menú"}
                className="p-1.5 border-2 border-white rounded-4xl"
                >
                {isOpenMenu ? (
                    <IoCloseSharp className={iconMenuStyle} />
                ) : (
                    <HiOutlineMenu className={iconMenuStyle} />
                )}
                </button>
            </nav>


            <div
                className={`absolute top-full left-0 w-full h-[calc(100dvh-100%)] transition-all duration-300 ease-in-out ${
                isOpenMenu
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}>
                
                <div
                onClick={() => setOpenMenu(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs"
                />

                
                <div className="relative z-10 mx-5 mt-2 p-6 bg-white rounded-2xl shadow-xl">
                <ul className="flex flex-col gap-5 text-lg font-medium text-black">
                    <li>
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                        Inicio
                    </Link>
                    </li>
                    
                    <li>
                    <Link href="/servicios" onClick={() => setOpenMenu(false)}>
                        Servicios
                    </Link>
                    </li>
                    <li>
                    <Link href="/responsabilidad" onClick={() => setOpenMenu(false)}>
                        Responsabilidad
                    </Link>
                    </li>
                    <li>
                    <Link href="/sobre-nosotros" onClick={() => setOpenMenu(false)}>
                        Nosotros
                    </Link>
                    </li>

                    <li>
                    <Link href="/contacto" onClick={() => setOpenMenu(false)}>
                        Contacto
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>

    )
}