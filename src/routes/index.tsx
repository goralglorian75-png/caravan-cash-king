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
  
  ArrowRight,
  Banknote,
  Wrench,
  Menu,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
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
          "Vi köper din husbil eller husvagn – tryggt, enkelt och i hela Sverige. Alla märken, modeller och skick. Kostnadsfri värdering och betalning på plats. Ring 076-237 90 95.",
      },
      { property: "og:title", content: "Ljunggrens Husbilar | Vi köper husbilar & husvagnar" },
      {
        property: "og:description",
        content:
          "Kostnadsfri värdering, hämtning i hela Sverige och betalning på plats. Vi köper alla märken, modeller och skick.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ljunggrens Husbilar | Vi köper husbilar & husvagnar" },
      {
        name: "twitter:description",
        content:
          "Kostnadsfri värdering, hämtning i hela Sverige och betalning på plats.",
      },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const PHONE_NUMBER = "076-237 90 95";
const PHONE_HREF = "tel:+46762379095";

const navLinks = [
  { href: "#vikoper", label: "Vi köper" },
  { href: "#sagar", label: "Så går det till" },
  { href: "#galleri", label: "Fordon" },
  { href: "#kontakt", label: "Kontakt" },
];

const trustBadges = [
  "Betalning på plats",
  "Hämtning i hela Sverige",
  "Även defekta/obesiktade fordon",
];

const stats = [
  { value: "1990–2026", label: "Årsmodeller" },
  { value: "4–12 m", label: "Alla fordonsstorlekar" },
  { value: "Hela Sverige", label: "Vi hämtar hos dig" },
  { value: "0 kr", label: "Kostnadsfri värdering" },
];

const valueProps = [
  {
    icon: Wrench,
    title: "Alla skick av intresse",
    text: "Vi köper även fordon med fukt-, motor- eller krockskador – och obesiktigade objekt.",
  },
  {
    icon: Clock,
    title: "Snabb affär & direkt bud",
    text: "Få en värdering över telefon utan krångel. Oftast lämnar vi bud direkt.",
  },
  {
    icon: Banknote,
    title: "Lösning av restskuld",
    text: "Vi hjälper dig med finansiering som står kvar och sköter pappersarbetet.",
  },
];

const steps = [
  {
    step: "01",
    title: "Kontakta oss",
    text: "Ring eller fyll i formuläret. Berätta kort om fordonet – typ, årsmodell, mil och skick.",
  },
  {
    step: "02",
    title: "Få ett bud",
    text: "Vi gör en kostnadsfri värdering och lämnar ett tydligt, konkurrenskraftigt bud.",
  },
  {
    step: "03",
    title: "Hämtning & betalning",
    text: "Vi hämtar fordonet var du än är i Sverige och betalar enligt överenskommelse.",
  },
];

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

const services = [
  { icon: Banknote, text: "Inlösen av kvarvarande restskuld" },
  { icon: Truck, text: "Hämtning av din husbil eller husvagn" },
  { icon: MapPin, text: "Hämtning över hela Sverige" },
  { icon: Clock, text: "Snabb och smidig affär" },
  { icon: ShieldCheck, text: "Betalning på plats enligt överenskommelse" },
  { icon: Phone, text: "Seriös värdering och enkel försäljning" },
];

/* ---------- Scroll reveal ---------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Shared UI ---------- */

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
        "bg-brand text-brand-foreground shadow-[0_10px_28px_-12px_var(--brand)] hover:-translate-y-0.5 hover:bg-brand/92 hover:shadow-[0_18px_38px_-14px_var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        large ? "px-7 py-4 text-base sm:text-lg" : "px-5 py-2.5 text-sm",
        className,
      ].join(" ")}
    >
      <Phone className={large ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      {PHONE_NUMBER}
    </a>
  );
}

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

