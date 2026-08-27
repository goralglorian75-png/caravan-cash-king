// Server-only module — never import from client components.
// The recipient address lives here and in the Cloud secret store only;
// it is never sent to the browser.

import { render } from "@react-email/render";
import { sendLovableEmail } from "@lovable.dev/email-js";
import { createElement } from "react";
import {
  ContactMessageEmail,
  INTEREST_LABELS,
  type ContactMessageProps,
} from "./contact-message";

// The verified sender subdomain for this project (set up under Cloud → Emails).
export const SENDER_DOMAIN = "notify.ljunggrenshusbilar.com";

const FROM = `Ljunggrens Husbilar <noreply@${SENDER_DOMAIN}>`;
const RECIPIENT = "Allanc144@hotmail.com";

export async function sendContactMessage(data: ContactMessageProps) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("E-posttjänsten är inte konfigurerad");

  const interestLabel = INTEREST_LABELS[data.interest] ?? data.interest;
  const html = await render(createElement(ContactMessageEmail, data));
  const text = [
    "Nytt meddelande via hemsidan",
    "",
    `Namn: ${data.name}`,
    `Telefon: ${data.phone}`,
    `E-post: ${data.email}`,
    `Ämne: ${interestLabel}`,
    "",
    "Meddelande:",
    data.message,
  ].join("\n");

  return sendLovableEmail(
    {
      to: RECIPIENT,
      from: FROM,
      sender_domain: SENDER_DOMAIN,
      reply_to: data.email,
      subject: `Nytt meddelande från ${data.name} – ${interestLabel}`,
      html,
      text,
      idempotency_key: `contact-${Date.now()}-${data.email}`,
    },
    { apiKey },
  );
}
