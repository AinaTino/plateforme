import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock3,
  Eye,
  FileCheck2,
  FileText,
  Route,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ispmLogo from "../imports/ispm.jpeg";
import midspLogo from "../imports/midsp.jpeg";
import midspBanner from "../imports/banniere.jpeg";

const principles = [
  {
    icon: Eye,
    title: "Transparence",
    text: "Faciliter la visibilité sur l’état d’avancement des dépenses publiques.",
  },
  {
    icon: Route,
    title: "Traçabilité",
    text: "Suivre le parcours d’un dossier à travers chaque étape de son exécution.",
  },
  {
    icon: ShieldCheck,
    title: "Respect des principes",
    text: "Contribuer au suivi des procédures budgétaires et des délais associés.",
  },
];

const steps = [
  { number: "01", label: "Engagement", icon: FileText },
  { number: "02", label: "Liquidation", icon: FileCheck2 },
  { number: "03", label: "Mandatement", icon: WalletCards },
  { number: "04", label: "Paiement", icon: CheckCircle2 },
];

const stats = [
  ["1 248", "Dossiers suivis"],
  ["87 %", "Dans les délais"],
  ["14 jours", "Délai moyen d’exécution"],
  ["326", "Dossiers en cours"],
];

const dossiers = [
  ["DEP-2026-001", "Fonctionnement", "Mandatement", "À jour", "success"],
  ["DEP-2026-002", "Investissement", "Liquidation", "En retard", "danger"],
  ["DEP-2026-003", "Prestation", "Paiement", "Payé", "info"],
];

