export function isErrorMessage(content: string): boolean {
    return (
        content.startsWith("Error:") ||
        content.startsWith("Connection error")
    );
}
