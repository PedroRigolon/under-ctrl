import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string,
  align?: "left" | "center" | "right" | "justify";
  /** false = sem o lg:text-h6 padrão; o tamanho do className vale em todos os breakpoints */
  body?: boolean;
}

const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

export default function Text({ children, className = "", align = "center", body = true}:TextProps) {
  return (
      <p className={`font-light ${body ? "lg:text-h6!" : ""} ${alignClasses[align]} ${className}`}>
        {children}
      </p>
  );
}
