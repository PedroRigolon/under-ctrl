import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string,
}

export default function Text({ children, className}:TextProps) {
  return (
    
      <p className={`font-light lg:text-h6! ${className}`}>
        {children}
      </p>
    
  );
}
