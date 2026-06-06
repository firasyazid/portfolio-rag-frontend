import type { Message } from "@/app/types/chat";

const STORAGE_KEY = "firas-portfolio-chat";
const MAX_MESSAGES = 100;

interface StoredMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: string;
}

function toStored(message: Message): StoredMessage {
    return {
        id: message.id,
        role: message.role,
        content: message.content,
        timestamp: message.timestamp.toISOString(),
    };
}

function fromStored(stored: StoredMessage): Message {
    return {
        id: stored.id,
        role: stored.role,
        content: stored.content,
        timestamp: new Date(stored.timestamp),
    };
}

/** Only persist completed messages (skip in-flight streams and empty assistant replies). */
export function getPersistableMessages(messages: Message[]): Message[] {
    return messages.filter(
        (message) =>
            message.role === "user" ||
            (message.role === "assistant" &&
                !message.isStreaming &&
                message.content.trim().length > 0)
    );
}

export function loadMessages(): Message[] {
    if (typeof window === "undefined") return [];

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];

        const parsed = JSON.parse(raw) as StoredMessage[];
        if (!Array.isArray(parsed)) return [];

        return parsed.map(fromStored);
    } catch {
        return [];
    }
}

export function saveMessages(messages: Message[]): void {
    if (typeof window === "undefined") return;

    try {
        const persistable = getPersistableMessages(messages).slice(-MAX_MESSAGES);

        if (persistable.length === 0) {
            localStorage.removeItem(STORAGE_KEY);
            return;
        }

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(persistable.map(toStored))
        );
    } catch {
        // Ignore quota errors or private browsing restrictions
    }
}

export function clearStoredMessages(): void {
    if (typeof window === "undefined") return;

    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // Ignore
    }
}
