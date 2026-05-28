"use client";

import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjusted for new premium navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#0d1117]/30 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2" 
            : "bg-transparent py-4"
        } px-6 md:px-12 flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={500}
            height={300}
            className="h-14 md:h-20 w-auto cursor-pointer object-contain"
            priority
            quality={100}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
          >
            {t('projects')}
          </button>
          <button
            onClick={() => scrollToSection('ai-clone')}
            className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
          >
            {t('aiClone')}
          </button>

          <div className="h-4 w-px bg-white/20 mx-2"></div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/firasyazid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all hover:scale-110"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/firas-yazid-32a499222/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#0a66c2] transition-all hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Always visible on the right: Language Switcher + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/80 hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-white/5 border border-white/10 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0d1117]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-2xl font-semibold text-white/80 hover:text-cyan-400 text-left border-b border-white/5 pb-4 transition-colors"
              >
                {t('projects')}
              </button>
              <button
                onClick={() => scrollToSection('ai-clone')}
                className="text-2xl font-semibold text-white/80 hover:text-cyan-400 text-left border-b border-white/5 pb-4 transition-colors"
              >
                {t('aiClone')}
              </button>

              <div className="flex items-center gap-6 mt-8">
                <a
                  href="https://github.com/firasyazid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/firas-yazid-32a499222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-white hover:text-[#0a66c2] hover:border-[#0a66c2]/30 transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
