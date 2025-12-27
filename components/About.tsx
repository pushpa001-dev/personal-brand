"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".skill-item", {
                scrollTrigger: {
                    trigger: ".skills-list",
                    start: "top 85%",
                },
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 px-6 md:px-12 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="about-content text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">About Me</h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        I'm a multidisciplinary designer and full-stack developer based in San Francisco.
                        With over 6 years of experience, I bridge the gap between design and engineering,
                        creating products that are not only visually stunning but also technically robust.
                    </p>
                </div>

                <div className="skills-list grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {["Product Design", "Front-end Dev", "Design Systems", "Animation", "3D Rendering", "Brand Strategy", "React / Next.js", "User Testing"].map((skill, i) => (
                        <div key={i} className="skill-item flex items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-colors">
                            <CheckCircle size={16} className="text-blue-500" />
                            <span className="text-sm font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
