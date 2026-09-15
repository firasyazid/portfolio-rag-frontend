"use client";

import { useState } from "react";
import { X, Trash2 } from "lucide-react";
import { AssistantAvatarIcon } from "./AssistantAvatarIcon";
import { useChat } from "./ChatContext";
import { ClearConversationModal } from "./ClearConversationModal";
import { useTranslations } from "next-intl";

export const ChatHeader = () => {
    const t = useTranslations("ChatWidget");
    const { closePanel, clearConversation, messages, isStreaming } = useChat();
    const [showClearModal, setShowClearModal] = useState(false);

    const handleClearClick = () => {
        if (isStreaming) return;
        setShowClearModal(true);
    };

    const handleConfirmClear = () => {
        clearConversation();
        setShowClearModal(false);
    };

    return (
        <>
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/5 bg-[#0d1117] px-4 py-3 md:px-5 md:py-4">
                <div className="flex min-w-0 items-center gap-2.5 md:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 md:h-8 md:w-8">
                        <AssistantAvatarIcon size="sm" />
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="truncate text-sm font-semibold tracking-tight text-white">
                                {t("header_title")}
                            </span>
                            <span className="hidden shrink-0 rounded-full border border-white/5 bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-400 sm:inline">
                                {t("welcome_assistant")}
                            </span>
                        </div>
                        {isStreaming && (
                            <p className="truncate text-[11px] text-cyan-500/80">{t("thinking_label")}</p>
                        )}
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-0.5">
                    {messages.length > 0 && (
                        <button
                            type="button"
                            onClick={handleClearClick}
                            disabled={isStreaming}
                            className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-red-500/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-zinc-500 md:h-9 md:w-9"
                            title={t("clear_conversation")}
                            aria-label={t("clear_conversation")}
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={closePanel}
                        className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/5 hover:text-white md:h-9 md:w-9"
                        title={t("close_chat")}
                        aria-label={t("close_chat")}
                    >
                        <X className="h-5 w-5 md:h-4 md:w-4" />
                    </button>
                </div>
            </div>

            <ClearConversationModal
                isOpen={showClearModal}
                onClose={() => setShowClearModal(false)}
                onConfirm={handleConfirmClear}
            />
        </>
    );
};
