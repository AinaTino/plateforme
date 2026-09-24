import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { midspLogo } from "../../assets/images";

const links = [
  { label: "Accueil", href: "/", end: true },
  { label: "À propos", href: "/about" },
  { label: "Circuit de la dépense", href: "/circuit" },
  { label: "Tableau de bord", href: "/dashboard" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const linkClasses = (isActive: boolean) =>
    `relative rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${
      isActive ? "text-brand-800" : "text-muted hover:bg-slate-100 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <NavLink className="flex items-center gap-3" end to="/" aria-label="Accueil">
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
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => linkClasses(isActive)}
              end={link.end}
              to={link.href}
              key={link.href}
            >
              {({ isActive }) => (
                <span className="relative z-10">
                  {isActive && (
                    <motion.span
                      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-brand-50"
                      layoutId="nav-active-pill"
                      transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
                    />
                  )}
                  {link.label}
                </span>
              )}
            </NavLink>
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
        <AnimatePresence>
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Navigation mobile"
            className="border-t border-line bg-white px-5 py-4 shadow-lg lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
          >
            <div className="mx-auto max-w-7xl">
              {links.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    `relative block rounded-lg px-4 py-3 text-sm font-semibold ${
                      isActive ? "text-brand-800" : "text-muted hover:bg-slate-50"
                    }`
                  }
                  end={link.end}
                  onClick={() => setOpen(false)}
                  to={link.href}
                  key={link.href}
                >
                  {({ isActive }) => (
                    <span className="relative z-10">
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 -z-10 rounded-lg bg-brand-50"
                          layoutId="nav-active-pill-mobile"
                          transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
                        />
                      )}
                      {link.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        </AnimatePresence>
      )}
    </header>
  );
}
