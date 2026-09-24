import { AlertTriangle, CheckCircle2, CircleCheckBig, FileCheck2, type LucideIcon } from "lucide-react";

import type { CircuitStepId } from "./circuit";

export type DossierStatus = "a_jour" | "en_retard" | "mandate" | "paye";

export type Dossier = {
  id: string;
  reference: string;
  type: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  step: CircuitStepId;
  status: DossierStatus;
};

export const statusMeta: Record<DossierStatus, { label: string; tone: string; icon: LucideIcon }> = {
  a_jour: { label: "À jour", tone: "success", icon: CheckCircle2 },
  en_retard: { label: "En retard", tone: "danger", icon: AlertTriangle },
  mandate: { label: "Mandaté", tone: "info", icon: FileCheck2 },
  paye: { label: "Payé", tone: "success", icon: CircleCheckBig },
};

export const typeOptions = ["Fonctionnement", "Investissement", "Personnel", "Prestations", "Autres"];

export const stepLabels: Record<CircuitStepId, string> = {
  engagement: "Engagement",
  liquidation: "Liquidation",
  mandatement: "Mandatement",
  paiement: "Paiement",
};

export const dossiers: Dossier[] = [
  { id: "DEP-2026-001", reference: "DEP-2026-001", type: "Fonctionnement", amount: 125000000, createdAt: "2026-09-12", updatedAt: "2026-09-23", step: "mandatement", status: "a_jour" },
  { id: "DEP-2026-002", reference: "DEP-2026-002", type: "Investissement", amount: 48500000, createdAt: "2026-09-10", updatedAt: "2026-09-21", step: "liquidation", status: "en_retard" },
  { id: "DEP-2026-003", reference: "DEP-2026-003", type: "Prestations", amount: 72300000, createdAt: "2026-09-09", updatedAt: "2026-09-23", step: "paiement", status: "paye" },
  { id: "DEP-2026-004", reference: "DEP-2026-004", type: "Fonctionnement", amount: 210000000, createdAt: "2026-09-08", updatedAt: "2026-09-23", step: "engagement", status: "a_jour" },
  { id: "DEP-2026-005", reference: "DEP-2026-005", type: "Personnel", amount: 96500000, createdAt: "2026-09-06", updatedAt: "2026-09-22", step: "mandatement", status: "mandate" },
  { id: "DEP-2026-006", reference: "DEP-2026-006", type: "Investissement", amount: 154000000, createdAt: "2026-09-04", updatedAt: "2026-09-20", step: "liquidation", status: "en_retard" },
  { id: "DEP-2026-007", reference: "DEP-2026-007", type: "Fonctionnement", amount: 88000000, createdAt: "2026-09-02", updatedAt: "2026-09-19", step: "paiement", status: "paye" },
  { id: "DEP-2026-008", reference: "DEP-2026-008", type: "Prestations", amount: 43000000, createdAt: "2026-08-30", updatedAt: "2026-09-18", step: "engagement", status: "a_jour" },
  { id: "DEP-2026-009", reference: "DEP-2026-009", type: "Investissement", amount: 172500000, createdAt: "2026-08-28", updatedAt: "2026-09-18", step: "mandatement", status: "mandate" },
  { id: "DEP-2026-010", reference: "DEP-2026-010", type: "Personnel", amount: 61200000, createdAt: "2026-08-26", updatedAt: "2026-09-17", step: "liquidation", status: "a_jour" },
  { id: "DEP-2026-011", reference: "DEP-2026-011", type: "Fonctionnement", amount: 53000000, createdAt: "2026-08-22", updatedAt: "2026-09-16", step: "paiement", status: "paye" },
  { id: "DEP-2026-012", reference: "DEP-2026-012", type: "Prestations", amount: 78000000, createdAt: "2026-08-20", updatedAt: "2026-09-15", step: "engagement", status: "en_retard" },
];

export function getDossier(reference: string) {
  return dossiers.find((dossier) => dossier.reference === reference || dossier.id === reference);
}
