"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useChat } from "./ChatContext";

export const ChatLauncher = () => {
    const { isOpen, togglePanel } = useChat();

    if (isOpen) {
        return null;
    }

    return (
        <div className="fixed z-50 right-4 bottom-4 chat-safe-bottom md:right-6 md:bottom-6">
            <motion.div
                className="absolute inset-0 rounded-2xl bg-cyan-500/20 z-0 motion-safe-only"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                aria-hidden="true"
            />
            <motion.div
                className="absolute inset-0 rounded-2xl bg-cyan-500/20 z-0 motion-safe-only"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                aria-hidden="true"
            />

            <motion.button
                type="button"
                onClick={togglePanel}
                className="relative z-10 flex h-14 w-14 touch-manipulation items-center justify-center rounded-2xl bg-[#0d1117] border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/40 transition-colors duration-300 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open chat"
            >
                <MessageCircle className="h-6 w-6 text-cyan-400" />

                <span className="absolute top-3 right-3 flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75 motion-safe-only" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
                </span>
            </motion.button>
        </div>
    );
};
