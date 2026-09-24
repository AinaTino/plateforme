import { Menu, X } from "lucide-react";
import { useState } from "react";
import midspLogo from "../../imports/WhatsApp_Image_2026-09-24_at_12.58.41__1_.jpeg";

const links = [
  { label: "Accueil", href: "/", active: true },
  { label: "À propos", href: "/about" },
  { label: "Circuit de la dépense", href: "/circuit" },
  { label: "Tableau de bord", href: "/dashboard" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a className="flex items-center gap-3" href="/" aria-label="Accueil">
          <img
            alt=""
            className="h-12 w-12 rounded-lg object-contain"
            src={midspLogo}
          />
          <span className="hidden sm:block">
            <span className="block text-sm font-bold leading-tight text-ink">
              Suivi des dépenses publiques
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              MIDSP · Service Financier et du Budget
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              className={`rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                link.active
                  ? "bg-brand-50 text-brand-800"
                  : "text-muted hover:bg-slate-100 hover:text-ink"
              }`}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="grid h-11 w-11 place-items-center rounded-lg border border-line text-ink transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 lg:hidden"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-line bg-white px-5 py-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto max-w-7xl">
            {links.map((link) => (
              <a
                className={`block rounded-lg px-4 py-3 text-sm font-semibold ${
                  link.active ? "bg-brand-50 text-brand-800" : "text-muted hover:bg-slate-50"
                }`}
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
