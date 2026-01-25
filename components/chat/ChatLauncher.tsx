"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useChat } from "./ChatContext";

export const ChatLauncher = () => {
    const { isOpen, togglePanel } = useChat();

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Pulsing rings for attention */}
            {!isOpen && (
                <>
                    <motion.div
                        className="absolute inset-0 rounded-2xl bg-cyan-500/20 z-0"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-2xl bg-cyan-500/20 z-0"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    />
                </>
            )}

            <motion.button
                onClick={togglePanel}
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d1117] border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                <MessageCircle
                    className={`h-6 w-6 transition-all duration-300 ${isOpen ? "text-white rotate-90" : "text-cyan-400"
                        }`}
                />

                {/* Notification dot */}
                {!isOpen && (
                    <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
                    </span>
                )}
            </motion.button>
        </div>
    );
};
