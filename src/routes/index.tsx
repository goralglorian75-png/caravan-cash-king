import { createFileRoute } from "@tanstack/react-router";
import { Phone, CheckCircle2, MapPin, ShieldCheck, Clock, Truck } from "lucide-react";
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
  "Husbilar och husvagnar från årsmodell 1990–2026",
  "Fordon från cirka 4 till 12 meter",
  "Obesiktigade husbilar och husvagnar",
  "Fordon med motorfel och andra tekniska fel",
  "Krockskadade husbilar",
  "Fuktskadade husbilar och husvagnar",
  "Importerade fordon",
  "Långmilare och kortmilare",
  "Diesel- och bensindrivna fordon",
  "Husbilar och husvagnar med olika typer av reparationsbehov",
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
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <span className="text-foreground">{item}</span>
              </li>
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
