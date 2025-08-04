"use client"

import { Container } from "@bitnation-dev/components";
import { usePathname } from "next/navigation";
import { MainIcon, MainIconMini } from "./icons";
import { useEffect, useState } from 'react'
import BitnationWrapper from "@/components/BitnationWrapper";
import Link from "next/link";

const Footer = () => {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    if (pathname === "/portafolio") {
        return null
    }
    return (
        <BitnationWrapper>
            <Container className="bg-black ">
                <div className="col-span-1 flex flex-col items-start">

                    <p className=" text-left">
                        Copyright © 2024 Yerdoza Multi Services<br />
                        All rights reserved
                    </p>
                    <div className="flex lg:justify-center  pt-8">
                        <div className="flex space-x-4">
                            <a href="#" aria-label="YouTube">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="" aria-label="Facebook">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/1234567890" aria-label="WhatsApp">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.115 1.514 5.857L0 24l6.143-1.514A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.063c-1.95 0-3.77-.507-5.377-1.39l-.385-.226-3.65.903.97-3.548-.25-.396A10.06 10.06 0 0 1 1.938 12c0-5.573 4.52-10.063 10.062-10.063 5.573 0 10.063 4.52 10.063 10.063 0 5.573-4.52 10.063-10.063 10.063zm5.48-7.548c-.075-.125-.275-.2-.575-.35-.3-.15-1.775-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.275-.475-2.425-1.5-.9-.8-1.5-1.775-1.675-2.075-.175-.3-.025-.45.125-.6.125-.125.275-.325.425-.5.15-.175.2-.275.3-.45.1-.175.05-.325-.025-.475-.075-.15-.675-1.625-.925-2.225-.225-.55-.45-.475-.625-.475-.175 0-.375-.025-.575-.025s-.475.075-.725.35c-.25.275-.95.925-.95 2.25 0 1.325.975 2.6 1.1 2.775.125.175 1.925 2.95 4.675 4.125.65.275 1.15.425 1.55.55.65.2 1.25.175 1.725.1.525-.075 1.775-.725 2.025-1.425.25-.7.25-1.3.175-1.425z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/yerdozabylp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="flex w-full items-end justify-end hidden md:block ">
                    <Link href="/" className="pb-4 cursor-pointer flex justify-end">
                        <MainIcon />
                    </Link>
                </div>
                <div className="flex justify-end block md:hidden ">
                    <Link href="/" className="pb-4 cursor-pointer justify-center md:justify-end block md:hidden ">
                        <MainIconMini />
                    </Link>
                </div>
            </Container>
        </BitnationWrapper>
    )
};

export default Footer;