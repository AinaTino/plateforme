import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, CheckCircle2, CircleCheckBig, Clock3, FileCheck2, WalletCards } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import Button from "../components/common/Button";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { circuitSteps } from "../data/circuit";
import { getDossier, statusMeta, stepLabels } from "../data/dossiers";

const stepIcons = {
  engagement: CheckCircle2,
  liquidation: FileCheck2,
  mandatement: WalletCards,
  paiement: CircleCheckBig,
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function formatCurrency(amount: number) {
  return `${new Intl.NumberFormat("fr-FR").format(amount)} Ar`;
}

export default function DossierDetail() {
  const { id } = useParams();
  const dossier = id ? getDossier(id) : undefined;

  if (!dossier) {
    return <Navigate replace to="/dashboard" />;
  }

  const status = statusMeta[dossier.status];
  const currentIndex = circuitSteps.findIndex((step) => step.id === dossier.step);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900" to="/dashboard">
              <ArrowLeft size={16} />
              Retour au tableau de bord
            </Link>

            <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                  Détail d’un dossier
                </div>
                <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{dossier.reference}</h1>
                <p className="mt-3 text-lg font-semibold text-muted">Dépense de {dossier.type.toLowerCase()}</p>
              </div>
              <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-bold ${status.tone === "danger" ? "border-danger-200 bg-danger-50 text-danger-800" : "border-success-200 bg-success-50 text-success-800"}`}>
                <status.icon size={15} />
                {status.label}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.22 }} className="rounded-3xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]">
              <h2 className="text-lg font-bold">Informations générales</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Type de dépense", dossier.type],
                  ["Référence", dossier.reference],
                  ["Date de création", formatDate(dossier.createdAt)],
                  ["Montant", formatCurrency(dossier.amount)],
                  ["Étape actuelle", stepLabels[dossier.step]],
                  ["Statut", status.label],
                ].map(([label, value]) => (
                  <div className="rounded-2xl border border-line bg-canvas p-4" key={label}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-ink">{value}</p>
                  </div>
                ))}
              </div>

              {dossier.status === "en_retard" && (
                <div className="mt-6 rounded-2xl border border-warning-200 bg-warning-50 p-4 text-warning-800">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="text-sm font-bold">Dossier en retard</p>
                      <p className="mt-1 text-sm leading-6">La liquidation n’a pas encore été finalisée. La situation affichée ici est fictive et sert uniquement à illustrer un cas d’alerte.</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.22, delay: 0.05 }} className="rounded-3xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-bold">Timeline du dossier</h2>
                <Clock3 className="text-brand-700" size={18} />
              </div>

              <div className="mt-6 space-y-3">
                {circuitSteps.map((step, index) => {
                  const StepIcon = stepIcons[step.id];
                  const isCompleted = step.id === "paiement" ? dossier.status === "paye" : index < currentIndex || dossier.status === "paye";
                  const isCurrent = step.id === dossier.step && dossier.status !== "paye";
                  const isDelayed = dossier.status === "en_retard" && isCurrent;

                  return (
                    <div className="grid grid-cols-[auto_1fr] gap-4" key={step.id}>
                      <div className="flex flex-col items-center">
                        <span className={`grid h-10 w-10 place-items-center rounded-full border ${isCompleted ? "border-success-200 bg-success-50 text-success-700" : isCurrent ? "border-brand-200 bg-brand-50 text-brand-700" : "border-line bg-white text-muted"}`}>
                          <StepIcon size={17} />
                        </span>
                        {index < circuitSteps.length - 1 && <span className="mt-2 h-full w-px bg-line" />}
                      </div>

                      <div className={`rounded-2xl border p-4 ${isCurrent ? "border-brand-200 bg-brand-50/60" : "border-line bg-canvas"}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{step.title}</p>
                            <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                          </div>
                          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${isCompleted ? "bg-success-50 text-success-800" : isCurrent ? "bg-brand-50 text-brand-800" : "bg-slate-100 text-muted"}`}>
                            {isCompleted ? "Terminé" : isCurrent ? "En cours" : "À venir"}
                          </span>
                        </div>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-xl border border-line bg-white p-3">
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Résultat attendu</p>
                            <p className="mt-2 text-sm text-ink">{step.expectedResult}</p>
                          </div>
                          <div className="rounded-xl border border-line bg-white p-3">
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Statut</p>
                            <p className="mt-2 text-sm text-ink">
                              {isDelayed ? "En attente depuis 5 jours" : isCompleted ? "Étape validée" : isCurrent ? "Étape en cours" : "En attente"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/dashboard" arrow>
              Revenir au tableau de bord
            </Button>
            <Button href="/circuit" variant="secondary">
              Revoir le circuit
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
