"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { useChat } from "./ChatContext";
import { useTranslations } from "next-intl";

export const AskSection = () => {
    const t = useTranslations("AskSection");
    const [input, setInput] = useState("");
    const { sendMessage, isStreaming } = useChat();

    const handleSubmit = useCallback(() => {
        if (!input.trim() || isStreaming) return;
        sendMessage(input);
        setInput("");
    }, [input, isStreaming, sendMessage]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
            }
        },
        [handleSubmit]
    );

    const canSend = Boolean(input.trim()) && !isStreaming;

    return (
        <section className="relative z-10 px-4 py-16 md:px-6 md:py-24" id="ai-clone">
            <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[min(500px,80vw)] w-[min(500px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
            </div>

            <div className="mx-auto max-w-4xl space-y-8 text-center">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl">
                        {t("title")}
                    </h2>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                        {t("description")}
                    </p>
                </div>

                <div className="mx-auto max-w-xl">
                    <div className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/80 px-3 py-2 shadow-2xl backdrop-blur-md transition-all duration-300 focus-within:border-cyan-500/50 focus-within:shadow-cyan-500/20 hover:border-cyan-500/30 hover:shadow-cyan-500/10 sm:gap-3 sm:px-4 sm:py-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={t("placeholder")}
                            disabled={isStreaming}
                            enterKeyHint="send"
                            className="min-h-[44px] flex-1 bg-transparent text-base text-white placeholder-zinc-500 focus:outline-none disabled:opacity-50"
                        />
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={!canSend}
                            className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
                            aria-label={isStreaming ? "Sending" : "Send message"}
                        >
                            {isStreaming ? (
                                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                            ) : (
                                <Send className="h-5 w-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
