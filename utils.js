export function createUserMessage(text) {

    return {
        role: "user",
        content: text.trim()
    };

}

export function createMimirMessage(text) {

    return {
        role: "mimir",
        content: text.trim()
    };

}