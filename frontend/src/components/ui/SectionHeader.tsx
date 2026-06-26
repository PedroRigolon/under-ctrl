import type { ReactNode } from "react";

type Variant = "light" | "dark";
type Align = "center" | "left";
type Level = "h1" | "h2" | "h3" | "h4";

interface SectionHeaderProps {
  /** Rótulo da pílula acima do título (uppercase). */
  eyebrow?: string;
  /** ReactNode de propósito: permite destacar palavras (ex.: <span> verde). */
  title: ReactNode;
  subtitle?: ReactNode;
  /** Adapta as cores ao fundo da Section. */
  variant?: Variant;
  align?: Align;
  /** Nível semântico do título. */
  as?: Level;
  /** Tamanho visual do título; por padrão acompanha o `as`. */
  size?: Level;
  className?: string;
}

const eyebrowStyles: Record<Variant, string> = {
  light: "bg-primary-subtle text-primary",
  dark: "bg-on-primary/10 text-on-primary",
};

const titleStyles: Record<Variant, string> = {
  light: "text-text",
  dark: "text-on-primary",
};

const subtitleStyles: Record<Variant, string> = {
  light: "text-text-subtle",
  dark: "text-on-primary/80",
};

// Tamanho visual por nível (mobile-first). O hero usa `size="h2"`; as seções, h3.
const titleSize: Record<Level, string> = {
  h1: "text-h3 md:text-h2 lg:text-h1",
  h2: "text-h4 md:text-h3 lg:text-h2",
  h3: "text-h5 md:text-h4 lg:text-h3",
  h4: "text-h5 md:text-h5 lg:text-h4",
};

// Renderiza só o grupo de texto (não impõe largura), então encaixa tanto em
// sections centralizadas quanto na coluna de texto de layouts de duas colunas.
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = "light",
  align = "center",
  as: Heading = "h2",
  size,
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-md ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`w-fit rounded-full px-sm py-xxs text-tag-mobile md:text-tag font-bold uppercase tracking-wide  ${eyebrowStyles[variant]}`}
        >
          {eyebrow}
        </span>
      )}

      <Heading className={`${titleSize[size ?? Heading]} lg:leading-snug font-bold ${titleStyles[variant]}`}>
        {title}
      </Heading>

      {subtitle && (
        <p
          className={`max-w-[640px] text-regular-body md:text-large-body ${subtitleStyles[variant]}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
