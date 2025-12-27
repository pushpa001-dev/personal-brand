"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Fintech Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "E-commerce App",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "AI Startup Landing",
        category: "Development",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
        title: "Health Tracker",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-row", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Selected Works</h2>
                        <p className="text-gray-500 text-lg">Case studies and experiments.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity mt-4 md:mt-0">
                        View All Projects <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="space-y-12 md:space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-row flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-20 items-center`}
                        >
                            <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-none group cursor-pointer relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight cursor-pointer hover:opacity-70 transition-opacity">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed max-w-md">
                                    A comprehensive solution designed to solve complex user problems while maintaining rigorous aesthetic standards.
                                </p>
                                <button className="flex items-center gap-2 text-sm font-medium mt-4 group">
                                    View Case Study
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden mt-12 flex justify-center">
                    <a href="#" className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
                        View All Projects <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
