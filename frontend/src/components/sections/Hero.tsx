import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const garantias = [
  "Seu banco fica fora disso.",
  "Cadastro fácil de assinaturas com IA.",
  "Suas imagens nunca ficam salvas",
  "Pague uma vez, use para sempre.",
];

const assinaturas = [
  {
    nome: "Netflix",
    preco: "R$ 55,90",
    status: "Próxima cobrança",
    data: "12/07/2026",
    accent: "primary",
  },
  {
    nome: "Spotify",
    preco: "R$ 21,90",
    status: "Faltam 6 dias",
    data: "15/06/2026",
    accent: "warning",
  },
  {
    nome: "iCloud+",
    preco: "R$ 14,90",
    status: "Amanhã!",
    data: "10/06/2026",
    accent: "alert",
  },
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

export default function Hero() {
  return (
    <Section as="main">
      <div className="grid gap-xl md:grid-cols-[1.3fr_1fr] md:items-center">
        {/* Coluna de texto */}
        <div className="flex flex-col gap-lg">
          <SectionHeader
            as="h1"
            size="h2"
            align="left"
            title={
              <>
                Nenhuma cobrança vai te{" "}
                <span className="text-primary">
                  pegar de {" "} surpr
                  <span className="underline decoration-primary-light decoration-[5px] underline-offset-4">
                    esa
                  </span>
                </span>
                .
              </>
            }
            subtitle="O Under CTRL vigia suas assinaturas e te avisa por e-mail ou Telegram antes de cada renovação. Você decide o que continua."
          />

          <div className="flex flex-col gap-sm sm:flex-row">
            <Button
              variant="primary"
              href="/login"
              className="w-full sm:w-auto"
            >
              Criar conta grátis <ArrowRight className="size-5" />
            </Button>
            <Button variant="secondary" href="#" className="w-full sm:w-auto">
              Como funciona?
            </Button>
          </div>

          <ul className="grid md:grid-cols-2 gap-xs list-none  sm:gap-lg">
            {garantias.map((item) => (
              <li
                key={item}
                className="flex items-center gap-xs text-regular-body"
              >
                
              <p className="text-primary text-regular-body font-bold">✓</p>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna do mockup (painel ilustrativo) */}
        <div className="bg-components p-md shadow-lg md:p-lg ">
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
                  <span className="w-fit  bg-components px-xs py-xxs text-mobile-sm uppercase text-text-subtle">
                    Mensal
                  </span>
                </div>
                <div className="flex flex-col items-end gap-xxs">
                  <span className="font-bold">{sub.preco}</span>
                  <span
                    className={`text-mobile-sm font-bold ${accentText[sub.accent]}`}
                  >
                    {sub.status}
                  </span>
                  <span className="text-mobile-sm text-text-subtle">
                    {sub.data}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-md bg-primary-dark px-md py-sm text-center text-mobile text-on-primary">
            Avisamos você <span className="font-bold">antes</span> de cada uma —
            a 7 dias, 3 dias e 24h.
          </p>
        </div>
      </div>
    </Section>
  );
}
