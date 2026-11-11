"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";

interface LinksMenu{
    id:number,
    href:string,
    name:string,
}
const Menu:LinksMenu[]=[
    {id:1, href:"/", name:"Inicio"},
    {id:2, href:"/servicios", name:"Servicios"},
    {id:3, href:"/nosotros", name:"Nosotros"},
    {id:4, href:"/responsabilidad", name:"Responsabilidad"},
    {id:5, href:"/contacto", name:"contacto"},
]


export default function NavbarMovile(){
    const [isOpenMenu, setOpenMenu] =useState(false);
    const pathname = usePathname();


    useEffect(() => {

        setOpenMenu(false);

    }, [pathname]);

    useEffect(()=>{
        document.body.style.overflow = isOpenMenu ? "hidden" : "";
        return () => {document.body.style.overflow = "";};
    }, [isOpenMenu])

    return(
        <div className="w-full  lg:hidden fixed  px-3 py-5 z-50">
            <nav className="w-full flex flex-row items-center justify-between">
                <Link href={"/"}>
                    <Image
                    src="/logo-white-color.svg"
                    alt="logo"
                    width={160}
                    height={40}
                    className="w-24 h-auto"/>
                </Link>
                <button
                    type="button"
                    aria-label="boton"
                    onClick={()=>setOpenMenu(!isOpenMenu)}
                    className="p-2 rounded-4xl border-2 border-white">
                        {isOpenMenu 
                        ? <IoCloseSharp className="size-5 text-white"/>  
                        : <HiOutlineMenu  className="size-5 text-white"/>}
                </button>

                <div className={`absolute top-full left-0 z-40 w-full max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain transition-all duration-300 ease-in-out
                    ${isOpenMenu ? "translate-y-0 opacity-100 visible" : " -translate-y-full opacity-0 invisible pointer-events-none"} `}>
                           
                        <div className="relative z-30 w-full px-5 py-12 bg-white rounded-4xl shadow-2xl shadow-Primary">
                            <ul className="flex flex-col gap-2 py-7">
                                {Menu.map((nav)=>{
                                    const isActive = pathname === nav.href;
                                    return(
                                        <Link 
                                        key={nav.id}
                                        href={nav.href} 
                                        className={`w-fit py-1.5 border-2 border-transparent ${isActive ?" border-b-accent " :""}`}>
                                            <span className="font-body text-xl">
                                                {nav.name}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </ul>

                            <div className="flex flex-col gap-4 mt-2">
                                <p className="font-heading font-semibold text-xs text-muted uppercase">
                                    Datos de contacto
                                </p>

                                <Link
                                href={"mailto:"}
                                className="font-heading text-sm text-muted flex gap-2 items-center">
                                    <MdAlternateEmail className="text-accent size-4" />
                                    correo@tucorreo.com.pe
                                </Link>

                                <Link
                                href={"#"}
                                className="font-heading text-sm text-muted flex gap-2 items-center">
                                     <ImWhatsapp className="text-accent size-4" />
                                        +51 999 999 999
                                </Link>
                            </div>
                        </div>
                </div>
            </nav>
        </div>
    )
}