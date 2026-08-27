import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Ange ditt namn").max(100),
  phone: z
    .string()
    .trim()
    .min(5, "Ange ett giltigt telefonnummer")
    .max(25)
    .regex(/^[0-9+\-()\s]+$/, "Ange ett giltigt telefonnummer"),
  email: z.string().trim().email("Ange en giltig e-postadress").max(255),
  interest: z.enum(["salja", "kopa", "byta", "husbil", "ovrigt"]),
  message: z.string().trim().min(1, "Skriv ett meddelande").max(2000),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const { sendContactMessage } = await import(
        "@/lib/email-templates/send-email"
      );
      await sendContactMessage(data);
      return { ok: true as const };
    } catch (error) {
      console.error(error);
      throw new Error(
        "Meddelandet kunde inte skickas just nu. Försök igen eller ring oss.",
      );
    }
  });
