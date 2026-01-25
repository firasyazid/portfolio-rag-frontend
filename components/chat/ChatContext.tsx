"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useChatStore } from "@/app/hooks/useChatStore";
import type { ChatStore } from "@/app/types/chat";

const ChatContext = createContext<ChatStore | null>(null);

interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
    const store = useChatStore();

    return <ChatContext.Provider value={store}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatStore => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
};
