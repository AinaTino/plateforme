import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock3, Send } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const contactCards = [
  {
    icon: MapPin,
    title: "Adresse",
    text: "Service Financier et du Budget · MIDSP\nAntananarivo, Madagascar",
  },
  {
    icon: Phone,
    title: "Téléphone",
    text: "+261 XX XX XXX XX",
  },
  {
    icon: Mail,
    title: "Email",
    text: "contact@exemple.mg",
  },
  {
    icon: Clock3,
    title: "Horaires",
    text: "Lundi — Vendredi\n08:00 — 16:00",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(() => setSubmitted(false), 4000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                Contact
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Le Service Financier et du Budget</h1>
              <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
                Pour toute demande d’information, adressez-vous au Service Financier et du Budget. Les coordonnées affichées ici sont fictives.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionTitle eyebrow="Coordonnées" title="Une prise de contact simple et institutionnelle" description="Les éléments ci-dessous servent de démonstration et ne correspondent pas à des contacts officiels réels." />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, text }) => (
              <article className="rounded-2xl border border-line bg-white p-5" key={title}>
                <Icon className="text-brand-700" size={20} />
                <h2 className="mt-4 text-lg font-bold">{title}</h2>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-line bg-brand-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Coordonnées de démonstration</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight">Le formulaire n’est pas connecté à un backend.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Un message de confirmation local est affiché après l’envoi pour simuler un retour utilisateur crédible.
              </p>
              <div className="mt-8">
                <Button href="/dashboard" variant="light" arrow>
                  Voir le tableau de bord
                </Button>
              </div>
            </div>

            <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.22 }} onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.35)] sm:p-8">
              <h2 className="text-xl font-bold">Envoyer un message</h2>
              <div className="mt-6 grid gap-4">
                {[
                  ["Nom complet", "text"],
                  ["Adresse email", "email"],
                  ["Objet", "text"],
                ].map(([label, type]) => (
                  <label className="grid gap-2" key={label}>
                    <span className="text-sm font-semibold text-ink">{label}</span>
                    <input className="rounded-xl border border-line bg-canvas px-4 py-3 text-sm outline-none transition focus:border-brand-300 focus:bg-white" required type={type} />
                  </label>
                ))}

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-ink">Message</span>
                  <textarea className="min-h-36 rounded-xl border border-line bg-canvas px-4 py-3 text-sm outline-none transition focus:border-brand-300 focus:bg-white" required />
                </label>
              </div>

              <button className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-700 bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand-800 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2" type="submit">
                Envoyer le message
                <Send size={16} />
              </button>

              {submitted && (
                <div aria-live="polite" className="mt-5 rounded-2xl border border-success-200 bg-success-50 p-4 text-success-800">
                  <p className="text-sm font-bold">Message envoyé</p>
                  <p className="mt-1 text-sm leading-6">Ceci est une démonstration. Aucun message réel n’a été transmis.</p>
                </div>
              )}
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
