# Fixa e-postutskick från kontaktformuläret

## Diagnos (bekräftad via serverloggar)

Domänen notify.ljunggrenshusbilar.com är verifierad och klar. Utskicket misslyckas ändå med felet:

`400 Missing run_id or idempotency_key – App emails can omit run_id by providing idempotency_key with purpose=transactional`

Orsak: anropet till e-post-API:et i `src/lib/email-templates/send-email.ts` skickar en idempotensnyckel men saknar fältet `purpose: 'transactional'`. API:et avvisar därför varje utskick med HTTP 400, och besökaren ser bara "Meddelandet kunde inte skickas just nu".

## Åtgärd

1. I `src/lib/email-templates/send-email.ts`, lägg till i anropet till `sendLovableEmail`:
   - `purpose: 'transactional'`
   - `label: 'contact-form'` (märkning för spårbarhet i e-postloggarna)
2. Verifiera genom att:
   - Klicka på testknappen "Skicka testmeddelande" i förhandsvisningen och bekräfta att den svarar att meddelandet skickats.
   - Fylla i och skicka det riktiga kontaktformuläret en gång.
3. Inga andra ändringar behövs — domän, mottagaradress och formulär fungerar redan som de ska.

## Tekniska detaljer

- Fil som ändras: `src/lib/email-templates/send-email.ts` (en enda funktion, `sendContactMessage`).
- Efter lyckat utskick syns en `sent`-händelse i Cloud → Emails.
