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
        document.addEventListener("keydown", handleKeyDown as unknown as EventListener);
        return () =>
            document.removeEventListener("keydown", handleKeyDown as unknown as EventListener);
    }, [handleKeyDown]);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:bg-black/20 md:backdrop-blur-[2px]"
                        onClick={closePanel}
                        aria-hidden="true"
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Chat"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 28, stiffness: 320 }}
                        className="fixed z-[60] flex flex-col
                            inset-x-0 bottom-0 top-0 h-[100dvh] w-full max-h-[100dvh]
                            md:inset-auto md:right-4 md:bottom-4 md:top-auto md:left-auto
                            md:h-[min(600px,calc(100dvh-2rem))] md:w-[min(400px,calc(100vw-2rem))]"
                    >
                        <div className="flex h-full min-h-0 flex-col bg-[#0d1117] md:border md:border-white/10 md:shadow-2xl md:shadow-black md:rounded-2xl overflow-hidden chat-safe-top">
                            <div
                                className="mx-auto mt-2 mb-1 h-1 w-10 shrink-0 rounded-full bg-white/15 md:hidden"
                                aria-hidden="true"
                            />
                            <ChatHeader />
                            <ChatMessages />
                            <div className="shrink-0 border-t border-white/5 bg-[#0d1117] px-3 py-3 chat-safe-bottom md:px-4">
                                <ChatInput />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
