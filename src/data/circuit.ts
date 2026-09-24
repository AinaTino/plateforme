import { CheckCircle2, FileCheck2, FileText, Route, WalletCards } from "lucide-react";

export type CircuitStepId = "engagement" | "liquidation" | "mandatement" | "paiement";

export type CircuitStep = {
  id: CircuitStepId;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  objective: string;
  expectedResult: string;
  icon: typeof FileText;
};

export const circuitSteps: CircuitStep[] = [
  {
    id: "engagement",
    number: "01",
    title: "01 — Engagement",
    shortTitle: "Engagement",
    description:
      "L’engagement constitue l’étape au cours de laquelle l’administration crée l’obligation juridique de dépense.",
    objective: "Créer l’obligation de dépense.",
    expectedResult: "Une dépense engagée conformément à la procédure.",
    icon: FileText,
  },
  {
    id: "liquidation",
    number: "02",
    title: "02 — Liquidation",
    shortTitle: "Liquidation",
    description:
      "La liquidation consiste à vérifier la réalité de la dette et à déterminer le montant exact à payer.",
    objective: "Vérifier la dette et déterminer son montant.",
    expectedResult: "Montant de la dépense établi.",
    icon: FileCheck2,
  },
  {
    id: "mandatement",
    number: "03",
    title: "03 — Mandatement",
    shortTitle: "Mandatement",
    description:
      "Le mandatement correspond à l’émission de l’ordre de paiement à destination du comptable.",
    objective: "Donner l’ordre de procéder au paiement.",
    expectedResult: "Mandat établi.",
    icon: WalletCards,
  },
  {
    id: "paiement",
    number: "04",
    title: "04 — Paiement",
    shortTitle: "Paiement",
    description: "Le paiement correspond au règlement effectif de la dépense.",
    objective: "Régler la dépense.",
    expectedResult: "Dépense effectivement payée.",
    icon: CheckCircle2,
  },
];

export const circuitHighlights = [
  {
    icon: Route,
    title: "Traçabilité continue",
    text: "Chaque étape du circuit reste lisible, du déclenchement de la dépense jusqu’au paiement.",
  },
  {
    icon: WalletCards,
    title: "Lecture pédagogique",
    text: "Le contenu met en évidence le rôle de chaque phase et son résultat attendu.",
  },
  {
    icon: FileCheck2,
    title: "Suivi de démonstration",
    text: "Le prototype illustre un parcours réaliste sans logique métier réelle.",
  },
];
