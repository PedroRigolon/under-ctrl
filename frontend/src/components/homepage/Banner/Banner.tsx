import { Landmark, ImageOff, BellRing, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const garantias: { label: string; Icon: LucideIcon }[] = [
  { label: "Sem conectar banco", Icon: Landmark },
  { label: "Imagens nunca salvas", Icon: ImageOff },
  { label: "Alertas e-mail e Telegram", Icon: BellRing },
  { label: "Conforme à LGPD", Icon: ShieldCheck },
];

// Faixa verde full-bleed logo abaixo do hero. Empilha no mobile e vira uma linha
// distribuída a partir de `md:`. Usa o mesmo ritmo de container/gutters das demais barras.
export default function Banner() {
  return (
    <div className="w-full bg-primary-dark text-on-primary lg:py-lg">
      <ul className="mx-auto flex w-full max-w-page list-none flex-col gap-md py-lg max-[375px]:px-gutter-mobile-sm px-gutter-mobile sm:px-gutter-sm lg:px-gutter-mobile md:flex-row md:items-center md:justify-between md:py-sm md:">
        {garantias.map(({ label, Icon }) => (
          <li
            key={label}
            className="flex items-center justify-center gap-xs md:gap-sm text-mobile md:text-mobile lg:text-regular-body"
          >
            <Icon className="size-5 shrink-0 text-primary-light" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