function BrandMark({ light }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span
        className={[
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          light ? "bg-forest-foreground/10" : "bg-forest",
        ].join(" ")}
      >
        <Truck className="h-5 w-5 text-accent" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span
          className={[
            "block font-display text-sm font-bold uppercase tracking-[0.14em]",
            light ? "text-forest-foreground" : "text-foreground",
          ].join(" ")}
        >
          Ljunggrens
        </span>
        <span
          className={[
            "block text-[11px] font-medium uppercase tracking-[0.2em]",
            light ? "text-forest-foreground/70" : "text-muted-foreground",
          ].join(" ")}
        >
          Husbilar
        </span>
      </span>
    </a>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-6 md:flex md:justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={PHONE_HREF}
            aria-label={`Ring ${PHONE_NUMBER}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand/92 hover:shadow-[0_10px_24px_-12px_var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meny"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
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
        <span className="min-w-0 flex-1 font-semibold leading-snug text-foreground">
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

/* ---------- Lead form ---------- */

const inputClass =
  "w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground/60 hover:bg-secondary focus:border-brand focus:bg-card focus:outline-none focus:ring-4 focus:ring-brand/15";

function ValuationForm() {
  const submit = useServerFn(submitContactForm);
  const [vehicleType, setVehicleType] = useState<"husbil" | "husvagn">("husbil");
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
          regnr: String(fd.get("regnr") ?? "").toUpperCase(),
          vehicleType,
          condition: String(fd.get("condition") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          email: String(fd.get("email") ?? ""),
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
          Tack för din förfrågan!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Vi har tagit emot uppgifterna och hör av oss med en värdering så snart
          som möjligt.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand hover:underline"
        >
          Skicka en till förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card rounded-3xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="regnr" className="mb-1.5 block text-sm font-medium text-foreground">
            Registreringsnummer
          </label>
          <input
            id="regnr"
            name="regnr"
            type="text"
            maxLength={15}
            placeholder="ABC 123"
            className={`${inputClass} uppercase`}
          />
        </div>
        <div>
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Fordonstyp *
          </span>
          <div className="grid grid-cols-2 gap-2 rounded-xl border border-border bg-secondary/50 p-1">
            {(["husbil", "husvagn"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setVehicleType(t)}
                aria-pressed={vehicleType === t}
                className={[
                  "rounded-lg px-3 py-2.5 text-sm font-semibold capitalize transition-all",
                  vehicleType === t
                    ? "bg-brand text-brand-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
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
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            autoComplete="email"
            placeholder="din@epost.se"
            className={inputClass}
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="condition" className="mb-1.5 block text-sm font-medium text-foreground">
          Skick / beskrivning *
        </label>
        <textarea
          id="condition"
          name="condition"
          required
          maxLength={2000}
          rows={5}
          placeholder="Märke, årsmodell, mil och eventuella skador eller fel."
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
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground shadow-[0_12px_30px_-14px_var(--brand)] transition-all hover:-translate-y-0.5 hover:bg-brand/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 sm:text-lg"
      >
        {status === "sending" ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-5 w-5" aria-hidden="true" />
        )}
        {status === "sending" ? "Skickar…" : "Skicka för gratis värdering"}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Kostnadsfritt och utan förpliktelser. Vi hör av oss så snart vi kan.
      </p>
    </form>
  );
}

/* ---------- Page ---------- */

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
              alt="Modern husbil i svensk natur"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="hero-veil absolute inset-0" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/20 bg-forest-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Seriösa köpare i hela Sverige
              </span>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] text-forest-foreground sm:text-5xl lg:text-6xl">
                Vi köper din husbil &amp; husvagn –{" "}
                <span className="text-accent">tryggt, enkelt och i hela Sverige</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-forest-foreground/85">
                Alla märken, modeller och skick. Kostnadsfri värdering och
                betalning på plats.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[0_14px_34px_-14px_var(--brand)] transition-all hover:-translate-y-0.5 hover:bg-brand/92 sm:text-lg"
                >
                  Få kostnadsfri värdering
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-forest-foreground/30 px-7 py-4 text-base font-semibold text-forest-foreground backdrop-blur-sm transition-colors hover:bg-forest-foreground/10 sm:text-lg"
                >
                  <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                  Ring oss: {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="border-y border-border bg-forest">
          <ul className="mx-auto grid max-w-6xl gap-3 px-5 py-5 text-sm font-medium text-forest-foreground sm:grid-cols-3 sm:px-6">
            {trustBadges.map((t) => (
              <li key={t} className="flex items-center justify-center gap-2 text-center">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="px-2 py-7 text-center lg:py-9">
                  <p className="font-display text-2xl font-bold text-brand sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Value props */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Varför sälja till oss"
              title="En trygg och rak affär – utan krångel"
              text="Vi är seriösa köpare med tydliga villkor, snabba besked och hämtning i hela Sverige."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {valueProps.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="surface-card h-full rounded-2xl p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What we buy */}
        <section id="vikoper" className="bg-sand px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Vi köper bland annat"
                title="Nästan allt är av intresse"
                text="Klicka på en punkt för att läsa mer – och ring oss så hör du vad vi kan erbjuda för ditt fordon."
              />
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {boughtItems.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <BoughtItemCard item={item} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="sagar" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading eyebrow="Så går det till" title="Tre enkla steg till en klar affär" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 110}>
                <div className="surface-card relative h-full rounded-2xl p-7">
                  <span className="font-display text-4xl font-extrabold text-brand/20">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-sand px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="Service" title="Vi kan även hjälpa dig med" />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, text }, i) => (
                <Reveal key={text} delay={(i % 3) * 80}>
                  <div className="surface-card flex h-full items-center gap-4 rounded-2xl p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    </span>
                    <p className="min-w-0 font-medium leading-snug text-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="galleri" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Referenser"
              title="Fordon vi köpt"
              text="Ett urval av husbilar och husvagnar vi har köpt in."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 90} className={i === 0 ? "sm:col-span-2" : ""}>
                <div className="group relative overflow-hidden rounded-2xl bg-card shadow-soft">
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
              </Reveal>
            ))}
          </div>
        </section>

        {/* Nationwide pickup */}
        <section className="relative overflow-hidden bg-forest px-5 py-20 text-forest-foreground sm:px-6 sm:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <Reveal>
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
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-forest-foreground/15 bg-forest-foreground/[0.06] p-8 backdrop-blur-sm sm:p-10">
                <h3 className="text-2xl font-bold">Sälj din husbil idag</h3>
                <p className="mt-3 text-forest-foreground/80">
                  Vill du veta vad ditt fordon är värt? Ring för en kostnadsfri
                  värdering – snabbt, tryggt och enkelt.
                </p>
                <div className="mt-8">
                  <PhoneButton large className="w-full sm:w-auto" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Lead form */}
        <section id="kontakt" className="px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="Kontakt"
                title="Få en kostnadsfri värdering"
                text="Fyll i uppgifterna om ditt fordon så återkommer vi med ett bud."
              />
              <p className="mt-4 text-center text-muted-foreground">
                Eller ring direkt på{" "}
                <a href={PHONE_HREF} className="font-semibold text-brand hover:underline">
                  {PHONE_NUMBER}
                </a>
                .
              </p>
            </Reveal>
            <div className="mt-10">
              <ValuationForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-forest-foreground/10 bg-forest px-5 py-14 text-forest-foreground sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
          <div>
            <BrandMark light />
            <p className="mt-4 max-w-xs text-sm text-forest-foreground/70">
              Vi köper husbilar och husvagnar i hela Sverige – alla märken,
              modeller och skick.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Genvägar
            </p>
            <ul className="mt-4 space-y-2 text-sm text-forest-foreground/75">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-forest-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Kontakt
            </p>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-forest-foreground/25 px-5 py-3 text-base font-semibold transition-colors hover:bg-forest-foreground/10"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {PHONE_NUMBER}
            </a>
            <p className="mt-4 text-sm text-forest-foreground/70">
              Ljunggrens Husbilar
              <br />
              Hämtning i hela Sverige
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-forest-foreground/10 pt-6 text-center text-sm text-forest-foreground/60">
          © {new Date().getFullYear()} Ljunggrens Husbilar. Alla rättigheter förbehållna.
        </p>
      </footer>
    </div>
  );
}
