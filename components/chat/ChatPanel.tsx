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
                        className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
                        onClick={closePanel}
                    />
                    <motion.div
                        initial={{ y: 20, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed right-4 bottom-4 top-4 z-[60] w-full max-w-[400px] flex flex-col"
                    >
                        <div className="flex h-full flex-col bg-[#0d1117] border border-white/10 shadow-2xl shadow-black rounded-2xl overflow-hidden">
                            <ChatHeader />
                            <ChatMessages />
                            <div className="p-4 bg-[#0d1117] border-t border-white/5">
                                <ChatInput />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
