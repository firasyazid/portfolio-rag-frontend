"use client";

import { useState, useCallback } from "react";
import { ChatService, type Source } from "@/app/services/chatService";
import type { Message, ChatStore } from "@/app/types/chat";

const generateId = () => Math.random().toString(36).substring(2, 15);

export const useChatStore = (): ChatStore => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

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

        try {
            for await (const event of ChatService.streamChat(content)) {
                switch (event.type) {
                    case "sources":
                        sources = event.sources;
                        break;
                    case "chunk":
                        accumulatedContent += event.content;
                        setMessages((prev) =>
                            prev.map((msg) =>
                                msg.id === assistantMessageId
                                    ? { ...msg, content: accumulatedContent }
                                    : msg
                            )
                        );
                        break;
                    case "done":
                        setMessages((prev) =>
                            prev.map((msg) =>
                                msg.id === assistantMessageId
                                    ? { ...msg, isStreaming: false, sources }
                                    : msg
                            )
                        );
                        break;
                    case "error":
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
        } catch {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === assistantMessageId
                        ? { ...msg, content: "Connection error. Please try again.", isStreaming: false }
                        : msg
                )
            );
        } finally {
            setIsStreaming(false);
        }
    }, [isStreaming]);

    const togglePanel = useCallback(() => setIsOpen((prev) => !prev), []);
    const openPanel = useCallback(() => setIsOpen(true), []);
    const closePanel = useCallback(() => setIsOpen(false), []);
    const clearConversation = useCallback(() => {
        setMessages([]);
        setHasInteracted(false);
    }, []);

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
