"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { useChat } from "./ChatContext";

export const AskSection = () => {
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
        <section className="relative z-10 py-24 px-6 relative" id="contact">
            {/* Background elements if needed */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Meet My <span className="text-cyan-400">AI Clone</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        I’ve built a Retrieval-Augmented Generation (RAG) system using my personal data. It’s fully aware of my experience, skills, and background. Ask it anything, and it will provide accurate insights tailored to me!
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <div className="flex items-center gap-3 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 px-4 py-3 shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-500/10 transition-all duration-300 group focus-within:border-cyan-500/50 focus-within:shadow-cyan-500/20">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="e.g. What is Firas's tech stack?"
                            disabled={isStreaming}
                            className="flex-1 bg-transparent text-base text-white placeholder-zinc-500 focus:outline-none disabled:opacity-50"
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={!input.trim() || isStreaming}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
                            aria-label="Send message"
                        >
                            <Send className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
