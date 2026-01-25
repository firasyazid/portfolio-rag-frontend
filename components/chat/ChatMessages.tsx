"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { useChat } from "./ChatContext";
import { ChatMessage } from "./ChatMessage";

export const ChatMessages = () => {
    const { messages } = useChat();
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if (messages.length === 0) {
        return (
            <div className="flex flex-1 flex-col justify-center px-8">
                <div className="space-y-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                        <Sparkles className="h-6 w-6 text-cyan-400" />
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Assistant</p>
                        <h1 className="text-xl font-bold text-white leading-snug">
                            This is Firas AI.<br />
                            <span className="text-zinc-400 font-normal text-base mt-2 block">
                                An AI trained on my experience, skills, and journey. Ask about my CV, LinkedIn, projects, or life advice.
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-thin">
            {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={bottomRef} />
        </div>
    );
};
