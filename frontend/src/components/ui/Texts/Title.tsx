import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string,
}

export default function Title({ children, className}:TitleProps) {
  return (
    
      <h5 className={`md:text-h4! lg:text-h3! xl:text-h2! ${className}`}>
        {children}
      </h5>
    
  );
}
