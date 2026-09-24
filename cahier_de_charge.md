# Cahier des charges — Plateforme de suivi de l'exécution des dépenses publiques

## 1. Résumé du projet

Créer un **site vitrine + prototype fonctionnel frontend** d'une plateforme institutionnelle dédiée au **suivi de l'exécution des dépenses publiques**.

La plateforme a pour finalité de présenter et de visualiser, de manière claire et pédagogique, le processus d'exécution d'une dépense publique ainsi que l'état d'avancement de dossiers fictifs.

Le projet est avant tout une **maquette UI/UX haut de gamme**, avec des données statiques de démonstration.

### Important

Il ne faut pas développer de véritable backend métier.

Les données sont fictives et locales au frontend.

Il n'y a :

- ni calcul métier réel ;
- ni authentification réelle ;
- ni base de données distante ;
- ni API métier ;
- ni système réel de paiement ;
- ni traitement administratif réel ;
- ni envoi réel du formulaire de contact.

Le projet doit cependant donner l'impression d'une **véritable plateforme institutionnelle moderne**, cohérente et crédible.

---

# 2. Objectif principal

L'objectif principal est de concevoir une interface permettant au visiteur de :

1. comprendre rapidement le rôle de la plateforme ;
2. comprendre les principes de transparence et de traçabilité ;
3. comprendre les quatre étapes du circuit de la dépense ;
4. consulter un tableau de bord de démonstration ;
5. consulter des dossiers fictifs et leur état d'avancement ;
6. consulter les informations institutionnelles ;
7. accéder aux coordonnées du Service Financier et du Budget.

---

# 3. Positionnement visuel

Le design doit être :

- institutionnel ;
- moderne ;
- professionnel ;
- sobre ;
- premium ;
- très lisible ;
- accessible ;
- crédible ;
- orienté données ;
- cohérent avec un contexte de service public.

Le résultat ne doit surtout pas ressembler à :

- un vieux logiciel administratif ;
- un template Bootstrap générique ;
- une landing page SaaS remplie de gradients ;
- une interface de crypto ;
- un dashboard de startup IA ;
- une page surchargée de couleurs et d'animations.

Le site doit transmettre :

> **Confiance — Transparence — Traçabilité — Clarté — Modernité**

---

# 4. Direction artistique

## 4.1 Palette

Utiliser une palette principalement claire.

### Couleurs principales

```text
Background principal
#F8FAFC

Surface / cartes
#FFFFFF

Texte principal
#0F172A

Texte secondaire
#475569

Bordures
#E2E8F0

Couleur primaire
#1D4ED8

Couleur primaire sombre
#1E3A8A

Succès
#15803D

Attention
#D97706

Erreur
#DC2626

Information
#2563EB
```

La palette peut être légèrement ajustée pour obtenir un rendu plus élégant, mais conserver un contraste élevé.

---

## 4.2 Typographie

Utiliser une police moderne et très lisible.

Préférence :

- Inter ;
- Geist ;
- Manrope.

Éviter les typographies décoratives.

Hiérarchie :

```text
H1 : très grand, fort impact visuel
H2 : grande section
H3 : sous-section
Body : lisibilité prioritaire
Caption : information secondaire
```

---

# 5. Stack technique

## Frontend

Utiliser :

```text
React
TypeScript
Vite
Tailwind CSS
shadcn/ui
Lucide React
Recharts
Framer Motion
React Router
```

## Gestion des données

Données locales :

```text
src/data/
```

Exemple :

```text
src/data/dossiers.ts
src/data/stats.ts
src/data/circuit.ts
src/data/institution.ts
```

Aucun backend nécessaire.

---

# 6. Architecture du projet

Utiliser une architecture claire et maintenable.

