"use client";

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [showCVMenu, setShowCVMenu] = useState(false);

    return (
        <footer className="relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    {/* Logo & Quote */}
                    <div className="flex flex-col gap-4 max-w-md">
                        <div className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={500}
                                height={300}
                                className="h-28 w-auto"
                                priority
                                quality={100}
                            />
                        </div>
                        <p className="text-white/60 text-sm md:text-base font-light italic">
                            How can learning stop, when technology never does?
                        </p>
                    </div>

                    {/* Social Links & CV */}
                    <div className="flex items-center gap-4">
                        {/* GitHub */}
                        <a
                            href="https://github.com/firasyazid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors"
                            title="GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/firas-yazid-32a499222/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors"
                            title="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                            </svg>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:firasyazid4@gmail.com"
                            className="text-white/60 hover:text-white transition-colors"
                            title="Email"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+21655752423"
                            className="text-white/60 hover:text-white transition-colors"
                            title="Phone"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </a>

                        {/* CV Button with Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowCVMenu(!showCVMenu)}
                                className="px-4 py-2 md:px-6 md:py-2.5 bg-zinc-800/50 backdrop-blur-sm text-white rounded-full hover:bg-zinc-700/60 transition-all duration-300 text-sm font-medium border border-zinc-700/50 hover:border-zinc-600 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                CV
                            </button>

                            {showCVMenu && (
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-40 bg-zinc-900/95 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                                    <a
                                        href="/FirasYazid-en.pdf"
                                        download
                                        className="block px-6 py-3 text-white hover:bg-white/10 transition-colors text-sm"
                                        onClick={() => setShowCVMenu(false)}
                                    >
                                        English
                                    </a>
                                    <a
                                        href="/FirasYazid-Fr.pdf"
                                        download
                                        className="block px-6 py-3 text-white hover:bg-white/10 transition-colors text-sm"
                                        onClick={() => setShowCVMenu(false)}
                                    >
                                        Français
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {/* Email */}
                    <a
                        href="mailto:firasyazid4@gmail.com"
                        className="group flex items-center gap-4 p-4 md:p-5 bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                    >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-white/40 mb-1 tracking-wide uppercase">Email</p>
                            <p className="text-white/80 group-hover:text-white transition-colors text-sm md:text-base truncate">
                                firasyazid4@gmail.com
                            </p>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/21655752423"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 md:p-5 bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                    >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-white/40 mb-1 tracking-wide uppercase">WhatsApp</p>
                            <p className="text-white/80 group-hover:text-white transition-colors text-sm md:text-base">
                                +216 55 752 423
                            </p>
                        </div>
                    </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>
                        Built by{" "}
                        <span className="text-white/60 font-medium">Firas Yazid</span>
                    </p>
                    <p>© {currentYear} All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
