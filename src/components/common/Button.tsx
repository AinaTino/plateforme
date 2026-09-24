import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
};

const styles = {
  primary:
    "border-brand-700 bg-brand-700 text-white hover:border-brand-800 hover:bg-brand-800",
  secondary:
    "border-line bg-white text-ink hover:border-brand-300 hover:bg-brand-50",
  light:
    "border-white bg-white text-brand-900 hover:border-blue-100 hover:bg-blue-50",
};

export default function Button({
  children,
  href,
  variant = "primary",
  arrow = false,
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${styles[variant]}`}
      to={href}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" size={17} />}
    </Link>
  );
}