```text
src/
│
├── assets/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageHeader.tsx
│   │
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── StatCard.tsx
│   │   ├── SectionTitle.tsx
│   │   └── EmptyState.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Objectives.tsx
│   │   ├── ProcessPreview.tsx
│   │   ├── DashboardPreview.tsx
│   │   └── TrustSection.tsx
│   │
│   ├── circuit/
│   │   ├── StepTimeline.tsx
│   │   ├── StepCard.tsx
│   │   └── StepDetail.tsx
│   │
│   ├── dashboard/
│   │   ├── DashboardHeader.tsx
│   │   ├── KPIGrid.tsx
│   │   ├── StatusChart.tsx
│   │   ├── ExpenseTypeChart.tsx
│   │   ├── DossierTable.tsx
│   │   ├── DossierFilters.tsx
│   │   └── StatusBadge.tsx
│   │
│   └── dossier/
│       ├── DossierHeader.tsx
│       ├── DossierSummary.tsx
│       ├── DossierTimeline.tsx
│       └── DossierInformation.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Circuit.tsx
│   ├── Dashboard.tsx
│   ├── DossierDetail.tsx
│   └── Contact.tsx
│
├── data/
│   ├── dossiers.ts
│   ├── stats.ts
│   ├── circuit.ts
│   └── institution.ts
│
├── lib/
│   └── utils.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# 7. Arborescence globale

Navigation principale :

```text
Accueil
À propos
Circuit de la dépense
Tableau de bord
Contact
```

Le détail d'un dossier n'est pas nécessairement visible dans la navigation principale.

Il est accessible depuis le tableau de bord.

---

# 8. Navigation principale

## Desktop

Header fixe ou sticky.

Structure :

```text
┌───────────────────────────────────────────────────────────────┐
│ LOGO     Accueil   À propos   Circuit   Tableau de bord   Contact │
└───────────────────────────────────────────────────────────────┘
```

### Logo

Créer un logo textuel moderne.

Exemple :

```text
[SYMBOL]
SuiviBudgétaire
```

ou

```text
[SB]
Suivi des dépenses publiques
```

Ne pas inventer un logo gouvernemental officiel.

Utiliser un logo de démonstration propre et neutre.

---

## État actif

Le menu actif doit être clairement identifiable.

Exemple :

```text
Tableau de bord
───────────────
```

ou fond légèrement coloré.

---

## Mobile

Navigation transformée en menu hamburger.

Le menu doit :

- s'ouvrir avec animation ;
- recouvrir correctement le contenu ;
- permettre la fermeture ;
- conserver le contexte de navigation.

---

# 9. PAGE 1 — ACCUEIL

## Objectif UX

Le visiteur doit comprendre en quelques secondes :

- ce qu'est la plateforme ;
- pourquoi elle existe ;
- ce qu'elle permet de suivre ;
- comment explorer les informations.

---

## 9.1 Hero

Grand hero avec beaucoup d'espace.

Structure :

```text
----------------------------------------------------

SUIVI DE L'EXÉCUTION
DES DÉPENSES PUBLIQUES

Une plateforme dédiée au suivi,
à la transparence et à la traçabilité
de l'exécution des dépenses publiques.

[ Explorer le tableau de bord ]
[ Comprendre le circuit ]

                              [VISUEL]
                              Dashboard /
                              document /
                              parcours

----------------------------------------------------
```

### Badge

Afficher au-dessus du titre :

```text
PLATEFORME DE SUIVI
```

### Titre

```text
Suivre la dépense publique,
étape par étape.
```

### Description

```text
Une plateforme de démonstration dédiée au suivi de
l'exécution des dépenses publiques, de l'engagement
jusqu'au paiement.
```

### CTA principal

```text
Explorer le tableau de bord
```

Redirection :

```text
/dashboard
```

### CTA secondaire

```text
Comprendre le circuit
```

Redirection :

```text
/circuit
```

---

# 10. Hero visual

Créer une illustration UI native plutôt qu'une grosse image externe.

Exemple :

Une carte de dashboard flottante affichant :

```text
Suivi des dépenses

Dossiers suivis
1 248

Dans les délais
87 %

Délai moyen
14 jours
```

Puis une petite timeline :

```text
✓ Engagement
✓ Liquidation
● Mandatement
○ Paiement
```

Ajouter une animation très légère.

---

# 11. Section "Pourquoi cette plateforme ?"

Titre :

```text
Une vision claire de l'exécution
des dépenses publiques
```

Trois cartes principales.

## Transparence

Icône :

```text
Eye
```

Titre :

```text
Transparence
```

Texte :

```text
Faciliter la visibilité sur l'état
d'avancement des dépenses publiques.
```

---

## Traçabilité

Icône :

```text
Route
```

Titre :

```text
Traçabilité
```

Texte :

```text
Suivre le parcours d'un dossier
à travers les différentes étapes
de son exécution.
```

---

## Respect des principes budgétaires

Icône :

```text
ShieldCheck
```

Titre :

```text
Respect des principes budgétaires
```

Texte :

```text
Contribuer au suivi du respect
des procédures et des délais.
```

---

# 12. Section "Le circuit en 4 étapes"

Titre :

```text
De l'engagement au paiement
```

Sous-titre :

```text
Chaque dépense suit un circuit composé
de quatre étapes principales.
```

Afficher :

```text
01
ENGAGEMENT
↓
02
LIQUIDATION
↓
03
MANDATEMENT
↓
04
PAIEMENT
```

Sur desktop, préférer une présentation horizontale :

```text
[01 Engagement]
        ↓
[02 Liquidation]
        ↓
[03 Mandatement]
        ↓
[04 Paiement]
```

Ou :

```text
01 ───── 02 ───── 03 ───── 04
●         ●         ●         ●
```

CTA :

```text
Découvrir le circuit →
```

---

# 13. Section statistiques

Afficher des données fictives.

Ajouter clairement la mention :

```text
Données de démonstration
```

Exemple :

```text
1 248
Dossiers suivis

87 %
Dans les délais

14 jours
Délai moyen d'exécution

326
Dossiers en cours
```

Les chiffres doivent être cohérents avec le dashboard.

---

# 14. Section aperçu dashboard

Créer un aperçu graphique du tableau de bord.

Titre :

```text
Une vision synthétique de l'exécution
```

Montrer :

- KPI ;
- graphique ;
- liste de quelques dossiers.

Bouton :

```text
Voir le tableau de bord →
```

Cette section sert aussi de transition visuelle vers la page Dashboard.

---

# 15. Section confiance / institution

Bloc plus institutionnel.

```text
Une plateforme rattachée au
Service Financier et du Budget
du MIDSP.
```

CTA :

```text
En savoir plus →
```

---

# 16. Footer

Structure :

```text
--------------------------------------------------------
Suivi des dépenses publiques

