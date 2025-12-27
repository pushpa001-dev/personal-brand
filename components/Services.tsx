"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Smartphone, Code, Globe, Palette, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Layout size={32} />,
        title: "UI/UX Design",
        description: "Creating intuitive and user-centered interfaces that solve real problems with elegance."
    },
    {
        icon: <Code size={32} />,
        title: "Development",
        description: "Clean, efficient, and scalable code using modern technologies like React and Next.js."
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile First",
        description: "Responsive designs that feel native on every device, ensuring a seamless experience."
    },
    {
        icon: <Globe size={32} />,
        title: "Web Performance",
        description: "Optimizing for speed and accessibility to ensure the best possible user reach."
    },
    {
        icon: <Palette size={32} />,
        title: "Brand Identity",
        description: "Crafting cohesive visual systems that tell your unique story through color and type."
    },
    {
        icon: <Sparkles size={32} />,
        title: "Motion Design",
        description: "Adding life to interfaces with subtle micro-interactions and smooth animations."
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const icon = card.querySelector(".service-icon");

        gsap.to(card, {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(229, 231, 235, 1)", // gray-200
            duration: 0.4,
            ease: "power2.out"
        });

        if (icon) {
            gsap.to(icon, {
                scale: 1.15,
                rotate: 5,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const icon = card.querySelector(".service-icon");

        gsap.to(card, {
            y: 0,
            boxShadow: "none",
            borderColor: "transparent",
            duration: 0.4,
            ease: "power2.out"
        });

        if (icon) {
            gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    };

    return (
        <section id="services" ref={sectionRef} className="py-24 px-6 md:px-12 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">My Expertise</h2>
                    <p className="text-gray-500 text-lg max-w-xl">
                        A blend of technical prowess and creative vision to bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-transparent transition-colors"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="service-icon mb-6 p-4 w-fit rounded-2xl bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
