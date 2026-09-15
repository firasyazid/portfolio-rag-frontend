"use client";

import { useTranslations } from "next-intl";

export const ChatTypingIndicator = () => {
    const t = useTranslations("ChatWidget");

    return (
        <div
            className="flex items-center gap-2 text-zinc-400"
            role="status"
            aria-live="polite"
            aria-label={t("thinking_label")}
        >
            <span className="flex gap-1" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400/80 animate-bounce"
                        style={{ animationDelay: `${i * 150}ms` }}
                    />
                ))}
            </span>
            <span className="text-sm text-zinc-500">{t("thinking_label")}</span>
        </div>
    );
};