Une plateforme de démonstration pour le suivi
de l'exécution des dépenses publiques.

Navigation
Accueil
À propos
Circuit
Tableau de bord
Contact

Institution
Service Financier et du Budget
MIDSP

Contact
Adresse
Téléphone
Email

--------------------------------------------------------
© 2026 — Prototype de démonstration
--------------------------------------------------------
```

---

# 17. PAGE 2 — À PROPOS

## Objectif

Présenter l'identité et le rattachement institutionnel de la plateforme.

---

## Hero

```text
À PROPOS

Comprendre la plateforme,
son rôle et son rattachement institutionnel.
```

---

# 18. Introduction

Bloc éditorial court :

```text
La plateforme de suivi de l'exécution des dépenses
publiques a pour objectif de faciliter la visibilité
sur le traitement des dossiers et de rendre plus lisible
le parcours de la dépense publique.
```

---

# 19. Rattachement institutionnel

Créer un organigramme visuel :

```text
MIDSP
  │
  ↓
Service Financier et du Budget
  │
  ↓
Plateforme de suivi
```

Chaque niveau est une carte.

---

# 20. Objectifs de la plateforme

Afficher quatre cartes :

### Transparence

```text
Améliorer la visibilité sur l'état
d'exécution des dépenses.
```

### Traçabilité

```text
Permettre de suivre les différentes
étapes du traitement.
```

### Suivi

```text
Faciliter l'identification des dossiers
en cours et des situations nécessitant
une attention particulière.
```

### Conformité

```text
Contribuer au respect du circuit
et des principes budgétaires.
```

---

# 21. Section "Ce que permet la plateforme"

Présenter quatre fonctionnalités :

```text
Suivre
Visualiser l'état des dossiers.

Comprendre
Découvrir les quatre étapes du circuit.

Analyser
Consulter des indicateurs synthétiques.

Identifier
Repérer les dossiers en retard.
```

---

# 22. PAGE 3 — CIRCUIT DE LA DÉPENSE

Cette page est fortement orientée pédagogie.

---

## Hero

```text
CIRCUIT DE LA DÉPENSE

De l'engagement au paiement,
comprendre chaque étape du processus.
```

---

# 23. Timeline principale

Créer une timeline interactive.

Étapes :

```text
01
Engagement

02
Liquidation

03
Mandatement

04
Paiement
```

Chaque étape possède :

- numéro ;
- icône ;
- nom ;
- courte description ;
- état.

---

# 24. Étape 1 — Engagement

### Titre

```text
01 — Engagement
```

### Description

```text
L'engagement constitue l'étape au cours de laquelle
l'administration crée l'obligation juridique de dépense.
```

### Informations

```text
Objectif
Créer l'obligation de dépense.

Résultat attendu
Une dépense engagée conformément à la procédure.

Position dans le circuit
1 / 4
```

---

# 25. Étape 2 — Liquidation

```text
02 — Liquidation
```

Description :

```text
La liquidation consiste à vérifier la réalité de la dette
et à déterminer le montant exact à payer.
```

Informations :

```text
Objectif
Vérifier la dette et déterminer son montant.

Résultat attendu
Montant de la dépense établi.
```

---

# 26. Étape 3 — Mandatement

```text
03 — Mandatement
```

Description :

```text
Le mandatement correspond à l'émission de l'ordre de paiement
à destination du comptable.
```

Informations :

```text
Objectif
Donner l'ordre de procéder au paiement.

Résultat attendu
Mandat établi.
```

---

# 27. Étape 4 — Paiement

```text
04 — Paiement
```

Description :

```text
Le paiement correspond au règlement effectif de la dépense.
```

Informations :

```text
Objectif
Régler la dépense.

Résultat attendu
Dépense effectivement payée.
```

---

# 28. Interaction de la timeline

Au clic sur une étape :

- cette étape devient active ;
- les autres deviennent secondaires ;
- le contenu détaillé est mis à jour ;
- animation légère ;
- la position de la page reste stable.

Sur mobile :

```text
01
│
02
│
03
│
04
```

---

# 29. PAGE 4 — TABLEAU DE BORD

C'est la page la plus importante du prototype.

Elle doit donner immédiatement l'impression d'une plateforme de suivi opérationnelle.

---

# 30. Header dashboard

```text
Tableau de bord

Vue synthétique de l'état d'exécution
des dépenses publiques.

Dernière mise à jour
23 septembre 2026

