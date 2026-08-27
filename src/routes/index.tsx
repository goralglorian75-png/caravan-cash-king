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
  MailCheck,
  ArrowRight,
  Banknote,
  Star,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  submitContactForm,
  sendTestMessage,
} from "../lib/contact.functions";
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
  { icon: Banknote, text: "Inlösen av kvarvarande/restskuld" },
  { icon: Truck, text: "Hämtning av din husbil eller husvagn" },
  { icon: MapPin, text: "Hämtning över hela Sverige" },
  { icon: Clock, text: "Snabb och smidig affär" },
  { icon: ShieldCheck, text: "Kontant betalning på plats enligt överenskommelse" },
  { icon: Phone, text: "Seriös värdering och enkel försäljning" },
];

const stats = [
  { value: "1990–2026", label: "Årsmodeller vi köper" },
  { value: "4–12 m", label: "Alla fordonsstorlekar" },
  { value: "Hela", label: "Sverige – vi hämtar" },
  { value: "0 kr", label: "Kostnadsfri värdering" },
];

const steps = [
  {
    step: "01",
    title: "Ring eller skicka formuläret",
    text: "Berätta kort om fordonet – märke, årsmodell, mil och skick. Bilder är ett plus men inget krav.",
  },
  {
    step: "02",
    title: "Du får ett bud",
    text: "Vi gör en kostnadsfri värdering via telefon och lämnar ett tydligt och konkurrenskraftigt bud.",
  },
  {
    step: "03",
    title: "Vi hämtar och betalar",
    text: "Vi hämtar fordonet var du än är i Sverige, löser eventuell restskuld och betalar enligt överenskommelse.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
  light,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={[
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
          light
            ? "border-forest-foreground/25 text-accent"
            : "border-border bg-card text-brand",
        ].join(" ")}
      >
        {eyebrow}
      </span>
      <h2
        className={[
          "mt-5 text-balance text-3xl font-bold sm:text-4xl",
          light ? "text-forest-foreground" : "text-foreground",
        ].join(" ")}
      >
        {title}
      </h2>
      {text && (
        <p
          className={[
            "mt-4 text-pretty text-base leading-relaxed sm:text-lg",
            light ? "text-forest-foreground/80" : "text-muted-foreground",
          ].join(" ")}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest">
            <Truck className="h-5 w-5 text-accent" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
              Ljunggrens
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Husbilar
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#vikoper" className="transition-colors hover:text-foreground">Vi köper</a>
          <a href="#sagar" className="transition-colors hover:text-foreground">Så går det till</a>
          <a href="#galleri" className="transition-colors hover:text-foreground">Fordon</a>
          <a href="#kontakt" className="transition-colors hover:text-foreground">Kontakt</a>
        </nav>
        <PhoneButton className="shrink-0" />
      </div>
    </header>
  );
}

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
        "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-200",
        "bg-brand text-brand-foreground shadow-[0_10px_30px_-12px_var(--brand)] hover:-translate-y-0.5 hover:bg-brand/92 hover:shadow-[0_18px_38px_-14px_var(--brand)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        large ? "px-8 py-4 text-lg" : "px-5 py-2.5 text-sm sm:text-base",
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
    <li className="surface-card overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-start gap-3.5 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10">
          <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
        </span>
        <span className="flex-1 font-semibold leading-snug text-foreground">
          {item.title}
        </span>
        <ChevronDown
          className={[
            "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen ? "rotate-180 text-brand" : "",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>
      <div
        className={[
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p className="border-t border-border/60 px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      </div>
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
  "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground/60 hover:bg-secondary/60 focus:border-brand focus:bg-card focus:outline-none focus:ring-4 focus:ring-brand/15";

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
      <div className="surface-card rounded-3xl p-10 text-center">
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
      className="surface-card rounded-3xl p-6 sm:p-8"
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

function TestEmailButton() {
  const sendTest = useServerFn(sendTestMessage);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleClick() {
    setState("sending");
    setMessage("");
    try {
      await sendTest();
      setState("sent");
      setMessage(
        "Testmeddelande skickat! Kolla inkorgen (och skräpposten) hos mottagaren.",
      );
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Testmeddelandet kunde inte skickas.",
      );
    }
  }

  return (
    <div className="mt-4 rounded-xl border border-dashed border-border p-4">
      <button
        type="button"
        onClick={handleClick}
        disabled={state === "sending"}
        className="inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 disabled:opacity-60"
      >
        {state === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <MailCheck className="h-4 w-4" aria-hidden="true" />
        )}
        {state === "sending" ? "Skickar test…" : "Skicka testmeddelande"}
      </button>
      <p className="mt-2 text-xs text-muted-foreground">
        Testknapp för dig som ägare – skickar ett färdigt testmeddelande så du
        kan verifiera att e-posten fungerar.
      </p>
      {message && (
        <p
          className={`mt-2 text-sm font-medium ${
            state === "error" ? "text-destructive" : "text-brand"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Modern husbil i svensk landsbygd"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="hero-veil absolute inset-0" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/20 bg-forest-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                Seriösa köpare sedan många år
              </span>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] text-forest-foreground sm:text-5xl lg:text-6xl">
                Vi köper husbilar &amp; husvagnar –{" "}
                <span className="text-accent">alla märken och modeller</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-forest-foreground/85">
                Har du en husbil eller husvagn du vill sälja? Vi köper fordon över
                hela Sverige – oavsett märke, modell eller skick. Kostnadsfri
                värdering via telefon.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PhoneButton large />
                <a
                  href="#kontakt"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-forest-foreground/30 px-7 py-4 text-base font-semibold text-forest-foreground backdrop-blur-sm transition-colors hover:bg-forest-foreground/10"
                >
                  Få värdering via formulär
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </div>

              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-medium text-forest-foreground/80">
                {[
                  "Kostnadsfri värdering",
                  "Hämtning i hela Sverige",
                  "Betalning på plats",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 sm:px-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-7 text-center lg:py-9">
                <p className="font-display text-2xl font-bold text-brand sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Intro / trust */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Vi betalar bäst i stan"
            title="En ärlig värdering och en enkel affär"
            text="Vi är seriösa köpare och erbjuder kostnadsfri värdering via telefon – från äldre fordon till nyare modeller, även objekt med fel och skador."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Trygg affär",
                text: "Tydliga villkor, korrekta papper och betalning enligt överenskommelse.",
              },
              {
                icon: Banknote,
                title: "Konkurrenskraftigt bud",
                text: "Vår målsättning är alltid en korrekt och marknadsmässig värdering.",
              },
              {
                icon: Clock,
                title: "Snabbt besked",
                text: "Ring så får du oftast ett bud direkt på telefon – utan krångel.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="surface-card rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we buy */}
        <section id="vikoper" className="bg-sand px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Vi köper bland annat"
              title="Nästan allt är av intresse"
              text="Klicka på en punkt för att läsa mer – och ring oss så hör du vad vi kan erbjuda för ditt fordon."
            />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {boughtItems.map((item) => (
                <BoughtItemCard key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="sagar" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Så går det till"
            title="Tre enkla steg till en klar affär"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="surface-card relative rounded-2xl p-7">
                <span className="font-display text-4xl font-extrabold text-brand/15">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-sand px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Service"
              title="Vi kan även hjälpa dig med"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="surface-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <p className="font-medium leading-snug text-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="galleri" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Referenser"
            title="Fordon vi köpt"
            text="Ett urval av husbilar och husvagnar vi har köpt in."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, i) => (
              <div
                key={img.src}
                className={[
                  "group relative overflow-hidden rounded-2xl bg-card shadow-soft",
                  i === 0 ? "sm:col-span-2 sm:row-span-1" : "",
                ].join(" ")}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={[
                    "w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]",
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]",
                  ].join(" ")}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="pointer-events-none absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-forest-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Nationwide pickup + CTA */}
        <section className="relative overflow-hidden bg-forest px-5 py-20 text-forest-foreground sm:px-6 sm:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Hela Sverige
              </span>
              <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl">
                Vi hämtar din husbil eller husvagn – var du än är
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-forest-foreground/85">
                Har du ett fordon långt från oss? Inga problem. Du behöver inte
                ordna transport själv – kontakta oss så hittar vi en smidig
                lösning enligt överenskommelse.
              </p>
            </div>

            <div className="rounded-3xl border border-forest-foreground/15 bg-forest-foreground/[0.06] p-8 backdrop-blur-sm sm:p-10">
              <h3 className="text-2xl font-bold">Sälj din husbil idag</h3>
              <p className="mt-3 text-forest-foreground/80">
                Vill du veta vad ditt fordon är värt? Ring för en kostnadsfri
                värdering – snabbt, tryggt och enkelt.
              </p>
              <div className="mt-8">
                <PhoneButton large className="w-full sm:w-auto" />
              </div>
              <p className="mt-4 text-sm text-forest-foreground/70">
                Snabb &amp; smidig affär – tryggt och enkelt.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="kontakt" className="px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Kontakt"
              title="Kontakta oss"
              text="Fyll i formuläret så återkommer vi till dig så snart vi kan."
            />
            <p className="mt-4 text-center text-muted-foreground">
              Eller ring direkt på{" "}
              <a href={PHONE_HREF} className="font-semibold text-brand hover:underline">
                {PHONE_NUMBER}
              </a>
              .
            </p>
            <div className="mt-10">
              <ContactForm />
              <TestEmailButton />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-forest-foreground/10 bg-forest px-5 py-14 text-forest-foreground sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-foreground/10">
              <Truck className="h-5 w-5 text-accent" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-base font-bold uppercase tracking-[0.14em]">
                Ljunggrens Husbilar
              </p>
              <p className="mt-0.5 text-sm text-forest-foreground/70">
                Vi köper husbilar &amp; husvagnar i hela Sverige.
              </p>
            </div>
          </div>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/25 px-6 py-3 text-lg font-semibold transition-colors hover:bg-forest-foreground/10"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            {PHONE_NUMBER}
          </a>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-forest-foreground/10 pt-6 text-center text-sm text-forest-foreground/60">
          © {new Date().getFullYear()} Ljunggrens Husbilar. Alla rättigheter förbehållna.
        </p>
      </footer>
    </div>
  );
}
