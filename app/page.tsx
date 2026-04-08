import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: "camping",
    title: "Auto kamp u zelenilu",
    text: "10 mesta za kampere ili kamp kućice i 20 mesta za automobile i šatore u tihom, prozračnom pejzažu.",
  },
  {
    icon: "cottage",
    title: "Četiri tipske kućice",
    text: "Savremeni apartmani za 2-4 osobe, zamišljeni za parove, male porodice i duže vikend-begove.",
  },
  {
    icon: "hiking",
    title: "Ture i obilazak kraja",
    text: "Samostalne i organizovane ture kroz prirodu i znamenitosti u radijusu do 50 km oko Ivanjice.",
  },
];

const campFeatures = [
  "Veliki zajednički higijenski objekat",
  "Natkriveni centralni prostor sa ognjištem",
  "Samouslužna pica peć i roštilj zona",
  "Staza zdravlja kroz hladovinu i šumu",
  "Park sa klupama i prirodnom vodenom površinom za kupanje",
  "Mir, hladniji vazduh i 700 m nadmorske visine",
];

const apartmentFeatures = [
  "4 kućice sličnog tipa za 2-4 osobe",
  "Topao enterijer u prirodnim materijalima",
  "Natkrivena terasa i pogled na pejzaž",
  "Odlična baza za vikend i aktivni odmor",
];

