"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleToggle = (newLocale: "en" | "fr") => {
    if (newLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={clsx(
        "relative flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md",
        isPending && "opacity-70 pointer-events-none"
      )}
    >
      <button
        onClick={() => handleToggle("en")}
        className={clsx(
          "relative z-10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300",
          locale === "en" ? "text-white" : "text-white/50 hover:text-white/80"
        )}
      >
        En
      </button>

      <button
        onClick={() => handleToggle("fr")}
        className={clsx(
          "relative z-10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300",
          locale === "fr" ? "text-white" : "text-white/50 hover:text-white/80"
        )}
      >
        Fr
      </button>

      {/* Floating active pill */}
      <motion.div
        className="absolute w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white/20 rounded-full z-0 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        initial={false}
        animate={{
          left: locale === "en" ? "4px" : "calc(50%)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />
    </div>
  );
}