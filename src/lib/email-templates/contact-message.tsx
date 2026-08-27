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

export const VEHICLE_LABELS: Record<string, string> = {
  husbil: "Husbil",
  husvagn: "Husvagn",
};

export interface ContactMessageProps {
  regnr?: string | undefined;
  vehicleType: string;
  condition: string;
  phone: string;
  email?: string | undefined;
}

export function ContactMessageEmail({
  regnr,
  vehicleType,
  condition,
  phone,
  email,
}: ContactMessageProps) {
  const vehicleLabel = VEHICLE_LABELS[vehicleType] ?? vehicleType;
  return (
    <Html lang="sv" dir="ltr">
      <Head />
      <Preview>
        Ny värderingsförfrågan – {vehicleLabel} {regnr ? `(${regnr})` : ""}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Ny värderingsförfrågan</Heading>
          <Section style={box}>
            <Text style={row}>
              <strong>Fordonstyp:</strong> {vehicleLabel}
            </Text>
            <Text style={row}>
              <strong>Registreringsnummer:</strong> {regnr || "–"}
            </Text>
            <Text style={row}>
              <strong>Telefon:</strong> {phone}
            </Text>
            <Text style={row}>
              <strong>E-post:</strong> {email || "–"}
            </Text>
          </Section>
          <Hr style={hr} />
          <Text style={label}>Skick / beskrivning:</Text>
          <Text style={messageText}>{condition}</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Skickat via värderingsformuläret på Ljunggrens Husbilars hemsida.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" };
const container = { padding: "24px", maxWidth: "560px" };
const heading = { color: "#101c3d", fontSize: "22px" };
const box = {
  backgroundColor: "#f4f5f7",
  borderRadius: "8px",
  padding: "12px 16px",
};
const row = { margin: "6px 0", fontSize: "14px", color: "#333333" };
const hr = { borderColor: "#e3e5ea", margin: "16px 0" };
const label = { fontSize: "14px", color: "#666666", marginBottom: "4px" };
const messageText = {
  fontSize: "15px",
  color: "#1a1a1a",
  whiteSpace: "pre-wrap" as const,
};
const footer = { fontSize: "12px", color: "#999999" };
