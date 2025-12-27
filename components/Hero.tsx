"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(".hero-text-line",
                { y: 100, opacity: 0, rotateX: -20 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15 }
            )
                .fromTo(".hero-subtext",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.6"
                )
                .fromTo(".hero-cta",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.8"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20">

            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div ref={textRef} className="max-w-4xl mx-auto space-y-8 perspective-1000">
                <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-tight text-balance">
                    <div className="overflow-hidden">
                        <span className="block hero-text-line">Designing Interfaces</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="block hero-text-line text-gray-400">That Feel Alive.</span>
                    </div>
                </h1>

                <p className="hero-subtext text-lg md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Crafting pixel-perfect digital experiences with a focus on motion, aesthetics, and user-centric design.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <a href="#projects" className="px-8 py-3.5 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform duration-300">
                        View Work
                    </a>
                    <a href="#contact" className="px-8 py-3.5 border border-gray-200 dark:border-gray-800 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300">
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce text-gray-400 opacity-50">
                <ArrowDown size={24} />
            </div>
        </section>
    );
}
