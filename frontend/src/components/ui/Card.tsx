import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface CardOwnProps<T extends ElementType> {
  /** Elemento semântico renderizado (div, li, article…). */
  as?: T;
  /** Mesclado às classes base — permite variações (destaque, padding, etc.). */
  className?: string;
  children: ReactNode;
}

type CardProps<T extends ElementType> = CardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps<T>>;

// Superfície reutilizável: fundo claro, borda sutil e padding padrão. Cada seção
// compõe seu próprio conteúdo dentro; variações (ex.: card destacado do Preço)
// chegam via `className`.
export default function Card<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: CardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const classes = `bg-components border border-border p-lg ${className}`;

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
