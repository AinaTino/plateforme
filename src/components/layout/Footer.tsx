import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import midspLogo from "../../imports/midsp.jpeg";

const links = [
  ["Accueil", "/"],
  ["À propos", "/about"],
  ["Circuit", "/circuit"],
  ["Tableau de bord", "/dashboard"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                alt=""
                className="h-12 w-12 rounded-lg bg-white object-contain"
                src={midspLogo}
              />
              <p className="text-sm font-bold leading-5">
                Suivi des dépenses
                <br />
                publiques
              </p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Une plateforme de démonstration pour rendre le circuit de la dépense
              publique plus lisible, transparent et accessible.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link className="text-sm text-slate-300 transition hover:text-white" to={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
              Institution
            </h2>
            <p className="mt-5 text-sm font-semibold leading-6">
              Service Financier
              <br />
              et du Budget
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Ministère de l’Industrialisation et du Développement du Secteur Privé
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-blue-300" size={17} />
                Antananarivo, Madagascar
              </li>
              <li className="flex gap-3">
                <Phone className="shrink-0 text-blue-300" size={17} />
                +261 XX XX XXX XX
              </li>
              <li className="flex gap-3">
                <Mail className="shrink-0 text-blue-300" size={17} />
                contact@exemple.mg
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 — Prototype de démonstration</p>
          <p>Les données présentées sont entièrement fictives.</p>
        </div>
      </div>
    </footer>
  );
}