[ Données de démonstration ]
```

---

# 31. KPI cards

Afficher quatre cartes.

## KPI 1

```text
1 248
Dossiers suivis
```

Variation fictive :

```text
+12 ce mois
```

---

## KPI 2

```text
87 %
Dossiers dans les délais
```

---

## KPI 3

```text
14 jours
Délai moyen d'exécution
```

---

## KPI 4

```text
326
Dossiers en cours
```

---

# 32. Graphique 1 — Statuts

Titre :

```text
Répartition des dossiers
```

Utiliser un donut chart.

Données fictives :

```text
À jour       62 %
En retard    18 %
Mandaté      12 %
Payé          8 %
```

Les valeurs peuvent être légèrement modifiées mais doivent rester cohérentes.

---

# 33. Graphique 2 — Type de dépense

Titre :

```text
Volume par type de dépense
```

Graphique en barres.

Exemple :

```text
Fonctionnement      420
Investissement      315
Prestations         208
Personnel            176
Autres               129
```

---

# 34. Graphique 3 — Évolution

Créer éventuellement un graphique linéaire :

```text
Dossiers traités par mois
```

Données de démonstration :

```text
Avril       172
Mai         198
Juin        214
Juillet     230
Août        245
Septembre   189
```

Le graphique doit être présenté comme une donnée de démonstration.

---

# 35. Dossiers

Afficher un tableau moderne.

Colonnes :

```text
Référence
Type
Date
Étape actuelle
Statut
Dernière mise à jour
Action
```

---

# 36. Données fictives

Créer au moins 12 dossiers.

Exemple :

```text
DEP-2026-001
Fonctionnement
12/09/2026
Mandatement
À jour

DEP-2026-002
Investissement
10/09/2026
Liquidation
En retard

DEP-2026-003
Prestation
09/09/2026
Paiement
Payé

DEP-2026-004
Fonctionnement
08/09/2026
Engagement
À jour

DEP-2026-005
Personnel
06/09/2026
Mandatement
Mandaté

DEP-2026-006
Investissement
04/09/2026
Liquidation
En retard

DEP-2026-007
Fonctionnement
02/09/2026
Paiement
Payé

DEP-2026-008
Prestation
30/08/2026
Engagement
À jour

DEP-2026-009
Investissement
28/08/2026
Mandatement
Mandaté

DEP-2026-010
Personnel
26/08/2026
Liquidation
À jour

DEP-2026-011
Fonctionnement
22/08/2026
Paiement
Payé

DEP-2026-012
Prestation
20/08/2026
Engagement
En retard
```

---

# 37. Statuts visuels

Utiliser des badges.

### À jour

```text
● À jour
```

### En retard

```text
● En retard
```

### Mandaté

```text
● Mandaté
```

### Payé

```text
● Payé
```

Les couleurs doivent être accessibles et ne pas être le seul moyen d'identifier le statut.

---

# 38. Filtres

Ajouter :

```text
Recherche
[ Rechercher un dossier... ]

Statut
[ Tous ▼ ]

Type
[ Tous ▼ ]

Étape
[ Toutes ▼ ]
```

---

# 39. Recherche

La recherche doit filtrer localement les données.

Recherche possible sur :

- référence ;
- type ;
- statut ;
- étape.

---

# 40. Tri

Permettre le tri sur :

- date ;
- référence ;
- statut.

---

# 41. Responsive dashboard

Desktop :

```text
┌ KPI ┐ ┌ KPI ┐ ┌ KPI ┐ ┌ KPI ┐
```

Tablet :

```text
┌ KPI ┐ ┌ KPI ┐
┌ KPI ┐ ┌ KPI ┐
```

Mobile :

```text
┌──────────────┐
│ KPI          │
└──────────────┘

┌──────────────┐
│ KPI          │
└──────────────┘
```

Le tableau doit devenir une liste/card layout sur mobile si nécessaire.

---

# 42. PAGE 5 — DÉTAIL D'UN DOSSIER

Accessible en cliquant sur un dossier du dashboard.

Route :

```text
/dossiers/:id
```

Exemple :

```text
/dossiers/DEP-2026-001
```

---

# 43. Header du dossier

```text
← Retour au tableau de bord

DEP-2026-001

Dépense de fonctionnement

[ À jour ]
```

---

# 44. Informations générales

Carte :

```text
Type de dépense
Fonctionnement

Référence
DEP-2026-001

Date de création
12 septembre 2026

Montant
125 000 000 Ar

Statut
À jour
```

Le montant est fictif.

---

# 45. Timeline du dossier

Très important.

Afficher :

```text
✓ Engagement
12 septembre 2026

│

✓ Liquidation
14 septembre 2026

│

● Mandatement
En cours

│

○ Paiement
À venir
```

---

# 46. Variante dossier payé

Pour les dossiers payés :

```text
✓ Engagement
✓ Liquidation
✓ Mandatement
✓ Paiement
```

Afficher :

```text
Dossier exécuté
```

---

# 47. Dossier en retard

Pour un dossier en retard :

```text
! Liquidation

En attente depuis 5 jours
```

Utiliser une alerte visuelle sobre.

---

# 48. PAGE 6 — CONTACT

## Hero

```text
CONTACT

Le Service Financier et du Budget
```

Sous-texte :

```text
Pour toute demande d'information,
adressez-vous au Service Financier et du Budget.
```

---

# 49. Coordonnées

Créer trois ou quatre cartes.

### Adresse

```text
Service Financier et du Budget
MIDSP

