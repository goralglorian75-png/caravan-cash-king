// Server-only module — never import from client components.
// The recipient address lives here and in the Cloud secret store only;
// it is never sent to the browser.

import { render } from "@react-email/render";
import { sendLovableEmail } from "@lovable.dev/email-js";
import { createElement } from "react";
import {
  ContactMessageEmail,
  VEHICLE_LABELS,
  type ContactMessageProps,
} from "./contact-message";

// The verified sender subdomain for this project (set up under Cloud → Emails).
export const SENDER_DOMAIN = "notify.ljunggrenshusbilar.com";

const FROM = `Ljunggrens Husbilar <noreply@${SENDER_DOMAIN}>`;
const RECIPIENT = "Allanc144@hotmail.com";

export async function sendContactMessage(data: ContactMessageProps) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("E-posttjänsten är inte konfigurerad");

  const vehicleLabel = VEHICLE_LABELS[data.vehicleType] ?? data.vehicleType;
  const html = await render(createElement(ContactMessageEmail, data));
  const text = [
    "Ny värderingsförfrågan",
    "",
    `Fordonstyp: ${vehicleLabel}`,
    `Registreringsnummer: ${data.regnr || "–"}`,
    `Telefon: ${data.phone}`,
    `E-post: ${data.email || "–"}`,
    "",
    "Skick / beskrivning:",
    data.condition,
  ].join("\n");

  return sendLovableEmail(
    {
      to: RECIPIENT,
      from: FROM,
      sender_domain: SENDER_DOMAIN,
      purpose: "transactional",
      label: "contact-form",
      ...(data.email ? { reply_to: data.email } : {}),
      subject: `Värdering: ${vehicleLabel}${data.regnr ? ` ${data.regnr}` : ""} – ${data.phone}`,
      html,
      text,
      idempotency_key: `contact-${Date.now()}-${data.phone}`,
    },
    { apiKey },
  );
}