const tourIdeas = [
  {
    name: "Jutarnje šetnje i staza zdravlja",
    description:
      "Lagani ritam za goste koji žele tišinu, vazduh i svakodnevni reset bez automobila.",
  },
  {
    name: "Vidikovci, reke i manastiri",
    description:
      "Izleti do prirodnih i kulturnih tačaka zapadne Srbije u krugu od 50 km, individualno ili sa vodičem.",
  },
  {
    name: "Porodični dan u prirodi",
    description:
      "Kombinacija parka, kupanja, roštilja i sporog popodneva uz vatru i druženje.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Planinski pejzaž sa borovima i vodom",
    label: "Mali Svet u ritmu planine",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    alt: "Kamp prikolica u prirodi",
    label: "Prostor za kamper i kamp kućicu",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Drvene kućice u prirodi",
    label: "Apartmanske kućice za miran boravak",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    alt: "Prirodna vodena površina u zelenilu",
    label: "Kupanje, šetnja i sporiji tempo dana",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <Badge>{eyebrow}</Badge>
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none text-[color:var(--stone-900)] sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-[color:var(--stone-700)] sm:text-lg">
        {text}
      </p>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  inverse = false,
}: {
  icon: string;
  label: string;
  inverse?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`material-symbols-outlined mt-0.5 ${
          inverse ? "text-white/90" : "text-[color:var(--clay-500)]"
        }`}
      >
        {icon}
      </span>
      <span
        className={`text-sm leading-6 ${
          inverse ? "text-white/80" : "text-[color:var(--stone-700)]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(39,76,50,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(184,111,71,0.18),_transparent_26%)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/50 bg-white/65 px-4 py-3 backdrop-blur sm:px-6">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--stone-900)]">
                Mali Svet
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--stone-700)]">
                Auto kamp i apartmani
              </p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-[color:var(--stone-700)] md:flex">
              <a href="#kamp" className="transition hover:text-[color:var(--forest-700)]">
                Kamp
              </a>
              <a href="#apartmani" className="transition hover:text-[color:var(--forest-700)]">
                Apartmani
              </a>
              <a href="#ture" className="transition hover:text-[color:var(--forest-700)]">
                Ture
              </a>
              <a href="#kontakt" className="transition hover:text-[color:var(--forest-700)]">
                Kontakt
              </a>
            </nav>
          </header>

          <div className="grid gap-10 pb-10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-16">
            <div className="space-y-8">
              <Badge className="bg-[color:var(--sand-50)]/80">
                Zapadna Srbija • okolina Ivanjice • 700 m nv
              </Badge>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-balance font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.94] text-[color:var(--stone-900)] sm:text-7xl lg:text-8xl">
                  Mesto gde kamp, kućice i priroda dišu kao jedna priča.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[color:var(--stone-700)] sm:text-lg">
                  Mali Svet je zamišljen kao mirno utočište za ljude koji žele više vazduha,
                  više zelenila i manje buke. Deo prostora je posvećen auto kampu, deo
                  intimnim apartmanskim kućicama, a sve zajedno okuplja centralni prostor
                  za druženje, vatru, hranu i sporiji tempo dana.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className={cn(buttonVariants({ size: "lg" }))}>
                  Pošaljite upit
                </a>
                <a
                  href="#kamp"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  Istražite prostor
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <Card key={item.title} className="bg-white/70">
                    <CardContent className="space-y-3 p-5">
                      <span className="material-symbols-outlined text-[color:var(--forest-700)]">
                        {item.icon}
                      </span>
                      <h3 className="text-lg font-semibold text-[color:var(--stone-900)]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-[color:var(--stone-700)]">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="photo-frame aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
                  alt="Priroda i planinski pejzaž za Mali Svet"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <Card className="absolute -bottom-8 left-4 max-w-xs bg-[color:var(--sand-50)]/90 sm:left-8">
                <CardContent className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--forest-700)]">
                    Dnevni ritam
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--stone-900)]">
                    Vatra, voda, šetnja i mir.
                  </p>
                  <p className="text-sm leading-6 text-[color:var(--stone-700)]">
                    Jutro počinje u zelenilu, popodne se seli ka kupanju i turama, a veče
                    završava pod krovom uz peć, roštilj i razgovor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Card className="overflow-hidden bg-[linear-gradient(135deg,_rgba(39,76,50,0.94),_rgba(84,114,77,0.94))] text-white">
          <CardContent className="flex h-full flex-col justify-between gap-8 p-8">
            <div className="space-y-4">
              <Badge className="w-fit border-white/20 bg-white/10 text-white">
                Reklama u komšiluku
              </Badge>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none">
                Kafanika
              </h2>
              <p className="max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                U neposrednoj blizini nalazi se kafe restoran Kafanika, idealan za jutarnju
                kafu, ručak posle ture ili veče uz društvo. Na ovom sajtu ga predstavljamo
                kao preporuku i komšijsku priču koja upotpunjuje boravak u Malom Svetu.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-white/80">
              <span className="material-symbols-outlined">local_cafe</span>
              Kafe restoran sa posebnim sajtom
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="grid gap-4 p-0 sm:grid-cols-2">
            {gallery.slice(0, 2).map((item) => (
              <div key={item.label} className="space-y-3">
                <div className="photo-frame aspect-[4/3]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
                <p className="text-sm font-medium text-[color:var(--stone-700)]">{item.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="kamp" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionTitle
            eyebrow="Auto kamp"
            title="Kamp namenjen i putnicima u prolazu i ljudima koji žele da ostanu."
            text="Prostor je osmišljen da prihvati kampere, kamp kućice, automobile i šatore bez osećaja gužve. Komfor dolazi iz dobre organizacije prostora, velikog zajedničkog objekta za higijenu i centralnog mesta okupljanja koje stvara atmosferu malog sela u prirodi."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {campFeatures.map((feature) => (
              <Card key={feature} className="bg-white/70">
                <CardContent className="flex items-start gap-3 p-5">
                  <span className="material-symbols-outlined mt-1 text-[color:var(--forest-700)]">
                    check_circle
                  </span>
                  <p className="text-sm leading-6 text-[color:var(--stone-700)]">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="photo-frame aspect-[16/10]">
            <Image
              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1600&q=80"
              alt="Kamp zona uz prirodu"
              fill
              className="object-cover"
            />
          </div>
          <Card className="bg-[color:var(--sand-50)]/85">
            <CardContent className="space-y-5 p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--forest-700)]">
                Kapacitet kampa
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[color:var(--stone-900)]">
                    10
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--stone-700)]">
                    mesta za kampere i kamp kućice
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[color:var(--stone-900)]">
                    20
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--stone-700)]">
                    mesta za automobile i šatore
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-2">
                <InfoRow icon="local_fire_department" label="Centralni natkriveni objekat stvara osećaj zajednice i produžava boravak i kada zahladi." />
                <InfoRow icon="outdoor_grill" label="Roštilj i pica peć podstiču spontane večeri, male događaje i porodično okupljanje." />
                <InfoRow icon="pool" label="Prirodna vodena površina i veliki park daju kampu karakter odmora, a ne samo noćenja." />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="apartmani" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
            {gallery.slice(2).map((item, index) => (
              <div key={item.label} className={index === 0 ? "sm:mt-10" : ""}>
                <div className="photo-frame aspect-[4/5]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
                <p className="mt-3 text-sm font-medium text-[color:var(--stone-700)]">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <SectionTitle
              eyebrow="Apartmani"
              title="Male kućice za ljude koji traže privatnost, toplinu i pogled."
              text="Četiri apartmanske kućice istog tipa osmišljene su kao jednostavno, lepo i mirno utočište za 2-4 osobe. Ugođaj je između planinske vikendice i savremenog mini retreat prostora, dovoljno intiman za odmor, ali i dovoljno praktičan za aktivne dane u prirodi."
            />
            <div className="grid gap-4">
              {apartmentFeatures.map((feature) => (
                <Card key={feature} className="bg-white/70">
                  <CardContent className="flex items-start gap-3 p-5">
                    <span className="material-symbols-outlined mt-1 text-[color:var(--clay-500)]">
                      house
                    </span>
                    <p className="text-sm leading-6 text-[color:var(--stone-700)]">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ture" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle
            eyebrow="Doživljaji"
            title="Boravak je više od smeštaja: Mali Svet je baza za otkrivanje kraja."
            text="Lokacija u okolini Ivanjice na 700 metara nadmorske visine daje prijatniju klimu, čistiji vazduh i odličan pristup raznim prirodnim i kulturnim tačkama zapadne Srbije. Zato smo u priču uključili i samostalne i organizovane ture."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {tourIdeas.map((tour) => (
              <Card key={tour.name} className="bg-[color:var(--sand-50)]/85">
                <CardContent className="space-y-4 p-6">
                  <span className="material-symbols-outlined text-[color:var(--forest-700)]">
                    route
                  </span>
                  <h3 className="text-xl font-semibold text-[color:var(--stone-900)]">
                    {tour.name}
                  </h3>
                  <p className="text-sm leading-6 text-[color:var(--stone-700)]">
                    {tour.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <CardContent className="space-y-6 p-8 sm:p-10">
              <Badge>Zašto ovaj demo radi</Badge>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none text-[color:var(--stone-900)] sm:text-5xl">
                Mali Svet je predstavljen kao mali destination brand, ne samo kao spisak sadržaja.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--stone-700)]">
                Ceo ton sajta ide ka osećaju odmora, rituala i boravka u prirodi. Umesto
                generičnog turističkog sajta, priča je postavljena kao mesto kome se dolazi
                zbog atmosfere: kamp za slobodu, kućice za mir, ture za istraživanje i
                Kafanika za društveni sloj iskustva.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <InfoRow icon="forest" label="Priroda kao glavni ambijent" />
                <InfoRow icon="roofing" label="Natkriveni zajednički prostor" />
                <InfoRow icon="directions_walk" label="Šetnje, kupanje i izleti" />
              </div>
            </CardContent>
            <div className="photo-frame min-h-[22rem] rounded-none lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1600&q=80"
                alt="Druženje u prirodi uz logorsku atmosferu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Card className="bg-[linear-gradient(135deg,_rgba(29,28,23,0.97),_rgba(39,76,50,0.96))] text-white">
          <CardContent className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5">
              <Badge className="w-fit border-white/20 bg-white/10 text-white">
                Kontakt i informacije
              </Badge>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none sm:text-5xl">
                Demo sajt spreman za prve upite i dalje širenje.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/80">
                Za sada je fokus na prezentaciji prostora, atmosfere i ponude. Sledeća faza
                može da uključi galerije po smeštajnoj jedinici, detaljnije ture, kontakt
                formu, mapu i kasnije rezervacije.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="border-white/10 bg-white/10 text-white shadow-none">
                <CardContent className="space-y-4 p-6">
                  <InfoRow icon="location_on" label="Okolina Ivanjice, Zapadna Srbija" inverse />
                  <InfoRow icon="altitude" label="Približno 700 m nadmorske visine" inverse />
                  <InfoRow
                    icon="travel_explore"
                    label="Obilasci prirode i znamenitosti do 50 km"
                    inverse
                  />
                  <InfoRow
                    icon="family_restroom"
                    label="Prijateljski ambijent za parove, porodice i putnike"
                    inverse
                  />
                </CardContent>
              </Card>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="mailto:info@malisvet.rs" className={cn(buttonVariants({ size: "lg" }))}>
                  Kontaktirajte Mali Svet
                </a>
                <a
                  href="#kamp"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/20 text-white",
                  )}
                >
                  Pogledajte kamp i apartmane
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
