import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  Phone,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Clock,
  Truck,
  ChevronDown,
  Send,
  Loader2,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { submitContactForm } from "../lib/contact.functions";
import heroImage from "../assets/hero-rv.jpg";
import rv1 from "../assets/Snapchat-1985497538.jpg.asset.json";
import rv2 from "../assets/Snapchat-545601298.jpg.asset.json";
import rv3 from "../assets/Snapchat-1251419819.jpg.asset.json";
import rv4 from "../assets/Snapchat-1610059080.jpg.asset.json";
import rv5 from "../assets/Snapchat-627918383.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ljunggrens Husbilar | Vi köper husbilar & husvagnar" },
      {
        name: "description",
        content:
          "Ljunggrens Husbilar köper husbilar och husvagnar över hela Sverige. Kostnadsfri värdering via telefon. Vi köper alla märken, modeller och skick – även skadade och obesiktigade fordon. Ring 076-237 90 95.",
      },
      { property: "og:title", content: "Ljunggrens Husbilar | Vi köper husbilar & husvagnar" },
      {
        property: "og:description",
        content:
          "Kostnadsfri värdering via telefon. Vi köper husbilar och husvagnar i hela Sverige – oavsett märke, modell eller skick.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ljunggrens Husbilar | Vi köper husbilar & husvagnar" },
      {
        name: "twitter:description",
        content:
          "Kostnadsfri värdering via telefon. Vi köper husbilar och husvagnar i hela Sverige – oavsett märke, modell eller skick.",
      },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const PHONE_NUMBER = "076-237 90 95";
const PHONE_HREF = "tel:+46762379095";

const boughtItems = [
  {
    title: "Husbilar och husvagnar från årsmodell 1990–2026",
    description:
      "Oavsett om fordonet är klassiskt eller nästan nytt kan vi ge en rättvis värdering och ett konkurrenskraftigt bud.",
  },
  {
    title: "Fordon från cirka 4 till 12 meter",
    description:
      "Stora som små – från kompakta husbilar till stora familjevagnar. Vi anpassar hämtningen efter fordonets storlek.",
  },
  {
    title: "Obesiktigade husbilar och husvagnar",
    description:
      "Saknas besiktning? Inga problem. Vi tittar på fordonets skick och ger dig ett bud ändå.",
  },
  {
    title: "Fordon med motorfel och andra tekniska fel",
    description:
      "Motorn går inte som den ska? Vi köper även husbilar och husvagnar med motor-, växellåds- eller elproblem.",
  },
  {
    title: "Krockskadade husbilar",
    description:
      "Skadat fordon efter olycka? Vi köper krockskadade fordon och sköter upphämtningen åt dig.",
  },
  {
    title: "Fuktskadade husbilar och husvagnar",
    description:
      "Fuktskador är vanligt och inget hinder. Vi värderar fordonet utifrån läget och ger ett ärligt bud.",
  },
  {
    title: "Importerade fordon",
    description:
      "Har du en importerad husbil eller husvagn? Vi köper även utländska märken och modeller.",
  },
  {
    title: "Långmilare och kortmilare",
    description:
      "Hög eller låg milräknare spelar ingen roll – vi köper fordon i alla körmängder.",
  },
  {
    title: "Diesel- och bensindrivna fordon",
    description:
      "Både diesel och bensin är av intresse. Vi köper drivmedelstyper oavsett marknadsläge.",
  },
  {
    title: "Husbilar och husvagnar med olika typer av reparationsbehov",
    description:
      "Stora eller små reparationsbehov – vi köper fordon som behöver lite extra kärlek också.",
  },
];

const gallery = [
  { src: rv1.url, alt: "Hobby husbil som vi köpt" },
  { src: rv2.url, alt: "Knaus husbil med alkov" },
  { src: rv3.url, alt: "Cabby 52 Comfort husvagn" },
  { src: rv4.url, alt: "Kabe Smaragd XL husvagn" },
  { src: rv5.url, alt: "Vit husvagn med röd dekor" },
];

const benefits = [
  { icon: CheckCircle2, text: "Inlösen av kvarvarande/restskuld" },
  { icon: Truck, text: "Hämtning av din husbil eller husvagn" },
  { icon: MapPin, text: "Hämtning över hela Sverige" },
  { icon: Clock, text: "Snabb och smidig affär" },
  { icon: ShieldCheck, text: "Kontant betalning på plats enligt överenskommelse" },
  { icon: Phone, text: "Seriös värdering och enkel försäljning" },
];

function PhoneButton({
  large,
  className = "",
}: {
  large?: boolean;
  className?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all",
        "bg-brand text-brand-foreground shadow-sm hover:bg-brand/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        large ? "px-8 py-4 text-lg" : "px-6 py-3 text-base",
        className,
      ].join(" ")}
    >
      <Phone className={large ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      {PHONE_NUMBER}
    </a>
  );
}

