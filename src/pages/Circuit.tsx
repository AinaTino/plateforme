import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { circuitHighlights, circuitSteps, type CircuitStepId } from "../data/circuit";

export default function Circuit() {
  const [activeStepId, setActiveStepId] = useState<CircuitStepId>("engagement");

  const activeStep = useMemo(
    () => circuitSteps.find((step) => step.id === activeStepId) ?? circuitSteps[0],
    [activeStepId],
  );

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:items-end lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                Circuit de la dépense
              </div>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
                De l’engagement au paiement, <span className="text-brand-700">comprendre chaque étape.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Le parcours ci-dessous présente le circuit de la dépense publique dans une logique
                pédagogique et entièrement fictive, avec une lecture claire du rôle de chaque phase.
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="rounded-3xl border border-line bg-white p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] sm:p-6"
            >
              <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-ink">Circuit actif</p>
                    <p className="mt-1 text-xs text-muted">Vue de démonstration</p>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <ArrowRight size={18} />
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  {circuitSteps.map((step, index) => {
                    const isActive = step.id === activeStepId;
                    const isCompleted = circuitSteps.findIndex((item) => item.id === activeStepId) > index;

                    return (
                      <button
                        className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                          isActive
                            ? "border-brand-200 bg-brand-50"
                            : "border-line bg-white hover:border-brand-200 hover:bg-slate-50"
                        }`}
                        key={step.id}
                        onClick={() => setActiveStepId(step.id)}
                        type="button"
                      >
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold ${
                            isCompleted
                              ? "bg-success-700 text-white"
                              : isActive
                                ? "bg-brand-700 text-white"
                                : "border border-line bg-white text-muted"
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 size={15} /> : step.number}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink">{step.shortTitle}</span>
                          <span className="block text-xs text-muted">{step.objective}</span>
                        </span>
                        <ChevronRight className={isActive ? "text-brand-700" : "text-slate-300"} size={16} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionTitle
            eyebrow="Lecture pédagogique"
            title="Un circuit en quatre étapes"
            description="Chaque carte résume le rôle de la phase, avec un détail mis à jour au clic."
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-[1fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {circuitSteps.map((step) => {
                const StepIcon = step.icon;
                const isActive = step.id === activeStepId;

                return (
                  <motion.button
                    animate={{ y: isActive ? -4 : 0, scale: isActive ? 1.01 : 1 }}
                    className={`rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-brand-200 bg-white shadow-[0_18px_40px_-28px_rgba(29,78,216,0.45)]"
                        : "border-line bg-white hover:-translate-y-0.5 hover:border-brand-100"
                    }`}
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    type="button"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`grid h-11 w-11 place-items-center rounded-xl ${isActive ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700"}`}>
                          <StepIcon size={20} />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{step.number}</p>
                          <h3 className="mt-1 text-lg font-bold">{step.shortTitle}</h3>
                        </div>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${isActive ? "bg-brand-50 text-brand-800" : "bg-slate-100 text-muted"}`}>
                        {isActive ? "Étape active" : "Cliquer"}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted">{step.description}</p>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.45)] sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                  Étape active
                </span>
                <span className="text-sm font-semibold text-muted">{activeStep.title}</span>
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{activeStep.shortTitle}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{activeStep.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-canvas p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Objectif</p>
                  <p className="mt-3 text-sm leading-6 text-ink">{activeStep.objective}</p>
                </div>
                <div className="rounded-2xl border border-line bg-canvas p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Résultat attendu</p>
                  <p className="mt-3 text-sm leading-6 text-ink">{activeStep.expectedResult}</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-800">Résumé du parcours</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-900">
                  {circuitSteps.map((step, index) => (
                    <span className="flex items-center gap-3" key={step.id}>
                      <span className={step.id === activeStep.id ? "text-brand-800" : "text-brand-600/70"}>{step.shortTitle}</span>
                      {index < circuitSteps.length - 1 && <ArrowRight size={15} className="text-brand-300" />}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {circuitHighlights.map(({ icon: Icon, title, text }) => (
                  <div className="rounded-2xl border border-line p-4" key={title}>
                    <Icon className="text-brand-700" size={20} />
                    <h3 className="mt-4 text-sm font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/dashboard" arrow>
                  Explorer le tableau de bord
                </Button>
                <Button href="/contact" variant="secondary">
                  Contacter le service
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