[Adresse de démonstration]
Antananarivo, Madagascar
```

### Téléphone

```text
+261 XX XX XXX XX
```

### Email

```text
contact@exemple.mg
```

### Horaires

```text
Lundi — Vendredi
08:00 — 16:00
```

Toutes ces coordonnées sont fictives.

Ajouter une mention :

```text
Coordonnées de démonstration
```

---

# 50. Formulaire

Créer :

```text
Nom complet
[____________________________]

Adresse email
[____________________________]

Objet
[____________________________]

Message
[____________________________]

[ Envoyer le message ]
```

Le formulaire n'a pas besoin d'être réellement connecté.

Au submit :

Afficher un toast :

```text
Message envoyé

Ceci est une démonstration.
Aucun message réel n'a été transmis.
```

---

# 51. UX globale

## Navigation

La navigation doit être évidente.

Le visiteur doit toujours savoir :

- où il se trouve ;
- où aller ensuite ;
- comment revenir.

---

## CTA

Les CTA principaux doivent être cohérents.

Utiliser :

```text
Explorer le tableau de bord
Découvrir le circuit
Voir les dossiers
En savoir plus
```

Éviter des CTA vagues comme :

```text
Cliquez ici
En savoir davantage...
Soumettre
```

---

# 52. Animations

Utiliser Framer Motion avec beaucoup de retenue.

Animations recommandées :

### Page load

Fade + slight upward movement.

### Sections

Reveal au scroll.

### Cards

Très légère translation au hover.

### Navigation

Transition fluide.

### Dashboard

Animation légère à l'apparition des KPI.

### Timeline

Animation du parcours.

Ne jamais transformer le site en manège.

---

# 53. Micro-interactions

Ajouter de petites interactions :

- hover sur cartes ;
- hover sur lignes ;
- apparition d'informations ;
- badges animés très légèrement ;
- transitions entre les filtres ;
- toast après action ;
- dropdowns fluides.

---

# 54. Accessibilité

Le projet doit respecter les bonnes pratiques :

- contraste suffisant ;
- navigation clavier ;
- focus visible ;
- boutons avec textes explicites ;
- labels de formulaire ;
- `aria-label` si nécessaire ;
- aucune information uniquement dépendante de la couleur ;
- responsive ;
- taille de texte lisible.

---

# 55. Responsive design

Le site doit être parfaitement utilisable sur :

```text
Mobile
360px+

Tablet
768px+

Desktop
1024px+

Large desktop
1440px+
```

Tester spécialement :

```text
360 × 800
390 × 844
768 × 1024
1366 × 768
1440 × 900
1920 × 1080
```

---

# 56. Composants UI réutilisables

Créer des composants génériques pour éviter la duplication.

Exemple :

```text
Button
Card
Badge
StatCard
SectionTitle
Container
Modal
Dropdown
Input
Select
Table
Toast
```

---

# 57. Système de spacing

Utiliser Tailwind et une grille cohérente.

Sections :

```text
py-20
py-24
```

Container :

```text
max-w-7xl
```

Espacement entre éléments :

```text
gap-4
gap-6
gap-8
```

Ne pas mettre des valeurs arbitraires partout.

---

# 58. Radius

Utiliser un radius modéré.

Exemple :

```text
rounded-xl
```

ou

```text
rounded-2xl
```

Éviter les énormes capsules.

Les boutons peuvent être légèrement arrondis.

---

# 59. Ombres

Utiliser des ombres très discrètes.

Préférer :

```text
border + subtle shadow
```

plutôt que :

```text
shadow-2xl
```

sur chaque composant.

---

# 60. Icônes

Utiliser uniquement des icônes cohérentes.

Bibliothèque :

```text
Lucide React
```

Exemples :

```text
Eye
ShieldCheck
Route
FileText
Clock
CheckCircle
AlertTriangle
CreditCard
WalletCards
Building2
ArrowRight
Search
Filter
Calendar
Mail
Phone
MapPin
```

---

# 61. Données fictives globales

Créer un dataset cohérent.

Exemple :

```ts
type DossierStatus =
  | "a_jour"
  | "en_retard"
  | "mandate"
  | "paye";

type DossierStep =
  | "engagement"
  | "liquidation"
  | "mandatement"
  | "paiement";
```

Objet :

```ts
interface Dossier {
  id: string;
  type: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  step: DossierStep;
  status: DossierStatus;
}
```

---

# 62. Données statistiques

Créer un fichier :

```text
stats.ts
```

Exemple :

```ts
export const dashboardStats = {
  dossiersSuivis: 1248,
  dossiersDansLesDelais: 87,
  delaiMoyen: 14,
  dossiersEnCours: 326,
};
```

---

# 63. Types de dépenses

Utiliser par exemple :

```text
Fonctionnement
Investissement
Personnel
Prestations
Autres
```

---

# 64. États de l'application

Même si le projet est statique, prévoir :

### Dashboard normal

Données affichées.

### Recherche sans résultat

```text
Aucun dossier trouvé.

