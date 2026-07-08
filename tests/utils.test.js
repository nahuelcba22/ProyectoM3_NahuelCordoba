import { describe, it, expect } from "vitest";
import {
    createUserMessage,
    createMimirMessage
} from "../utils.js";

describe("createUserMessage", () => {

    it("crea correctamente un mensaje del usuario", () => {

        const result = createUserMessage("Hola");

        expect(result).toEqual({
            role: "user",
            content: "Hola"
        });

    });

    it("elimina espacios sobrantes", () => {

        const result = createUserMessage("   Hola   ");

        expect(result.content).toBe("Hola");

    });

});

describe("createMimirMessage", () => {

    it("crea correctamente un mensaje de Mímir", () => {

        const result = createMimirMessage("Saludos");

        expect(result).toEqual({
            role: "mimir",
            content: "Saludos"
        });

    });

    it("elimina espacios sobrantes", () => {

        const result = createMimirMessage("   Sabiduría   ");

        expect(result.content).toBe("Sabiduría");

    });

});