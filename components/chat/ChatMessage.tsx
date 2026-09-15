"use client";

import { memo } from "react";
import { AssistantAvatarIcon } from "./AssistantAvatarIcon";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import type { Message } from "@/app/types/chat";
import { ChatTypingIndicator } from "./ChatTypingIndicator";
import { isErrorMessage } from "./chatUtils";

interface ChatMessageProps {
    message: Message;
}

const markdownComponents: Components = {
    a: ({ href, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-cyan-400 underline underline-offset-2 transition-colors hover:text-cyan-300"
        >
            {children}
        </a>
    ),
    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
    ul: ({ children }) => (
        <ul className="my-2 list-inside list-disc space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
        <ol className="my-2 list-inside list-decimal space-y-1">{children}</ol>
    ),
    code: ({ children }) => (
        <code className="rounded bg-zinc-800/50 px-1.5 py-0.5 font-mono text-xs text-cyan-300 break-words">
            {children}
        </code>
    ),
};

export const ChatMessage = memo(({ message }: ChatMessageProps) => {
    const isUser = message.role === "user";
    const isError = !isUser && !message.isStreaming && isErrorMessage(message.content);
    const isWaiting =
        !isUser && message.isStreaming && message.content.trim().length === 0;

    if (isUser) {
        return (
            <div className="flex justify-end">
                <div className="max-w-[min(85%,100%)] rounded-2xl rounded-tr-sm border border-white/5 bg-[#1c1f26] px-4 py-3 text-[15px] leading-relaxed text-white md:text-sm">
                    <p className="whitespace-pre-wrap break-words">{message.content}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-3 md:gap-4">
            <div className="mt-0.5 shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                    <AssistantAvatarIcon size="sm" />
                </div>
            </div>

            <div className="min-w-0 flex-1 space-y-2">
                <div className="text-sm font-medium text-zinc-400">Firas AI</div>

                {isWaiting ? (
                    <ChatTypingIndicator />
                ) : (
                    <div
                        className={`prose prose-sm prose-invert max-w-none leading-relaxed ${
                            isError ? "text-red-300/90" : "text-zinc-300"
                        }`}
                    >
                        {message.isStreaming ? (
                            <p className="mb-0 whitespace-pre-wrap break-words text-[15px] md:text-sm">
                                {message.content}
                                <span
                                    className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-cyan-400 align-middle motion-safe-only"
                                    aria-hidden="true"
                                />
                            </p>
                        ) : (
                            <ReactMarkdown components={markdownComponents}>
                                {message.content}
                            </ReactMarkdown>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
});

ChatMessage.displayName = "ChatMessage";
