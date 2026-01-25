"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { useChat } from "./ChatContext";

export const ChatInput = () => {
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

    return (
        <div className="flex items-center gap-2 rounded-xl bg-[#1c1f26] border border-white/5 px-4 py-2.5 focus-within:border-white/10 transition-colors">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={isStreaming}
                className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none disabled:opacity-50"
                autoFocus
            />
            <button
                onClick={handleSubmit}
                disabled={!input.trim() || isStreaming}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${input.trim() && !isStreaming
                        ? "bg-cyan-500 text-black hover:bg-cyan-400"
                        : "bg-transparent text-zinc-600 cursor-not-allowed"
                    }`}
                aria-label="Send message"
            >
                <Send className="h-4 w-4" />
            </button>
        </div>
    );
};
