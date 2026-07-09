import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
  h2?: boolean;
  align?: "left" | "center" | "right" | "justify";
}
interface TitleCardProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
}

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export default function Title({
  children,
  className = "",
  h2 = false,
  align = "center",
}: TitleProps) {
  return (
    <h5
      className={`max-[420px]:text-h5! text-h4! md:text-h4 xl:text-h3 ${alignClasses[align]} ${h2 ? "lg:text-h3! xl:text-h2!" : ""}  ${className}`}
    >
      {children}
    </h5>
  );
}

export function TitleCard({
  children,
  className = "",
  align = "center",
}: TitleCardProps) {
  return (
    <h6
      className={`font-bold md:text-[1.5rem]!  text-text!     ${alignClasses[align]} ${className}`}
    >
      {children}
    </h6>
  );
}
