import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Download,
  Filter,
  FileSpreadsheet,
  Search,
  TriangleAlert,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { dossiers, stepLabels, statusMeta, typeOptions, type DossierStatus } from "../data/dossiers";
import { dashboardStats, expenseBreakdown, monthlyTrend, statusDistribution } from "../data/stats";

type SortKey = "date-desc" | "date-asc" | "reference-asc" | "reference-desc" | "status-asc" | "status-desc";

const statusFilterOptions: Array<{ label: string; value: DossierStatus | "all" }> = [
  { label: "Tous", value: "all" },
  { label: "À jour", value: "a_jour" },
  { label: "En retard", value: "en_retard" },
  { label: "Mandaté", value: "mandate" },
  { label: "Payé", value: "paye" },
];

const stepFilterOptions = ["Tous", "Engagement", "Liquidation", "Mandatement", "Paiement"];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR").format(amount) + " Ar";
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function useFilteredDossiers(query: string, status: string, type: string, step: string, sortKey: SortKey) {
  return useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = dossiers.filter((dossier) => {
      const searchTarget = [
        dossier.reference,
        dossier.type,
        statusMeta[dossier.status].label,
        stepLabels[dossier.step],
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = normalizedQuery.length === 0 || searchTarget.includes(normalizedQuery);
      const matchesStatus = status === "all" || dossier.status === status;
      const matchesType = type === "all" || dossier.type === type;
      const matchesStep = step === "all" || stepLabels[dossier.step] === step;

      return matchesQuery && matchesStatus && matchesType && matchesStep;
    });

    const sorted = [...filtered].sort((left, right) => {
      switch (sortKey) {
        case "date-desc":
          return right.createdAt.localeCompare(left.createdAt);
        case "date-asc":
          return left.createdAt.localeCompare(right.createdAt);
        case "reference-asc":
          return left.reference.localeCompare(right.reference);
        case "reference-desc":
          return right.reference.localeCompare(left.reference);
        case "status-asc":
          return statusMeta[left.status].label.localeCompare(statusMeta[right.status].label);
        case "status-desc":
          return statusMeta[right.status].label.localeCompare(statusMeta[left.status].label);
        default:
          return 0;
      }
    });

    return sorted;
  }, [query, sortKey, status, step, type]);
}

