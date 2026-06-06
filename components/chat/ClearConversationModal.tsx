"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface ClearConversationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const ClearConversationModal = ({
    isOpen,
    onClose,
    onConfirm,
}: ClearConversationModalProps) => {
    const t = useTranslations("ChatWidget");

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        },
        [isOpen, onClose]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <motion.button
                        type="button"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                        aria-label={t("clear_cancel")}
                    />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="clear-conversation-title"
                        initial={{ opacity: 0, scale: 0.95, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 12 }}
                        transition={{ type: "spring", damping: 26, stiffness: 320 }}
                        className="relative w-full max-w-sm bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                    >
                        {/* macOS title bar */}
                        <div className="bg-zinc-800/80 border-b border-zinc-700/50 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                                    aria-label={t("clear_cancel")}
                                />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex-1 text-center pr-14">
                                <span
                                    id="clear-conversation-title"
                                    className="text-sm text-white/60 font-medium"
                                >
                                    {t("clear_confirm_title")}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                                    <Trash2 className="h-5 w-5 text-red-400" />
                                </div>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {t("clear_confirm_message")}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 px-4 py-2.5 bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-colors"
                                >
                                    {t("clear_cancel")}
                                </button>
                                <button
                                    type="button"
                                    onClick={onConfirm}
                                    className="flex-1 px-4 py-2.5 bg-red-500/15 border border-red-500/40 text-red-300 text-sm font-medium rounded-lg hover:bg-red-500/25 hover:border-red-500/60 hover:text-red-200 transition-colors"
                                >
                                    {t("clear_confirm_action")}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
