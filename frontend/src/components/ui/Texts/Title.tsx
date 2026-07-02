import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string,
}

export default function Title({ children, className}:TitleProps) {
  return (
    
      <h5 className={`max-[420px]:text-h5! text-h4! md:text-h3! xl:text-h2! ${className}`}>
        {children}
      </h5>
    
  );
}
