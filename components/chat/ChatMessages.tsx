"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { AssistantAvatarIcon } from "./AssistantAvatarIcon";
import { useChat } from "./ChatContext";
import { ChatMessage } from "./ChatMessage";
import { useTranslations } from "next-intl";

export const ChatMessages = () => {
    const t = useTranslations("ChatWidget");
    const { messages, isStreaming, sendMessage } = useChat();
    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isUserScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const suggestions = t.raw("suggestions") as string[];

    const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
        bottomRef.current?.scrollIntoView({ behavior, block: "end" });
        isUserScrollingRef.current = false;
        setShowScrollDown(false);
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
            const isAtBottom = distanceFromBottom < 80;

            isUserScrollingRef.current = !isAtBottom;
            setShowScrollDown(!isAtBottom && messages.length > 0);

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                if (isAtBottom) {
                    isUserScrollingRef.current = false;
                }
            }, 800);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            container.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [messages.length]);

    useEffect(() => {
        if (!isUserScrollingRef.current) {
            bottomRef.current?.scrollIntoView({
                behavior: isStreaming ? "auto" : "smooth",
                block: "end",
            });
        }
    }, [messages, isStreaming]);

    if (messages.length === 0) {
        return (
            <div className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-4 py-6 md:px-8">
                <div className="space-y-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                        <AssistantAvatarIcon size="lg" />
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 md:text-sm">
                            {t("welcome_assistant")}
                        </p>
                        <h2 className="text-lg font-bold leading-snug text-white md:text-xl">
                            {t("welcome_title")}
                        </h2>
                        <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                            {t("welcome_subtitle")}
                        </p>
                    </div>

                    <div className="space-y-2 pt-2">
                        <p className="text-xs font-medium text-zinc-500">
                            {t("popular_questions_title")}
                        </p>
                        <ul className="flex flex-col gap-2">
                            {suggestions.map((question) => (
                                <li key={question}>
                                    <button
                                        type="button"
                                        disabled={isStreaming}
                                        onClick={() => sendMessage(question)}
                                        className="w-full touch-manipulation rounded-xl border border-white/5 bg-[#1c1f26]/80 px-4 py-3 text-left text-sm text-zinc-300 transition-colors hover:border-cyan-500/30 hover:bg-[#1c1f26] active:scale-[0.99] disabled:opacity-50"
                                    >
                                        {question}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex min-h-0 flex-1 flex-col">
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 space-y-5 scrollbar-thin md:px-4 md:py-6 md:space-y-6"
            >
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={bottomRef} className="h-px shrink-0" aria-hidden="true" />
            </div>

            {showScrollDown && (
                <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center">
                    <button
                        type="button"
                        onClick={() => scrollToBottom("smooth")}
                        className="pointer-events-auto flex touch-manipulation items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/95 px-3 py-2 text-xs font-medium text-zinc-300 shadow-lg backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:text-white"
                    >
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        {t("scroll_to_bottom")}
                    </button>
                </div>
            )}
        </div>
    );
};