function BoughtItemCard({
  item,
}: {
  item: { title: string; description: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="rounded-xl bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-accent/5"
        aria-expanded={isOpen}
      >
        <CheckCircle2
          className="mt-0.5 h-5 w-5 shrink-0 text-brand"
          aria-hidden="true"
        />
        <span className="flex-1 font-medium text-foreground">{item.title}</span>
        <ChevronDown
          className={[
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <p className="pl-8 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      )}
    </li>
  );
}

const interestOptions = [
  { value: "salja", label: "Jag vill sälja husbil/husvagn" },
  { value: "kopa", label: "Jag vill köpa" },
  { value: "byta", label: "Jag vill byta" },
  { value: "husbil", label: "Fråga om husbil" },
  { value: "ovrigt", label: "Övrig fråga" },
] as const;

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

function ContactForm() {
  const submit = useServerFn(submitContactForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          email: String(fd.get("email") ?? ""),
          interest: String(fd.get("interest") ?? "salja"),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Något gick fel. Försök igen eller ring oss.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Tack för ditt meddelande!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Vi har tagit emot din förfrågan och återkommer till dig så snart som
          möjligt.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand hover:underline"
        >
          Skicka ett till meddelande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-card p-6 shadow-sm sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Namn *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Ditt namn"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Telefonnummer *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={25}
            autoComplete="tel"
            placeholder="07X-XXX XX XX"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            E-postadress *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={255}
            autoComplete="email"
            placeholder="din@epost.se"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-foreground">
            Vad gäller det? *
          </label>
          <select id="interest" name="interest" required className={inputClass} defaultValue="salja">
            {interestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Meddelande *
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          placeholder="Berätta gärna om fordonet – märke, årsmodell, skick och mileage."
          className={inputClass}
        />
      </div>
      {status === "error" && (
        <p className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          {errorMsg}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-brand-foreground shadow-sm transition-all hover:bg-brand/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-5 w-5" aria-hidden="true" />
        )}
        {status === "sending" ? "Skickar…" : "Skicka meddelande"}
      </button>
    </form>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern husbil i svensk landsbygd"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-forest/75" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Ljunggrens Husbilar
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-forest-foreground sm:text-5xl lg:text-6xl">
            Vi köper husbilar & husvagnar – alla märken och modeller!
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-foreground/90 sm:text-xl">
            Har du en husbil eller husvagn som du vill sälja? Vi köper fordon över hela Sverige,
            oavsett märke, modell eller skick.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <PhoneButton large />
            <span className="text-sm font-medium text-forest-foreground/80">
              Kostnadsfri värdering via telefon
            </span>
          </div>
        </div>
      </section>

      {/* Intro / trust */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Vi betalar bäst i stan
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Vi är seriösa köpare och erbjuder en kostnadsfri värdering via telefon. Vi köper allt
          från äldre fordon till nyare modeller och är även intresserade av objekt med olika typer
          av fel och skador.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Vår målsättning är att erbjuda en korrekt och konkurrenskraftig värdering och göra hela
          försäljningen så enkel som möjligt.
        </p>
      </section>

      {/* What we buy */}
      <section className="bg-sand px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Vi köper bland annat
            </h2>
            <p className="mt-4 text-muted-foreground">
              Vi köper allt av intresse – ring och hör vad vi kan erbjuda för ditt fordon!
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boughtItems.map((item) => (
              <BoughtItemCard key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Vi kan även hjälpa dig med
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
              </div>
              <p className="font-medium text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Fordon vi köpt
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ett urval av husbilar och husvagnar vi har köpt in.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-2xl bg-card shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide pickup */}
      <section className="bg-forest px-6 py-16 text-forest-foreground sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <MapPin className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            Vi hämtar i hela Sverige
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-foreground/90">
            Har du en husbil eller husvagn långt från oss? Inga problem. Vi kan hämta fordon i hela
            Sverige enligt överenskommelse.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-forest-foreground/90">
            Du behöver inte ordna transport själv – kontakta oss så hittar vi en smidig lösning.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Sälj din husbil eller husvagn idag
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Vill du veta vad din husbil eller husvagn är värd?
        </p>
        <p className="mt-2 text-lg text-muted-foreground">
          Ring Ljunggrens Husbilar idag för en kostnadsfri värdering.
        </p>
        <div className="mt-10">
          <PhoneButton large />
        </div>
        <p className="mt-6 text-sm font-medium text-muted-foreground">
          Snabb & smidig affär – tryggt och enkelt.
        </p>
      </section>

      {/* Contact form */}
      <section id="kontakt" className="bg-sand px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Kontakta oss
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fyll i formuläret så återkommer vi till dig. Du kan också ringa oss
              direkt på{" "}
              <a href={PHONE_HREF} className="font-medium text-brand hover:underline">
                {PHONE_NUMBER}
              </a>
              .
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-sand px-6 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg font-semibold text-foreground">Ljunggrens Husbilar</p>
          <p className="mt-2 text-muted-foreground">
            Vi köper husbilar & husvagnar över hela Sverige.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex items-center justify-center gap-2 text-lg font-medium text-brand hover:underline"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_NUMBER}
          </a>
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ljunggrens Husbilar. Alla rättigheter förbehållna.
          </p>
        </div>
      </footer>
    </main>
  );
}
