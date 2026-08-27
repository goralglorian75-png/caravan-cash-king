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

// --- Testknapp: skickar ett fast testmeddelande till mottagaren ---
// Enkel skyddsgräns: max ett testmeddelande per minut (per serverinstans).
let lastTestSentAt = 0;

export const sendTestMessage = createServerFn({ method: "POST" }).handler(
  async () => {
    const now = Date.now();
    if (now - lastTestSentAt < 60_000) {
      throw new Error("Vänta en minut innan du skickar ett nytt test.");
    }
    try {
      const { sendContactMessage } = await import(
        "@/lib/email-templates/send-email"
      );
      await sendContactMessage({
        name: "Test (hemsidan)",
        phone: "000-000 00 00",
        email: "test@example.com",
        interest: "ovrigt",
        message:
          "Detta är ett automatiskt testmeddelande från kontaktformuläret. Om du läser detta fungerar e-postutskicket.",
      });
      lastTestSentAt = now;
      return { ok: true as const };
    } catch (error) {
      console.error(error);
      const code =
        error && typeof error === "object" && "code" in error
          ? String((error as { code?: unknown }).code)
          : "";
      if (code === "domain_not_verified") {
        throw new Error(
          "Domänen är inte verifierad ännu – DNS-verifieringen kan ta upp till 72 timmar. Försök igen senare.",
        );
      }
      throw new Error("Testmeddelandet kunde inte skickas just nu.");
    }
  },
);
