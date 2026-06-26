import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "light" | "dark";

interface SectionOwnProps<T extends ElementType> {
  /** Elemento semântico renderizado (main, section, article…). */
  as?: T;
  /** Fundo full-bleed: claro (padrão) ou verde-escuro. */
  variant?: Variant;
  /** Opt-in: altura mínima de uma tela menos a navbar (min-h-section-dvh). */
  screen?: boolean;
  /** Opt-in: centraliza o conteúdo vertical e horizontalmente (hero/CTA). */
  center?: boolean;
  /** Mesclado no container interno (área de conteúdo). */
  className?: string;
  children: ReactNode;
}

// `as` é tipado como `T`, então o tipo do elemento é inferido na chamada e os
// atributos HTML específicos daquele elemento são checados via `...rest`.
type SectionProps<T extends ElementType> = SectionOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SectionOwnProps<T>>;

const variantStyles: Record<Variant, string> = {
  light: "bg-background text-text",
  dark: "bg-primary-dark text-on-primary",
};

// O elemento semântico pinta o fundo de borda a borda e controla altura/
// centralização; o <div> interno aplica max-width + gutters + ritmo vertical.
export default function Section<T extends ElementType = "section">({
  as,
  variant = "light",
  screen = false,
  center = false,
  className = "",
  children,
  ...rest
}: SectionProps<T>) {
  const Tag = (as ?? "section") as ElementType;

  const outer = [
    "w-full",
    variantStyles[variant],
    screen && "min-h-section-dvh",
    center && "flex flex-col justify-center",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = [
    "mx-auto w-full max-w-page max-[375px]:px-gutter-mobile-sm px-gutter-mobile sm:px-gutter-sm lg:px-gutter-mobile py-xxl md:pb-xxxl md:pt-xxl",
    center && "flex flex-col items-center text-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={outer} {...rest}>
      <div className={inner}>{children}</div>
    </Tag>
  );
}
