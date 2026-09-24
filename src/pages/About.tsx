import { Building2, Eye, Route, ShieldCheck, Users2 } from "lucide-react";

import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import Footer from "../components/layout/Footer";

const objectives = [
  {
    icon: Eye,
    title: "Transparence",
    text: "Améliorer la visibilité sur l’état d’exécution des dépenses.",
  },
  {
    icon: Route,
    title: "Traçabilité",
    text: "Permettre de suivre les différentes étapes du traitement.",
  },
  {
    icon: Users2,
    title: "Suivi",
    text: "Faciliter l’identification des dossiers en cours et des situations à surveiller.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité",
    text: "Contribuer au respect du circuit et des principes budgétaires.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                À propos
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Comprendre la plateforme, son rôle et son rattachement institutionnel.</h1>
              <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
                La plateforme de suivi de l’exécution des dépenses publiques a pour objectif de faciliter la visibilité sur le traitement des dossiers et de rendre plus lisible le parcours de la dépense publique.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.35)] sm:p-8">
              <SectionTitle eyebrow="Présentation" title="Une plateforme orientée lisibilité" description="Le portail s’inscrit dans une logique institutionnelle sobre et crédible, pensée pour le suivi de l’exécution des dépenses publiques." />
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-muted">
                {[
                  "Portail institutionnel",
                  "Suivi frontend",
                  "Données de suivi",
                  "Navigation multi-page",
                ].map((item) => (
                  <span className="rounded-full border border-line bg-canvas px-3 py-1.5" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-brand-950 p-6 text-white shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
                  <Building2 size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">Rattachement</p>
                  <p className="mt-1 text-lg font-bold">Service Financier et du Budget · MIDSP</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Une plateforme rattachée au Service Financier et du Budget du MIDSP, pensée comme un outil pédagogique de présentation et de suivi.
              </p>
              <div className="mt-8">
                <Button href="/dashboard" variant="light" arrow>
                  Voir le tableau de bord
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {objectives.map(({ icon: Icon, title, text }) => (
              <article className="rounded-2xl border border-line bg-white p-5" key={title}>
                <Icon className="text-brand-700" size={20} />
                <h2 className="mt-4 text-lg font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
