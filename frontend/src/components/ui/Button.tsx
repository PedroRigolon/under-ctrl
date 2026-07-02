import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  Icon?: LucideIcon;
};

// Sem `href` -> <button>; com `href` -> <Link> (next/link).
type ButtonAsButton = BaseProps & ComponentProps<"button"> & { href?: undefined };
type ButtonAsLink = BaseProps & ComponentProps<typeof Link>;
type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center gap-xs rounded px-md py-xs font-bold transition:[transform,box-shadow] duration-200 disabled:opacity-50 disabled:pointer-events-none";

// Efeito de keycap: borda grossa + shadow funcionando como "base" da tecla;
// no :active a tecla afunda 4px (= offset do shadow) e a base some.
const keycap = "translate-y-[-4px] active:translate-y-[4px] active:shadow-none";

const variantStyles: Record<Variant, string> = {
  primary: `${keycap} bg-primary text-components shadow-[0_4px_0_3px_var(--color-primary-dark)]`,
  secondary: `${keycap} bg-components text-primary-light-3 border-primary-light shadow-[0_4px_0_3px_var(--color-primary-light-3)]`,
  tertiary: "text-primary hover:text-primary-dark",
};
const sizeStyles: Record<Size, string> = {
  sm: `text-mobile`,
  md: `text-regular-body`,
  lg:`text-regular-body xl:text-h6`
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  Icon,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const content = (
    <>
      {children}
      {Icon && <Icon />}
    </>
  );

  if (rest.href != null) {
    return (
      <Link className={classes} {...(rest as ButtonAsLink)}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}
