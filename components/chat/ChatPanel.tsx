"use client";

import { useEffect, useCallback, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "./ChatContext";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

export const ChatPanel = () => {
    const { isOpen, closePanel } = useChat();

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                closePanel();
            }
        },
        [isOpen, closePanel]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown as any);
        return () => document.removeEventListener("keydown", handleKeyDown as any);
    }, [handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
                        onClick={closePanel}
                    />
                    <motion.div
                        initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: "100%", opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed z-[60] flex flex-col 
                            inset-0 w-full h-full 
                            md:inset-auto md:right-4 md:bottom-4 md:top-auto md:h-[600px] md:max-h-[calc(100vh-2rem)] md:w-[400px]"
                    >
                        <div className="flex h-full flex-col bg-[#0d1117] md:border md:border-white/10 md:shadow-2xl md:shadow-black md:rounded-2xl overflow-hidden">
                            <ChatHeader />
                            <ChatMessages />
                            <div className="p-4 bg-[#0d1117] border-t border-white/5 pb-8 md:pb-4">
                                <ChatInput />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
