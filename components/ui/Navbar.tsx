"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


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
export default function Navbar(){
    const pathname = usePathname();
    const[scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        
        const handleScroll =()=>{
            setScrolled(window.scrollY >50)
        }

        window.addEventListener("scroll", handleScroll, {passive:true});
        return window.addEventListener("Scroll", handleScroll);
    },[])

    return(
        <header className="fixed z-50 w-full hidden lg:block  p-3">
            <nav className={`w-full max-w-7xl flex flex-row justify-between items-center mx-auto rounded-4xl transition-transform duration-300 ease-in-out ${scrolled 
                ? "bg-black/10 shadow-md backdrop-blur-md px-5 py-3" 
                : "bg-transparent"}`}>
                <Link href={"/"} aria-label="Inicio">
                    <Image src={"/logo-white-color.svg"} 
                    width={160} 
                    height={40} 
                    alt="logo"
                    className="w-24 h-auto"/>
                </Link>
                <ul className="flex flex-row gap-12 items-center">
                    {
                        Menu.map((links)=>{
                            const isActive = pathname === links.href;
                            return(
                                <li key={links.id} 
                                className={`py-1.5 border-b-2 border-transparent hover:border-b-2 hover:border-accent transition-all duration-300 ease-in-out ${isActive ? "border-b-accent" :""}`}>
                                    <Link href={links.href} aria-label={links.name}>
                                        <span className="font-body text-sm text-black tracking-wide">
                                            {links.name}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}