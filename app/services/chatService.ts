import { z } from "zod";

export const ChatRequestSchema = z.object({
    message: z.string().min(1),
});

export type ChatRequest = z.infer<typeof ChatRequestSchema>;

export interface Source {
    score: number;
    text: string;
    source: string;
    header: string;
    header_level: string;
    section_type: string;
}

export type StreamEventType = "sources" | "chunk" | "done" | "error";

export interface BaseStreamEvent {
    type: StreamEventType;
}

export interface SourcesEvent extends BaseStreamEvent {
    type: "sources";
    sources: Source[];
}

export interface ChunkEvent extends BaseStreamEvent {
    type: "chunk";
    content: string;
}

export interface DoneEvent extends BaseStreamEvent {
    type: "done";
}

export interface ErrorEvent extends BaseStreamEvent {
    type: "error";
    message: string;
}

export type StreamEvent = SourcesEvent | ChunkEvent | DoneEvent | ErrorEvent;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ChatService = {
    async *streamChat(message: string): AsyncGenerator<StreamEvent, void, unknown> {
        try {
            const validation = ChatRequestSchema.safeParse({ message });
            if (!validation.success) {
                yield { type: "error", message: "Invalid message format." };
                return;
            }

            const response = await fetch(`${API_BASE_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/x-ndjson",
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    yield {
                        type: "error",
                        message: "You're sending too many messages. Please wait a moment before trying again."
                    };
                    return;
                }

                yield {
                    type: "error",
                    message: `Server Error: ${response.status} ${response.statusText}`
                };
                return;
            }

            if (!response.body) {
                yield { type: "error", message: "No response body received." };
                return;
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();

                if (done) {
                    break;
                }

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");

                buffer = lines.pop() || "";

                for (const line of lines) {
                    const trimmedLine = line.trim();
                    if (!trimmedLine) continue;

                    let jsonString = trimmedLine;
                    if (trimmedLine.startsWith("data:")) {
                        jsonString = trimmedLine.slice(5).trim();
                    }

                    if (!jsonString || jsonString === "[DONE]") continue;

                    try {
                        const event = JSON.parse(jsonString) as StreamEvent;
                        yield event;

                        if (event.type === "done" || event.type === "error") {
                            if (event.type === "error") return;
                        }
                    } catch {
                    }
                }
            }

            if (buffer.trim()) {
                try {
                    const event = JSON.parse(buffer) as StreamEvent;
                    yield event;
                } catch (e) {
                }
            }

        } catch (error) {
            yield {
                type: "error",
                message: error instanceof Error ? error.message : "Unknown network error"
            };
        }
    }
};
