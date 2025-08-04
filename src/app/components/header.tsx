"use client"

import { MainIcon, MainIconMini } from "./icons";
import { Container } from "@bitnation-dev/components"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";


const Header = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    // Función para cerrar el menú
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    if (!mounted) {
        return null // No renderizar nada hasta que el componente esté montado en el cliente
    }

    return (
            <Container className="[&_.container-inside]:max-w-[1800px]  bg-black ">
                <div className="flex justify-between">
                    <Link href="/" className="cursor-pointer hidden md:block" onClick={handleLinkClick}>
                        <MainIcon />
                    </Link>
                    <Link href="/" className="cursor-pointer block md:hidden" onClick={handleLinkClick}>
                        <MainIconMini />
                    </Link>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 4a1 1 0 100 2h14a1 1 0 100-2H5z" clipRule="evenodd" />
                            )}
                        </svg>
                    </button>

                    <div className={`
                    text-md
                    md:flex md:space-x-4 
                    absolute md:relative top-16 md:top-0 
                    right-0 md:right-auto 
                    w-28 md:w-auto 
                    bg-black md:bg-transparent
                    ${mounted && isMenuOpen ? 'flex' : 'hidden'}
                    flex-col md:flex-row
                    md:items-center
                    py-4
                    px-4 md:px-0
                    md:py-0
                    space-y-4 md:space-y-0 z-50
                `}>
                        <Link href="/" onClick={handleLinkClick} className={`font-bold ${pathname === "/" ? "text-[#D60B41]" : ""}`}>Home</Link>
                        <Link href="/servicios" onClick={handleLinkClick} className={`font-bold ${pathname === "/servicios" ? "text-[#D60B41]" : ""}`}>Servicios</Link>
                        <Link href="/portafolio" onClick={handleLinkClick} className={`font-bold ${pathname === "/portafolio" ? "text-[#D60B41]" : ""}`}>Portafolio</Link>
                        <Link href="/contactos" onClick={handleLinkClick} className={`font-bold ${pathname === "/contactos" ? "text-[#D60B41]" : ""}`}>Contactos</Link>
                        <Link href="/blogs" onClick={handleLinkClick} className={`font-bold ${pathname === "/blogs" ? "text-[#D60B41]" : ""}`}>Blogs</Link>
                    </div>
                </div>
            </Container>
    )
}

export default Header;