Essayez de modifier vos critères de recherche.
```

### Loading simulé

Facultatif.

Utiliser un skeleton très court si nécessaire.

### Erreur

Prévoir un état générique même si normalement il ne sera jamais déclenché.

---

# 65. Routes

```text
/
```

Accueil.

```text
/about
```

À propos.

```text
/circuit
```

Circuit de la dépense.

```text
/dashboard
```

Tableau de bord.

```text
/dossiers/:id
```

Détail du dossier.

```text
/contact
```

Contact.

---

# 66. SEO de base

Même pour une maquette :

```text
<title>
Suivi des dépenses publiques
</title>
```

Description :

```text
Plateforme de suivi de l'exécution
des dépenses publiques.
```

Utiliser correctement :

```text
H1
H2
H3
```

---

# 67. Performance

Le site doit rester léger.

Éviter :

- énormes images ;
- dépendances inutiles ;
- vidéos ;
- bibliothèques redondantes.

Privilégier :

```text
SVG
CSS
Lucide
Recharts
Framer Motion
```

---

# 68. Responsive navigation

Desktop :

```text
Logo | Navigation | CTA éventuel
```

Mobile :

```text
Logo                  ☰
```

Le menu doit afficher :

```text
Accueil
À propos
Circuit
Tableau de bord
Contact
```

---

# 69. État visuel des dossiers

Créer un système cohérent.

### À jour

Icône :

```text
CheckCircle
```

### En retard

Icône :

```text
AlertTriangle
```

### Mandaté

Icône :

```text
FileCheck
```

### Payé

Icône :

```text
CircleCheckBig
```

---

# 70. Dashboard — disposition desktop

Préférence :

```text
┌───────────────────────────────────────────────────┐
│ Header dashboard                                  │
├──────────┬──────────┬──────────┬─────────────────┤
│ KPI      │ KPI      │ KPI      │ KPI             │
├─────────────────────┬─────────────────────────────┤
│ Répartition         │ Volume par type             │
│ donut               │ bar chart                   │
├─────────────────────┴─────────────────────────────┤
│ Évolution mensuelle                              │
├───────────────────────────────────────────────────┤
│ Filtres                                           │
├───────────────────────────────────────────────────┤
│ Tableau des dossiers                              │
└───────────────────────────────────────────────────┘
```

---

# 71. Dashboard — esthétique

Le dashboard doit éviter le style :

```text
4 énormes cartes
+
4 énormes graphiques
+
plein de couleurs
```

Privilégier :

- hiérarchie ;
- espaces ;
- grille ;
- taille proportionnelle ;
- informations prioritaires en premier.

---

# 72. Home — esthétique

Le home doit être plus éditorial.

Ordre recommandé :

```text
Hero
↓
3 piliers
↓
Circuit
↓
Statistiques
↓
Aperçu dashboard
↓
Institution
↓
Footer
```

---

# 73. À propos — esthétique

Ordre :

```text
Hero
↓
Présentation
↓
Rattachement institutionnel
↓
Objectifs
↓
Fonctionnalités
↓
CTA dashboard
↓
Footer
```

---

# 74. Circuit — esthétique

Ordre :

```text
Hero
↓
Timeline
↓
Détail étape active
↓
Résumé du parcours
↓
CTA dashboard
↓
Footer
```

---

# 75. Dashboard — esthétique

Ordre :

```text
Header
↓
KPI
↓
Graphiques
↓
Filtres
↓
Dossiers
```

Pas de footer gigantesque sur cette page.

---

# 76. Dossier — esthétique

Ordre :

```text
Retour
↓
Header dossier
↓
Résumé
↓
Timeline
↓
Informations
```

---

# 77. Contact — esthétique

Ordre :

```text
Hero
↓
Coordonnées
↓
Formulaire
↓
Informations institutionnelles
↓
Footer
```

---

# 78. Contenu rédactionnel

Le ton des textes doit être :

- institutionnel ;
- simple ;
- pédagogique ;
- neutre ;
- professionnel.

Éviter les phrases marketing agressives.

Éviter :

```text
La solution révolutionnaire qui transforme
à jamais la finance publique.
```

Préférer :

```text
Une plateforme destinée à améliorer la visibilité
et le suivi de l'exécution des dépenses publiques.
```

---

# 79. Données fictives et transparence

Toutes les données de dashboard doivent être explicitement présentées comme fictives.

Afficher un petit badge :

```text
DÉMONSTRATION
```

ou :

```text
Données fictives
```

Position :

- sous le titre du dashboard ;
- ou dans le header.

Le prototype ne doit jamais donner l'impression que les chiffres correspondent à des statistiques officielles réelles.

---

# 80. Éléments à ne pas développer

Ne pas implémenter :

```text
Authentification réelle
Backend
API
Base de données
Paiement réel
Notifications réelles
Upload documentaire
Workflow administratif réel
Calcul budgétaire réel
Système de permissions
Administration
```

Ces éléments peuvent être mentionnés comme extensions futures, mais ne doivent pas alourdir le prototype.

---

# 81. Fonctionnalités réellement interactives

Même avec des données statiques, implémenter :

```text
Navigation entre pages
Menu mobile
Filtrage des dossiers
Recherche des dossiers
Tri du tableau
Navigation vers détail
Timeline interactive
Animations
Dropdowns
Formulaire de contact simulé
Toast
Hover states
Responsive layout
```

---

# 82. Fonctionnalités optionnelles

Ajouter uniquement si elles améliorent réellement l'expérience :

```text
Mode sombre
```

Il n'est pas obligatoire.

Une version claire doit être la priorité.

Autres options :

```text
Export CSV fictif
```

mais uniquement comme démonstration UI.

---

# 83. Principes UX

Le design doit suivre ces principes :

### 1. Hiérarchie

Les informations les plus importantes doivent être visibles immédiatement.

### 2. Cohérence

Même composant = même comportement partout.

### 3. Prévisibilité

Les boutons et liens doivent fonctionner comme attendu.

### 4. Lisibilité

Le texte ne doit jamais être comprimé.

### 5. Progressivité

Afficher d'abord l'essentiel, puis les détails.

### 6. Feedback

Chaque interaction importante doit avoir une réponse visuelle.

---

# 84. Exemple de workflow utilisateur

## Scénario 1

Utilisateur arrive sur :

```text
/
```

Il voit :

```text
Présentation
↓
Objectifs
↓
Circuit
↓
Dashboard
```

Il clique :

```text
Explorer le tableau de bord
```

Arrivée :

```text
/dashboard
```

Puis clique sur :

```text
DEP-2026-001
```

Arrivée :

```text
/dossiers/DEP-2026-001
```

Puis :

```text
← Retour au tableau de bord
```

---

# 85. Scénario 2

Utilisateur veut comprendre le processus.

Depuis l'accueil :

```text
Comprendre le circuit
```

Puis :

```text
/circuit
```

Il clique :

```text
Liquidation
```

La description change.

Il clique :

```text
Mandatement
```

Le contenu change.

---

# 86. Scénario 3

Utilisateur cherche un dossier.

Sur Dashboard :

```text
Recherche :
DEP-2026-006
```

Le tableau est filtré.

L'utilisateur clique sur la ligne.

Détail affiché.

---

# 87. Qualité visuelle attendue

Le résultat final doit être suffisamment travaillé pour donner l'impression d'un produit réel.

Le niveau attendu est :

```text
Design system cohérent
+
UI moderne
+
Animations discrètes
+
Responsive impeccable
+
Données crédibles
+
Dashboard professionnel
+
Micro-interactions
```

Le code n'est pas la seule priorité.

**La qualité visuelle est une priorité absolue.**

---

# 88. Contraintes de développement

Le développeur/agent doit :

- utiliser TypeScript ;
- éviter `any` autant que possible ;
- découper les composants ;
- éviter les composants énormes ;
- utiliser des données séparées de la présentation ;
- éviter de dupliquer le code ;
- centraliser les constantes ;
- utiliser des composants réutilisables ;
- garder le code lisible.

---

# 89. Qualité du code

Priorité :

```text
Lisibilité
Maintenabilité
Réutilisabilité
Performance
```

Éviter :

```text
console.log()
code mort
composants de 500 lignes
valeurs répétées
magic numbers
```

---

# 90. Architecture de données

Exemple :

```text
Dossier
│
├── id
├── reference
├── type
├── amount
├── createdAt
├── updatedAt
├── currentStep
├── status
└── timeline
```

Timeline :

```ts
timeline: [
  {
    step: "engagement",
    status: "completed",
    date: "2026-09-12"
  },
  {
    step: "liquidation",
    status: "completed",
    date: "2026-09-14"
  },
  {
    step: "mandatement",
    status: "current",
    date: null
  },
  {
    step: "paiement",
    status: "pending",
    date: null
  }
]
```

---

# 91. Comportement des données

Les statistiques affichées doivent rester cohérentes entre :

- accueil ;
- dashboard ;
- détail dossier.

Même si elles sont fictives, elles doivent donner l'impression de provenir de la même source.

---

# 92. Gestion de la date

Utiliser :

```text
23 septembre 2026
```

comme date de démonstration principale.

Format utilisateur :

```text
23 sept. 2026
```

ou :

```text
23 septembre 2026
```

Choisir un seul style.

---

# 93. Montants

Utiliser des montants fictifs en Ariary.

Exemple :

```text
125 000 000 Ar
48 500 000 Ar
72 300 000 Ar
210 000 000 Ar
```

Toujours préciser que les données sont fictives.

---

# 94. Composants particulièrement importants

Priorité de développement :

```text
1. Navbar
2. Hero
3. Timeline
4. KPI cards
5. Charts
6. Dossier table
7. Dossier detail
8. Responsive mobile
9. Animations
10. Footer
```

---

# 95. Priorité UX/UI

Ordre de priorité :

```text
1. Lisibilité
2. Hiérarchie visuelle
3. Cohérence
4. Responsive
5. Interactivité
6. Animation
```

Une interface magnifique mais illisible est juste une décoration coûteuse.

---

# 96. Animations recommandées

Exemple :

```text
Hero
fadeIn + translateY