function StatusBadge({ status, tone }: { status: string; tone: string }) {
  const tones: Record<string, string> = {
    success: "border-success-200 bg-success-50 text-success-800",
    danger: "border-danger-200 bg-danger-50 text-danger-800",
    info: "border-brand-200 bg-brand-50 text-brand-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-bold ${tones[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
      <div className="absolute -left-5 top-16 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -right-5 bottom-10 h-48 w-48 rounded-full bg-slate-200/70 blur-3xl" />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] sm:p-6">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div>
            <p className="text-sm font-bold">Suivi des dépenses</p>
            <p className="mt-1 text-xs text-muted">Vue d’ensemble · Septembre 2026</p>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
            <BarChart3 size={18} />
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {[
            ["1 248", "Dossiers"],
            ["87 %", "À temps"],
            ["14 j", "Délai moyen"],
          ].map(([value, label]) => (
            <div className="rounded-lg border border-line bg-canvas p-3" key={label}>
              <p className="text-lg font-bold tracking-tight sm:text-xl">{value}</p>
              <p className="mt-1 text-[10px] font-medium text-muted sm:text-xs">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-line p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold">Traitement mensuel</p>
              <span className="text-[10px] text-muted">Avr. — Sept.</span>
            </div>
            <div className="mt-6 flex h-28 items-end gap-2" aria-label="Graphique de traitement mensuel">
              {[52, 62, 70, 78, 88, 68].map((height, index) => (
                <div className="flex h-full flex-1 items-end" key={index}>
                  <div
                    className={`w-full rounded-t-sm ${
                      index === 4 ? "bg-brand-700" : "bg-brand-100"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-line p-4">
            <p className="text-xs font-bold">Circuit actif</p>
            <div className="mt-4 space-y-3">
              {["Engagement", "Liquidation", "Mandatement", "Paiement"].map(
                (label, index) => (
                  <div className="flex items-center gap-2.5" key={label}>
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full ${
                        index < 2
                          ? "bg-success-700 text-white"
                          : index === 2
                            ? "bg-brand-700 text-white"
                            : "border border-line bg-white text-muted"
                      }`}
                    >
                      {index < 2 ? <Check size={11} /> : <span className="text-[8px]">{index + 1}</span>}
                    </span>
                    <span className={`text-[11px] font-semibold ${index === 3 ? "text-muted" : ""}`}>
                      {label}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-lg sm:flex">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-success-50 text-success-700">
          <CheckCircle2 size={17} />
        </span>
        <span>
          <span className="block text-xs font-bold">Dossier mis à jour</span>
          <span className="block text-[10px] text-muted">Il y a quelques instants</span>
        </span>
      </div>
    </div>
  );
}

function HeroInstitutionStrip() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.28)] sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <img alt="MIDSP" className="h-14 w-auto shrink-0 object-contain sm:h-16" src={midspLogo} />
      </div>
      <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent lg:block" />
      <div className="flex min-w-0 items-center justify-end gap-3">
        <img alt="ISPM" className="h-14 w-auto shrink-0 object-contain sm:h-16" src={ispmLogo} />
      </div>

    </div>
  );
}

function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-[0_22px_50px_-38px_rgba(15,23,42,0.35)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[18/8] lg:aspect-[20/8]">
        <img
          alt="Bannière institutionnelle"
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={midspBanner}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/55 via-brand-950/20 to-white/5" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 py-4 text-white sm:px-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-200">
              Institution
            </p>
            <p className="mt-1 text-sm font-semibold sm:text-base">Service Financier et du Budget</p>
          </div>
          <p className="text-right text-[11px] font-medium text-slate-200 sm:text-xs">
            Bannière de démonstration
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-line bg-white">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:py-28">
            <div>
              <HeroInstitutionStrip />
              <div className="inline-flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                <span className="h-2 w-2 rounded-full bg-brand-600" />
                Plateforme de suivi
              </div>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.5rem]">
                Suivre la dépense publique,{" "}
                <span className="text-brand-700">étape par étape.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                Une plateforme de démonstration dédiée au suivi de l’exécution des
                dépenses publiques, de l’engagement jusqu’au paiement.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/dashboard" arrow>
                  Explorer le tableau de bord
                </Button>
                <Button href="/circuit" variant="secondary">
                  Comprendre le circuit
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-muted">
                {["Données lisibles", "Suivi transparent", "Accès simplifié"].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <Check className="text-success-700" size={15} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <HeroBanner />
              <HeroDashboard />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionTitle
            align="center"
            description="Un outil conçu pour rendre l’information budgétaire plus accessible et le parcours de chaque dépense plus facile à comprendre."
            eyebrow="Pourquoi cette plateforme ?"
            title="Une vision claire de l’exécution des dépenses publiques"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article
                className="group rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_16px_35px_-28px_rgba(15,23,42,0.5)] sm:p-7"
                key={title}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                    <Icon size={21} />
                  </span>
                  <span className="font-mono text-xs text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle
                description="Chaque dépense suit un circuit composé de quatre étapes principales, de la création de l’obligation jusqu’au règlement."
                eyebrow="Le circuit en 4 étapes"
                title="De l’engagement au paiement"
              />
              <a
                className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900"
                href="/circuit"
              >
                Découvrir le circuit <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative mt-14 grid gap-5 md:grid-cols-4">
              <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-line md:block" />
              {steps.map(({ number, label, icon: Icon }, index) => (
                <article className="relative rounded-xl border border-line bg-canvas p-5 md:border-0 md:bg-transparent md:p-0 md:text-center" key={label}>
                  <div className="flex items-center gap-4 md:flex-col">
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-white bg-brand-900 text-white shadow-sm">
                      <Icon size={20} />
                    </span>
                    <div className="md:mt-3">
                      <p className="text-xs font-bold text-brand-700">{number}</p>
                      <h3 className="mt-1 text-base font-bold">{label}</h3>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-5 z-20 hidden bg-white text-slate-300 md:block" size={22} />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  L’activité en un regard
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Indicateurs de suivi
                </h2>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-warning-600" />
                Données de démonstration
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map(([value, label], index) => (
                <div
                  className={`py-8 pr-4 sm:py-10 ${index > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}`}
                  key={label}
                >
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">{value}</p>
                  <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionTitle
                description="Des indicateurs synthétiques, une lecture rapide des statuts et un accès direct aux dossiers qui nécessitent une attention."
                eyebrow="Tableau de bord"
                title="Une vision synthétique de l’exécution"
              />
              <ul className="mt-7 space-y-4">
                {[
                  "Visualiser les indicateurs essentiels",
                  "Repérer les dossiers en retard",
                  "Consulter chaque étape du traitement",
                ].map((item) => (
                  <li className="flex items-center gap-3 text-sm font-semibold" key={item}>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-success-50 text-success-700">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/dashboard" arrow>
                  Voir le tableau de bord
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)]">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div>
                  <p className="text-sm font-bold">Dossiers récents</p>
                  <p className="mt-1 text-xs text-muted">Mise à jour du 23 septembre 2026</p>
                </div>
                <Clock3 className="text-muted" size={18} />
              </div>
              <div className="grid grid-cols-3 gap-3 border-b border-line bg-canvas p-4">
                {[
                  ["326", "En cours"],
                  ["18 %", "En retard"],
                  ["8 %", "Payés"],
                ].map(([value, label]) => (
                  <div className="rounded-lg border border-line bg-white p-3" key={label}>
                    <p className="text-xl font-bold">{value}</p>
                    <p className="mt-1 text-[11px] text-muted">{label}</p>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-line">
                {dossiers.map(([reference, type, step, status, tone]) => (
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 transition hover:bg-slate-50 sm:grid-cols-[1.1fr_1fr_1fr_auto]" key={reference}>
                    <div>
                      <p className="text-xs font-bold">{reference}</p>
                      <p className="mt-1 text-[11px] text-muted sm:hidden">{type} · {step}</p>
                    </div>
                    <span className="hidden text-xs text-muted sm:block">{type}</span>
                    <span className="hidden text-xs font-semibold sm:block">{step}</span>
                    <StatusBadge status={status} tone={tone} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="overflow-hidden rounded-2xl bg-brand-950">
              <div className="grid lg:grid-cols-[1fr_0.85fr]">
                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                    Rattachement institutionnel
                  </p>
                  <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                    Une plateforme rattachée au Service Financier et du Budget du MIDSP.
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
                    Un espace pédagogique au service d’une meilleure compréhension de
                    l’exécution des dépenses publiques.
                  </p>
                  <div className="mt-8">
                    <Button href="/about" variant="light" arrow>
                      En savoir plus
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-64 overflow-hidden border-t border-white/10 bg-[#555346] lg:border-l lg:border-t-0">
                  <img
                    alt="Ministère de l’Industrialisation et du Développement du Secteur Privé"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                    src={midspBanner}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-950/35 to-transparent" />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-xl border border-line bg-canvas px-6 py-5 sm:flex-row">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  Partenaire représenté
                </p>
                <p className="mt-1 text-sm font-semibold">
                  ISPM · Identité institutionnelle partenaire
                </p>
              </div>
              <img alt="Logo ISPM" className="h-20 w-auto object-contain" src={ispmLogo} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
