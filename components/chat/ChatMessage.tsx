"use client";

import { Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Message } from "@/app/types/chat";
import { SourcesPanel } from "./SourcesPanel";

interface ChatMessageProps {
    message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
    const isUser = message.role === "user";

    if (isUser) {
        return (
            <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#1c1f26] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm border border-white/5">
                    {message.content}
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-4">
            <div className="shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>
            </div>

            <div className="flex-1 min-w-0 space-y-2">
                <div className="text-sm font-medium text-zinc-400">Firas AI</div>
                <div className="prose prose-sm prose-invert max-w-none text-zinc-300 leading-relaxed">
                    <ReactMarkdown
                        components={{
                            a: ({ href, children }) => (
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                                >
                                    {children}
                                </a>
                            ),
                            p: ({ children }) => (
                                <p className="mb-2 last:mb-0">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside space-y-1 my-2">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside space-y-1 my-2">
                                    {children}
                                </ol>
                            ),
                            code: ({ children }) => (
                                <code className="bg-zinc-800/50 px-1.5 py-0.5 rounded text-cyan-300 text-xs font-mono">
                                    {children}
                                </code>
                            ),
                        }}
                    >
                        {message.content}
                    </ReactMarkdown>

                    {message.isStreaming && (
                        <span className="inline-block w-1.5 h-4 bg-cyan-400 animate-pulse ml-1 align-middle" />
                    )}
                </div>

                {!message.isStreaming && message.sources && message.sources.length > 0 && (
                    <SourcesPanel sources={message.sources} />
                )}
            </div>
        </div>
    );
};