Cards
opacity 0 → 1

Timeline
progress animation

Dashboard
KPI apparition staggered

Table
fade transition on filtering
```

Durées :

```text
150ms – 250ms
```

Éviter les animations trop longues.

Respecter :

```css
prefers-reduced-motion
```

---

# 97. Images

Limiter l'utilisation de photos.

Privilégier :

- illustrations vectorielles ;
- cartes UI ;
- graphiques ;
- formes abstraites ;
- icônes.

Le sujet est principalement informationnel.

---

# 98. Branding

Ne pas inventer de sceau officiel ou de logo gouvernemental présenté comme authentique.

Créer une identité visuelle de prototype.

Exemple :

```text
SPDP
Suivi des dépenses publiques
```

SPDP peut servir de nom de démonstration.

---

# 99. Nom de la plateforme

Nom de démonstration recommandé :

```text
SPDP
```

Signification :

```text
Système de Suivi des Dépenses Publiques
```

Sous-titre :

```text
Plateforme de suivi de l'exécution des dépenses publiques
```

Le nom peut être facilement modifié depuis une constante globale.

---

# 100. Footer institutionnel

Afficher :

```text
Service Financier et du Budget
MIDSP
```

sans inventer de structure administrative supplémentaire.

---

# 101. Page d'accueil — contenu final recommandé

### Hero

```text
SUIVI DES DÉPENSES PUBLIQUES

