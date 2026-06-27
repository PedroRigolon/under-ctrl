import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionTag = "section" | "div" | "article" | "main";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  as?: SectionTag;
  children?: ReactNode;
  bg?: string;
}

export default function Section({
  as = "section",
  children,
  className = "",
  bg = "bg-background",
  ...rest
}: SectionProps) {
  const Tag: ElementType = as;
  return (
    <Tag className={`w-full min-h-section-dvh ${bg} flex flex-col justify-center items-center ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