function Badge({ status }: { status: DossierStatus }) {
  const meta = statusMeta[status];
  const toneClass =
    meta.tone === "danger"
      ? "border-danger-200 bg-danger-50 text-danger-800"
      : meta.tone === "info"
        ? "border-brand-200 bg-brand-50 text-brand-800"
        : "border-success-200 bg-success-50 text-success-800";
  const Icon = meta.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${toneClass}`}>
      <Icon size={12} />
      {meta.label}
    </span>
  );
}

function DonutChart() {
  const size = 172;
  const stroke = 18;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const palette = ["#1d4ed8", "#dc2626", "#2563eb", "#15803d"];
  let offset = 0;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative mx-auto h-[172px] w-[172px]">
        <svg className="-rotate-90" height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={size / 2} cy={size / 2} fill="none" r={radius} stroke="#e2e8f0" strokeWidth={stroke} />
          {statusDistribution.map((segment, index) => {
            const dash = (segment.value / 100) * circumference;
            const currentOffset = offset;
            offset += dash;
            return (
              <circle
                key={segment.label}
                cx={size / 2}
                cy={size / 2}
                fill="none"
                r={radius}
                stroke={palette[index]}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-currentOffset}
                strokeLinecap="round"
                strokeWidth={stroke}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Dossiers</p>
            <p className="mt-1 text-3xl font-bold">100%</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:min-w-60">
        {statusDistribution.map((segment, index) => (
          <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3" key={segment.label}>
            <span className="flex items-center gap-3 text-sm font-semibold text-ink">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: palette[index] }} />
              {segment.label}
            </span>
            <span className="text-sm font-bold text-muted">{segment.value} %</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart() {
  const max = Math.max(...expenseBreakdown.map((item) => item.value));
  return (
    <div className="space-y-4">
      {expenseBreakdown.map((item) => {
        const width = `${Math.round((item.value / max) * 100)}%`;
        return (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">{item.label}</span>
              <span className="text-muted">{item.value}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100">
              <div className="h-3 rounded-full bg-brand-700" style={{ width }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LineChart() {
  const max = Math.max(...monthlyTrend.map((item) => item.value));
  const points = monthlyTrend
    .map((item, index) => {
      const x = (index / (monthlyTrend.length - 1)) * 100;
      const y = 100 - (item.value / max) * 78;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div>
      <svg className="h-56 w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Dossiers traités par mois">
        <defs>
          <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M 0 100 ${points.replaceAll(" ", " L ")} L 100 100 Z`} fill="url(#trendFill)" />
        <polyline fill="none" points={points} stroke="#1d4ed8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
        {monthlyTrend.map((item, index) => {
          const x = (index / (monthlyTrend.length - 1)) * 100;
          const y = 100 - (item.value / max) * 78;
          return <circle cx={x} cy={y} fill="#1d4ed8" key={item.label} r="2.3" />;
        })}
      </svg>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted sm:grid-cols-6">
        {monthlyTrend.map((item) => (
          <div className="rounded-lg border border-line bg-canvas px-2 py-2 text-center font-semibold" key={item.label}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ value, label, delta }: { value: string; label: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_16px_30px_-26px_rgba(15,23,42,0.25)]">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-3xl font-bold tracking-tight text-ink">{value}</p>
        <span className="rounded-full bg-success-50 px-2.5 py-1 text-xs font-bold text-success-800">{delta}</span>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-14 text-center">
      <TriangleAlert className="mx-auto text-warning-600" size={30} />
      <h3 className="mt-4 text-lg font-bold text-ink">Aucun dossier trouvé</h3>
      <p className="mt-2 text-sm leading-6 text-muted">Aucun dossier ne correspond aux critères sélectionnés. Essayez de modifier vos filtres de recherche.</p>
    </div>
  );
}

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [type, setType] = useState<string>("all");
  const [step, setStep] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("date-desc");

  const filteredDossiers = useFilteredDossiers(query, status, type, step, sortKey);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                  Tableau de bord · Données de démonstration
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                  Vue synthétique de l’état d’exécution des dépenses publiques.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                  Les indicateurs et les dossiers ci-dessous sont fictifs et servent uniquement à illustrer le fonctionnement de la plateforme de suivi.
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-canvas px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Dernière mise à jour</p>
                <p className="mt-2 text-sm font-semibold text-ink">23 septembre 2026</p>
                <p className="mt-1 text-xs text-muted">Données fictives</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard delta="+12 ce mois" label="Dossiers suivis" value={`${dashboardStats.dossiersSuivis.toLocaleString("fr-FR")}`} />
              <StatCard delta="+3 points" label="Dossiers dans les délais" value={`${dashboardStats.dossiersDansLesDelais} %`} />
              <StatCard delta="Stable" label="Délai moyen d'exécution" value={`${dashboardStats.delaiMoyen} jours`} />
              <StatCard delta="En cours" label="Dossiers actifs" value={`${dashboardStats.dossiersEnCours}`} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-5 xl:grid-cols-[1fr_0.92fr]">
            <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.22 }} className="rounded-3xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-ink">Répartition des dossiers</p>
                  <p className="mt-1 text-xs text-muted">Données fictives</p>
                </div>
                <BarChart3 className="text-brand-700" size={18} />
              </div>
              <div className="mt-6">
                <DonutChart />
              </div>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.22, delay: 0.05 }} className="rounded-3xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-ink">Volume par type de dépense</p>
                  <p className="mt-1 text-xs text-muted">Lecture comparative</p>
                </div>
                <FileSpreadsheet className="text-brand-700" size={18} />
              </div>
              <div className="mt-6">
                <BarChart />
              </div>
            </motion.article>
          </div>

          <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.22, delay: 0.08 }} className="mt-5 rounded-3xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-ink">Dossiers traités par mois</p>
                <p className="mt-1 text-xs text-muted">Tendance fictive sur six mois</p>
              </div>
              <CalendarDays className="text-brand-700" size={18} />
            </div>
            <div className="mt-6">
              <LineChart />
            </div>
          </motion.article>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
          <SectionTitle
            eyebrow="Filtres"
            title="Recherche et tri des dossiers"
            description="La recherche, les filtres et le tri restent entièrement côté frontend pour simuler un tableau opérationnel."
          />

          <div className="mt-8 rounded-3xl border border-line bg-white p-5 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.3)] sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
              <label className="flex items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-3">
                <Search className="shrink-0 text-muted" size={18} />
                <input
                  aria-label="Rechercher un dossier"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Rechercher un dossier..."
                  value={query}
                />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-3">
                <Filter className="shrink-0 text-muted" size={18} />
                <select className="w-full bg-transparent text-sm outline-none" onChange={(event) => setStatus(event.target.value)} value={status}>
                  {statusFilterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-3">
                <ChevronDown className="shrink-0 text-muted" size={18} />
                <select className="w-full bg-transparent text-sm outline-none" onChange={(event) => setType(event.target.value)} value={type}>
                  <option value="all">Tous les types</option>
                  {typeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-3">
                <ChevronDown className="shrink-0 text-muted" size={18} />
                <select className="w-full bg-transparent text-sm outline-none" onChange={(event) => setStep(event.target.value)} value={step}>
                  <option value="all">Toutes les étapes</option>
                  {stepFilterOptions.slice(1).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-3 lg:col-span-1">
                <ChevronDown className="shrink-0 text-muted" size={18} />
                <select className="w-full bg-transparent text-sm outline-none" onChange={(event) => setSortKey(event.target.value as SortKey)} value={sortKey}>
                  <option value="date-desc">Date décroissante</option>
                  <option value="date-asc">Date croissante</option>
                  <option value="reference-asc">Référence A → Z</option>
                  <option value="reference-desc">Référence Z → A</option>
                  <option value="status-asc">Statut A → Z</option>
                  <option value="status-desc">Statut Z → A</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-line bg-white p-4 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.3)] sm:p-6">
            {filteredDossiers.length > 0 ? (
              <>
                <div className="hidden overflow-hidden rounded-2xl border border-line md:block">
                  <table className="min-w-full divide-y divide-line text-left">
                    <thead className="bg-canvas text-xs uppercase tracking-[0.14em] text-muted">
                      <tr>
                        <th className="px-4 py-4 font-bold">Référence</th>
                        <th className="px-4 py-4 font-bold">Type</th>
                        <th className="px-4 py-4 font-bold">Date</th>
                        <th className="px-4 py-4 font-bold">Étape actuelle</th>
                        <th className="px-4 py-4 font-bold">Statut</th>
                        <th className="px-4 py-4 font-bold">Dernière mise à jour</th>
                        <th className="px-4 py-4 font-bold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {filteredDossiers.map((dossier) => (
                        <tr className="transition hover:bg-slate-50" key={dossier.reference}>
                          <td className="px-4 py-4 font-semibold text-ink">{dossier.reference}</td>
                          <td className="px-4 py-4 text-sm text-muted">{dossier.type}</td>
                          <td className="px-4 py-4 text-sm text-muted">{formatDate(dossier.createdAt)}</td>
                          <td className="px-4 py-4 text-sm text-muted">{stepLabels[dossier.step]}</td>
                          <td className="px-4 py-4"><Badge status={dossier.status} /></td>
                          <td className="px-4 py-4 text-sm text-muted">{formatDate(dossier.updatedAt)}</td>
                          <td className="px-4 py-4">
                            <Link className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900" to={`/dossiers/${dossier.reference}`}>
                              Ouvrir
                              <ArrowRight size={15} />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 md:hidden">
                  {filteredDossiers.map((dossier) => (
                    <Link className="block rounded-2xl border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-200" key={dossier.reference} to={`/dossiers/${dossier.reference}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold text-ink">{dossier.reference}</p>
                          <p className="mt-1 text-xs text-muted">{dossier.type} · {stepLabels[dossier.step]}</p>
                        </div>
                        <Badge status={dossier.status} />
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Date</p>
                          <p className="mt-1 font-semibold text-ink">{formatDate(dossier.createdAt)}</p>
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Dernière mise à jour</p>
                          <p className="mt-1 font-semibold text-ink">{formatDate(dossier.updatedAt)}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <EmptyState />
            )}
          </div>
        </section>

        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="rounded-3xl bg-brand-950 p-8 text-white sm:p-10 lg:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Démonstration</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Les données affichées dans ce tableau de bord sont fictives.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                    Le but est d’illustrer un dispositif de suivi crédible, pédagogique et facile à parcourir, sans backend ni traitement réel.
                  </p>
                </div>
                <Button href="/circuit" variant="light" arrow>
                  Découvrir le circuit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
