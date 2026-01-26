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
        let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
        
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
                signal: AbortSignal.timeout(120000), // 2 minute timeout
            });

            if (!response.ok) {
                if (response.status === 429) {
                    yield {
                        type: "error",
                        message: "You're sending too many messages. Please wait a moment before trying again."
                    };
                    return;
                }

                const errorText = await response.text().catch(() => response.statusText);
                yield {
                    type: "error",
                    message: `Server Error: ${response.status} - ${errorText}`
                };
                return;
            }

            if (!response.body) {
                yield { type: "error", message: "No response body received." };
                return;
            }

            reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = "";
            let hasReceivedData = false;

            try {
                while (true) {
                    const { done, value } = await reader.read();

                    if (done) {
                        // Process any remaining buffer content
                        if (buffer.trim()) {
                            const lines = buffer.split("\n").filter(line => line.trim());
                            for (const line of lines) {
                                try {
                                    let jsonString = line.trim();
                                    if (jsonString.startsWith("data:")) {
                                        jsonString = jsonString.slice(5).trim();
                                    }
                                    if (jsonString && jsonString !== "[DONE]") {
                                        const event = JSON.parse(jsonString) as StreamEvent;
                                        yield event;
                                        hasReceivedData = true;
                                    }
                                } catch (parseError) {
                                    console.error("Failed to parse final buffer:", parseError, line);
                                }
                            }
                        }
                        break;
                    }

                    // Decode the chunk
                    const chunk = decoder.decode(value, { stream: true });
                    buffer += chunk;
                    
                    // Split by newlines
                    const lines = buffer.split("\n");
                    
                    // Keep the last incomplete line in the buffer
                    buffer = lines.pop() || "";

                    // Process complete lines
                    for (const line of lines) {
                        const trimmedLine = line.trim();
                        if (!trimmedLine) continue;

                        let jsonString = trimmedLine;
                        
                        // Handle SSE format
                        if (trimmedLine.startsWith("data:")) {
                            jsonString = trimmedLine.slice(5).trim();
                        }

                        // Skip empty data or done markers
                        if (!jsonString || jsonString === "[DONE]") continue;

                        try {
                            const event = JSON.parse(jsonString) as StreamEvent;
                            yield event;
                            hasReceivedData = true;

                            // Don't break early on done/error, let the stream complete naturally
                        } catch (parseError) {
                            console.error("Failed to parse stream event:", parseError, jsonString);
                            // Continue processing other lines instead of breaking
                        }
                    }
                }

                // If we haven't received any data, yield a done event
                if (!hasReceivedData) {
                    yield { type: "done" };
                }

            } catch (readError) {
                console.error("Stream reading error:", readError);
                yield {
                    type: "error",
                    message: readError instanceof Error ? readError.message : "Stream reading failed"
                };
            }

        } catch (error) {
            console.error("Chat service error:", error);
            
            if (error instanceof Error) {
                if (error.name === "AbortError" || error.name === "TimeoutError") {
                    yield {
                        type: "error",
                        message: "Request timed out. Please try again."
                    };
                } else {
                    yield {
                        type: "error",
                        message: error.message || "Unknown network error"
                    };
                }
            } else {
                yield {
                    type: "error",
                    message: "Unknown network error"
                };
            }
        } finally {
            // Ensure reader is properly closed
            if (reader) {
                try {
                    await reader.cancel();
                } catch (e) {
                    console.error("Error closing reader:", e);
                }
            }
        }
    }
};
