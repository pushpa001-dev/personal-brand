"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-anim", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#050505]">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="contact-anim text-4xl md:text-5xl font-semibold tracking-tight">Let's work together.</h2>
                        <p className="contact-anim text-lg text-gray-500 leading-relaxed max-w-sm">
                            Have a project in mind? I'm always open to discussing new ideas and opportunities.
                        </p>

                        <div className="contact-anim space-y-6 pt-4">
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                                    <Mail size={18} />
                                </div>
                                <span>hello@alexdesign.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                                    <Phone size={18} />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                                    <MapPin size={18} />
                                </div>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-anim space-y-6 bg-white dark:bg-white/5 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                            <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400" placeholder="name@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="button" className="w-full py-4 bg-foreground text-background rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
