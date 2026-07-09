import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionTag = "section" | "div" | "article" | "main";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  as?: SectionTag;
  children?: ReactNode;
  bg?: string;
  full?: boolean; // false = altura livre (sem min-h de 100dvh)
}

export default function Section({
  as = "section",
  children,
  className = "",
  bg = "bg-background",
  full = true,
  ...rest
}: SectionProps) {
  const Tag: ElementType = as;
  const minH = full ? "min-h-section-dvh-mobile md:min-h-section-dvh-desktop" : "";
  return (
    <Tag className={`w-full ${minH} py-section-mobile md:py-section-desktop ${bg} flex flex-col justify-center items-center ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
