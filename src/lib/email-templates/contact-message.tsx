import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const INTEREST_LABELS: Record<string, string> = {
  salja: "Vill sälja husbil/husvagn",
  kopa: "Vill köpa",
  byta: "Vill byta",
  husbil: "Fråga om husbil",
  ovrigt: "Övrig fråga",
};

export interface ContactMessageProps {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

export function ContactMessageEmail({
  name,
  phone,
  email,
  interest,
  message,
}: ContactMessageProps) {
  const interestLabel = INTEREST_LABELS[interest] ?? interest;
  return (
    <Html lang="sv" dir="ltr">
      <Head />
      <Preview>Nytt meddelande från {name} – {interestLabel}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Nytt meddelande via hemsidan</Heading>
          <Section style={box}>
            <Text style={row}>
              <strong>Namn:</strong> {name}
            </Text>
            <Text style={row}>
              <strong>Telefon:</strong> {phone}
            </Text>
            <Text style={row}>
              <strong>E-post:</strong> {email}
            </Text>
            <Text style={row}>
              <strong>Ämne:</strong> {interestLabel}
            </Text>
          </Section>
          <Hr style={hr} />
          <Text style={label}>Meddelande:</Text>
          <Text style={messageText}>{message}</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Skickat via kontaktformuläret på Ljunggrens Husbilars hemsida. Svara
            direkt till kundens e-postadress ovan.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" };
const container = { padding: "24px", maxWidth: "560px" };
const heading = { color: "#1f3d2b", fontSize: "22px" };
const box = {
  backgroundColor: "#f6f4ef",
  borderRadius: "8px",
  padding: "12px 16px",
};
const row = { margin: "6px 0", fontSize: "14px", color: "#333333" };
const hr = { borderColor: "#e5e2da", margin: "16px 0" };
const label = { fontSize: "14px", color: "#666666", marginBottom: "4px" };
const messageText = {
  fontSize: "15px",
  color: "#1a1a1a",
  whiteSpace: "pre-wrap" as const,
};
const footer = { fontSize: "12px", color: "#999999" };
