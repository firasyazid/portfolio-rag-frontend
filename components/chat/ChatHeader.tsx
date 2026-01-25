"use client";

import { Sparkles, X, Trash2 } from "lucide-react";
import { useChat } from "./ChatContext";

export const ChatHeader = () => {
    const { closePanel, clearConversation, messages } = useChat();

    return (
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0d1117]">
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white tracking-tight">
                        Firas AI
                    </span>
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400 font-medium border border-white/5">
                        Assistant
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-1">
                {messages.length > 0 && (
                    <button
                        onClick={clearConversation}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Clear conversation"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                )}
                <button
                    onClick={closePanel}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
                    title="Close chat"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};