Suivre la dépense publique,
étape par étape.

Une plateforme de démonstration dédiée au suivi,
à la transparence et à la traçabilité de l'exécution
des dépenses publiques.

[ Explorer le tableau de bord ]
[ Comprendre le circuit ]
```

### Piliers

```text
Transparence
Traçabilité
Respect des principes budgétaires
```

### Circuit

```text
Engagement
→ Liquidation
→ Mandatement
→ Paiement
```

### Statistiques

```text
1 248 dossiers suivis
87 % dans les délais
14 jours de délai moyen
326 dossiers en cours
```

---

# 102. Fin de page dashboard

Après le tableau :

```text
Les données présentées dans ce tableau de bord
sont fictives et servent uniquement à illustrer
le fonctionnement de la plateforme.
```

---

# 103. États hover

Cards :

```text
translate-y[-2px]
subtle shadow
```

Buttons :

```text
brightness
shadow
background transition
```

Rows :

```text
background subtle
cursor pointer
```

---

# 104. États focus

Tous les éléments interactifs doivent avoir un focus clairement visible.

---

# 105. Loading states

Prévoir des skeletons pour :

```text
KPI
graph
table
detail
```

Même si les données sont locales.

---

# 106. Empty states

Exemple :

```text
Aucun dossier trouvé

Aucun dossier ne correspond
aux critères sélectionnés.
```

---

# 107. Architecture finale du produit

```text
                    SPDP
                     │
        ┌────────────┼─────────────┐
        │            │             │
     Informer     Expliquer      Suivre
        │            │             │
        ↓            ↓             ↓
     Accueil       Circuit      Dashboard
        │                           │
        ↓                           ↓
   À propos                    Dossiers
                                    │
                                    ↓
                              Détail dossier

                     │
                     ↓
                  Contact
```

---

# 108. Résultat attendu

Le produit final doit ressembler à une **plateforme institutionnelle moderne de suivi budgétaire**, et non à une simple page web.

L'utilisateur doit pouvoir :

```text
Comprendre
      ↓
Explorer
      ↓
Consulter
      ↓
Filtrer
      ↓
Détailler
```

---

# 109. Définition of Done

Le projet est considéré comme terminé lorsque :

- toutes les pages sont présentes ;
- la navigation fonctionne ;
- le site est responsive ;
- le dashboard est fonctionnel côté frontend ;
- les filtres fonctionnent ;
- la recherche fonctionne ;
- les graphiques sont cohérents ;
- les dossiers peuvent être ouverts ;
- la timeline fonctionne ;
- le formulaire affiche un feedback ;
- les données sont cohérentes ;
- les données sont explicitement fictives ;
- les animations sont discrètes ;
- l'accessibilité de base est respectée ;
- aucune erreur TypeScript importante n'est présente ;
- aucune console error n'apparaît dans une utilisation normale ;
- le design est cohérent de bout en bout.

---

# 110. Instruction finale destinée à l'agent de développement

Construis ce projet comme un **prototype frontend haut de gamme**, en donnant la priorité absolue à la qualité de l'interface et de l'expérience utilisateur.

Ne te contente pas d'assembler des composants standards.

Le design doit avoir :

- une vraie hiérarchie visuelle ;
- une identité institutionnelle ;
- une grille cohérente ;
- des espaces généreux ;
- une excellente lisibilité ;
- des animations discrètes ;
- des interactions crédibles ;
- des composants réutilisables ;
- une excellente expérience mobile.

Utilise les données fictives fournies dans ce document.

Ne crée pas de backend.

Ne crée pas de système d'authentification.

Ne crée pas de logique métier réelle.

Ne présente jamais les données fictives comme des statistiques officielles.

Toutes les pages doivent être réellement navigables.

La page Dashboard doit être la partie la plus riche du produit.

La page Circuit doit être la partie la plus pédagogique.

La page Accueil doit être la partie la plus esthétique et immédiatement compréhensible.

Le résultat final doit être suffisamment professionnel pour servir de **maquette de présentation institutionnelle et de prototype fonctionnel frontend**.