"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const nav = navRef.current;

        gsap.fromTo(nav,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300">
            <div className="text-xl font-medium tracking-tight">
                <Link href="/" className="hover:opacity-70 transition-opacity">
                    Alex<span className="text-gray-400">Design</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-foreground transition-colors">Services</a>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-foreground transition-colors">Work</a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-foreground transition-colors">About</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-foreground transition-colors">Contact</a>
            </div>

            <div className="md:hidden">
                {/* Mobile Menu Icon (Placeholder for now) */}
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </div>
        </nav>
    );
}
