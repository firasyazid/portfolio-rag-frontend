"use client";

import { useState, useCallback, useRef, useLayoutEffect, useEffect } from "react";
import { ChatService, type Source } from "@/app/services/chatService";
import {
    loadMessages,
    saveMessages,
    clearStoredMessages,
} from "@/app/services/chatStorage";
import type { Message, ChatStore } from "@/app/types/chat";

const generateId = () => Math.random().toString(36).substring(2, 15);

export const useChatStore = (): ChatStore => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);
    const rafIdRef = useRef<number | null>(null);

    useLayoutEffect(() => {
        const stored = loadMessages();
        if (stored.length > 0) {
            setMessages(stored);
            setHasInteracted(true);
        }
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (!isHydrated) return;
        saveMessages(messages);
    }, [messages, isHydrated]);

    const cancelScheduledFlush = useCallback(() => {
        if (rafIdRef.current !== null) {
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
        }
    }, []);

    const sendMessage = useCallback(async (content: string) => {
        if (!content.trim() || isStreaming) return;

        setHasInteracted(true);
        setIsOpen(true);

        const userMessage: Message = {
            id: generateId(),
            role: "user",
            content: content.trim(),
            timestamp: new Date(),
        };

        const assistantMessageId = generateId();
        const assistantMessage: Message = {
            id: assistantMessageId,
            role: "assistant",
            content: "",
            isStreaming: true,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage, assistantMessage]);
        setIsStreaming(true);

        let accumulatedContent = "";
        let sources: Source[] = [];
        let chunkBuffer = "";
        let hasFlushedFirstChunk = false;

        const flushBuffer = () => {
            cancelScheduledFlush();
            if (!chunkBuffer) return;

            accumulatedContent += chunkBuffer;
            const contentToUpdate = accumulatedContent;
            chunkBuffer = "";

            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === assistantMessageId
                        ? { ...msg, content: contentToUpdate }
                        : msg
                )
            );
        };

        const scheduleFlush = () => {
            if (rafIdRef.current !== null) return;
            rafIdRef.current = requestAnimationFrame(() => {
                rafIdRef.current = null;
                flushBuffer();
            });
        };

        try {
            let hasReceivedAnyData = false;

            for await (const event of ChatService.streamChat(content)) {
                hasReceivedAnyData = true;

                switch (event.type) {
                    case "sources":
                        sources = event.sources;
                        break;
                    case "chunk":
                        chunkBuffer += event.content;

                        if (!hasFlushedFirstChunk) {
                            hasFlushedFirstChunk = true;
                            flushBuffer();
                        } else {
                            scheduleFlush();
                        }
                        break;
                    case "done":
                        flushBuffer();
                        setMessages((prev) =>
                            prev.map((msg) =>
                                msg.id === assistantMessageId
                                    ? { ...msg, isStreaming: false, sources }
                                    : msg
                            )
                        );
                        break;
                    case "error":
                        cancelScheduledFlush();
                        setMessages((prev) =>
                            prev.map((msg) =>
                                msg.id === assistantMessageId
                                    ? {
                                        ...msg,
                                        content: `Error: ${event.message}`,
                                        isStreaming: false,
                                    }
                                    : msg
                            )
                        );
                        break;
                }
            }

            if (!hasReceivedAnyData || accumulatedContent === "") {
                flushBuffer();
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === assistantMessageId
                            ? {
                                ...msg,
                                content: accumulatedContent || "No response received. Please try again.",
                                isStreaming: false,
                                sources,
                            }
                            : msg
                    )
                );
            }
        } catch (error) {
            cancelScheduledFlush();
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === assistantMessageId
                        ? {
                            ...msg,
                            content: error instanceof Error
                                ? `Connection error: ${error.message}`
                                : "Connection error. Please try again.",
                            isStreaming: false,
                        }
                        : msg
                )
            );
        } finally {
            cancelScheduledFlush();
            setIsStreaming(false);
        }
    }, [isStreaming, cancelScheduledFlush]);

    const togglePanel = useCallback(() => setIsOpen((prev) => !prev), []);
    const openPanel = useCallback(() => setIsOpen(true), []);
    const closePanel = useCallback(() => setIsOpen(false), []);
    const clearConversation = useCallback(() => {
        cancelScheduledFlush();
        setMessages([]);
        setHasInteracted(false);
        clearStoredMessages();
    }, [cancelScheduledFlush]);

    return {
        messages,
        isOpen,
        isStreaming,
        hasInteracted,
        sendMessage,
        togglePanel,
        openPanel,
        closePanel,
        clearConversation,
    };
};
