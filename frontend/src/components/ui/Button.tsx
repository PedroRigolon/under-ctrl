import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "tertiary";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  Icon?: LucideIcon;
  className?: string;
}

// Sem `href` -> <button>; com `href` -> <Link> (next/link).
type ButtonAsButton = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center gap-xs rounded px-md py-xs font-bold text-regular-body transition-transform duration-75 disabled:opacity-50 disabled:pointer-events-none";

// Efeito de keycap: borda grossa + shadow funcionando como "base" da tecla;
// no :active a tecla afunda 9px (= offset do shadow) e a base some.
const keycap = "translate-y-[-4px] active:translate-y-[4px] active:shadow-none";

const variantStyles: Record<Variant, string> = {
  primary: `${keycap} bg-primary text-components  shadow-[0_4px_0_3px_var(--color-primary-dark)]`,
  secondary: `${keycap} bg-components text-primary-light-3 border-primary-light shadow-[0_4px_0_3px_var(--color-primary-light-3)]`,
  tertiary: "text-primary",
};

export default function Button({
  children,
  variant = "primary",
  Icon,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;
  const content = (
    <>
      {Icon && <Icon />}
      {children}
    </>
  );

  // Se receber `href`, renderiza um link; caso contrário, um botão normal.
  if (rest.href != null) {
    return (
      <Link className={classes} {...(rest as ButtonAsLink)}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
