type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.16em] ${
          light ? "text-blue-300" : "text-brand-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-slate-300" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
