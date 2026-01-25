import type { Source } from "@/app/services/chatService";

export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    sources?: Source[];
    isStreaming?: boolean;
    timestamp: Date;
}

export interface ChatState {
    messages: Message[];
    isOpen: boolean;
    isStreaming: boolean;
    hasInteracted: boolean;
}

export interface ChatActions {
    sendMessage: (content: string) => Promise<void>;
    togglePanel: () => void;
    openPanel: () => void;
    closePanel: () => void;
    clearConversation: () => void;
}

export type ChatStore = ChatState & ChatActions;
