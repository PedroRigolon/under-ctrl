import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Check } from "lucide-react";

const destaques = [
  "Verde, amarelo e vermelho indicam o que está perto de renovar.",
  "Upload com IA: anexe a print, confira e pronto.",
  "Feedback claro a cada ação, sem confusão.",
];

const assinaturas = [
  { nome: "Netflix", preco: "R$ 55,90", status: "Próxima cobrança", accent: "primary" },
  { nome: "Spotify", preco: "R$ 21,90", status: "Faltam 6 dias", accent: "warning" },
  { nome: "iCloud+", preco: "R$ 14,90", status: "Amanhã!", accent: "alert" },
] as const;

const accentBorder = {
  primary: "border-primary",
  warning: "border-warning",
  alert: "border-alert",
} as const;

const accentText = {
  primary: "text-primary",
  warning: "text-warning",
  alert: "text-alert",
} as const;

export default function Produto() {
  return (
    <Section variant="dark">
      <div className="grid gap-xl md:grid-cols-2 md:items-center">
        {/* Coluna de texto */}
        <div className="flex flex-col gap-lg">
          <SectionHeader
            as="h2"
            size="h3"
            variant="dark"
            align="left"
            eyebrow="O produto"
            title="Tudo sob controle, num painel só."
            subtitle="Veja todas as suas assinaturas, quanto somam por mês e o que renova a seguir — com cores que avisam o que está chegando."
          />

          <ul className="flex flex-col gap-sm list-none">
            {destaques.map((item) => (
              <li key={item} className="flex items-start gap-xs text-large-body">
                <Check className="mt-1 size-5 shrink-0 text-primary-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna do mockup (painel ilustrativo) */}
        <div className="bg-components p-md text-text shadow-lg md:p-lg">
          <div className="flex items-center justify-between pb-md">
            <span className="font-bold">Suas assinaturas</span>
            <span className="text-mobile text-text-subtle">
              Total = <span className="font-bold text-text">R$ 92,70</span>/mês
            </span>
          </div>

          <ul className="flex flex-col gap-sm list-none">
            {assinaturas.map((sub) => (
              <li
                key={sub.nome}
                className={`flex items-center justify-between gap-sm border-l-4 bg-background px-md py-sm ${accentBorder[sub.accent]}`}
              >
                <div className="flex flex-col items-start gap-xxs">
                  <span className="font-bold">{sub.nome}</span>
                  <span className="w-fit bg-components px-xs py-xxs text-mobile-sm uppercase text-text-subtle">
                    Mensal
                  </span>
                </div>
                <div className="flex flex-col items-end gap-xxs">
                  <span className="font-bold">{sub.preco}</span>
                  <span className={`text-mobile-sm font-bold ${accentText[sub.accent]}`}>
                    {sub.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-md flex items-center gap-sm bg-primary-subtle px-md py-sm">
            <Check className="size-5 shrink-0 text-primary" />
            <div className="flex flex-col">
              <span className="text-mobile font-bold text-primary">Assinatura salva</span>
              <span className="text-mobile-sm text-text-subtle">
                A Netflix foi adicionada ao seu painel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
