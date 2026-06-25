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
  "inline-flex items-center justify-center gap-xs rounded-none px-md py-xs font-bold text-regular-body transition-colors disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-dark",
  secondary:
    "border border-primary text-primary bg-components hover:bg-primary-light",
  tertiary: "text-text",
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
