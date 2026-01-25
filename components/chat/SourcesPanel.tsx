"use client";

import { FileText } from "lucide-react";
import type { Source } from "@/app/services/chatService";

interface SourcesPanelProps {
    sources: Source[];
}

export const SourcesPanel = ({ sources }: SourcesPanelProps) => {
    if (sources.length === 0) return null;

    return (
        <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-zinc-800/50 border border-white/5 px-3 py-1.5">
                <FileText className="h-3 w-3 text-cyan-400" />
                <span className="text-xs text-zinc-400">
                    Based on {sources.length} source{sources.length > 1 ? "s" : ""}
                </span>
            </div>
        </div>
    );
};
