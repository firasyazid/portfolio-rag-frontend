"use client";

import { useState, useCallback, useRef, useEffect, type KeyboardEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { useChat } from "./ChatContext";
import { useTranslations } from "next-intl";

const MAX_TEXTAREA_ROWS = 4;

export const ChatInput = () => {
    const t = useTranslations("ChatWidget");
    const [input, setInput] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { sendMessage, isStreaming } = useChat();

    const resizeTextarea = useCallback(() => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        const lineHeight = 22;
        const maxHeight = lineHeight * MAX_TEXTAREA_ROWS + 12;
        el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    }, []);

    useEffect(() => {
        resizeTextarea();
    }, [input, resizeTextarea]);

    const handleSubmit = useCallback(() => {
        if (!input.trim() || isStreaming) return;
        sendMessage(input);
        setInput("");
        requestAnimationFrame(() => {
            const el = textareaRef.current;
            if (el) {
                el.style.height = "auto";
            }
        });
    }, [input, isStreaming, sendMessage]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
            }
        },
        [handleSubmit]
    );

    const canSend = Boolean(input.trim()) && !isStreaming;

    return (
        <div className="flex items-end gap-2 rounded-xl border border-white/5 bg-[#1c1f26] px-3 py-2 focus-within:border-cyan-500/25 transition-colors">
            <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("input_placeholder")}
                disabled={isStreaming}
                enterKeyHint="send"
                autoComplete="off"
                autoCorrect="on"
                className="max-h-[88px] min-h-[44px] flex-1 resize-none bg-transparent py-2.5 text-base text-white placeholder-zinc-500 focus:outline-none disabled:opacity-50 md:text-sm"
                aria-label={t("input_placeholder")}
            />
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSend}
                className={`mb-0.5 flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl transition-all duration-200 ${
                    canSend
                        ? "bg-cyan-500 text-black hover:bg-cyan-400 active:scale-95"
                        : "bg-transparent text-zinc-600 cursor-not-allowed"
                }`}
                aria-label={isStreaming ? t("thinking_label") : t("send_message")}
            >
                {isStreaming ? (
                    <Loader2 className="h-5 w-5 animate-spin text-cyan-400" aria-hidden="true" />
                ) : (
                    <Send className="h-5 w-5" aria-hidden="true" />
                )}
            </button>
        </div>
    );
};
