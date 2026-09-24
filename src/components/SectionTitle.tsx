interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-stone-400">{description}</p>
    </div>
  );
}
