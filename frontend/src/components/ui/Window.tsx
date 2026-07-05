import type { ReactNode } from "react";

// Moldura de "janela de browser" para mockups: header com 3 bolinhas + conteúdo
export default function Window({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-full bg-components rounded shadow-sm overflow-hidden ${className}`}>
      <div className="flex gap-xs px-sm py-xs border-b border-border">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-2.5 rounded-full bg-border" />
        ))}
      </div>
      <div className="p-md">{children}</div>
    </div>
  );
}
