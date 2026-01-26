"use client";

import { useState, useCallback, useRef } from "react";
import { ChatService, type Source } from "@/app/services/chatService";
import type { Message, ChatStore } from "@/app/types/chat";

const generateId = () => Math.random().toString(36).substring(2, 15);

export const useChatStore = (): ChatStore => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

        const flushBuffer = () => {
            if (chunkBuffer) {
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
            }
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

                        // Batch updates: flush every 50ms or when buffer reaches certain size
                        if (updateTimeoutRef.current) {
                            clearTimeout(updateTimeoutRef.current);
                        }

                        if (chunkBuffer.length > 20) {
                            flushBuffer();
                        } else {
                            updateTimeoutRef.current = setTimeout(flushBuffer, 50);
                        }
                        break;
                    case "done":
                        console.log("Stream completed successfully");
                        // Flush any remaining content
                        if (updateTimeoutRef.current) {
                            clearTimeout(updateTimeoutRef.current);
                        }
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
                        console.error("Stream error event:", event.message);
                        if (updateTimeoutRef.current) {
                            clearTimeout(updateTimeoutRef.current);
                        }
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
            
            // If stream ended without receiving data or done event, mark as complete
            if (!hasReceivedAnyData || accumulatedContent === "") {
                console.warn("Stream ended without data");
                if (updateTimeoutRef.current) {
                    clearTimeout(updateTimeoutRef.current);
                }
                flushBuffer();
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === assistantMessageId
                            ? { 
                                ...msg, 
                                content: accumulatedContent || "No response received. Please try again.",
                                isStreaming: false, 
                                sources 
                            }
                            : msg
                    )
                );
            }
        } catch (error) {
            console.error("Chat error:", error);
            if (updateTimeoutRef.current) {
                clearTimeout(updateTimeoutRef.current);
            }
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === assistantMessageId
                        ? { 
                            ...msg, 
                            content: error instanceof Error 
                                ? `Connection error: ${error.message}` 
                                : "Connection error. Please try again.", 
                            isStreaming: false 
                        }
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
