import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Texts/Tag";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import { ArrowRight, Check, X } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  desc: string;
  features: { label: string; included: boolean }[];
  cta: string;
  variant: "primary" | "secondary";
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Gratuito",
    price: "R$ 0",
    desc: "Para começar a organizar suas assinaturas hoje.",
    features: [
      { label: "Cadastro de assinaturas", included: true },
      { label: "Upload com IA (limitado)", included: true },
      { label: "Alertas por e-mail", included: true },
      { label: "Alertas por Telegram", included: false },
    ],
    cta: "Começar grátis",
    variant: "secondary",
  },
  {
    name: "Pro",
    price: "R$ 49",
    priceNote: "/ único",
    desc: "Pague uma vez, use para sempre. Sem mensalidade.",
    features: [
      { label: "Assinaturas sem limite", included: true },
      { label: "Upload com IA sem restrição", included: true },
      { label: "Alertas por e-mail e Telegram", included: true },
      { label: "Acesso vitalício a tudo", included: true },
    ],
    cta: "Quero o lifetime",
    variant: "primary",
    badge: "Pague uma vez",
  },
];

export default function Preco() {
  return (
    <Section as="section" id="preco">
      <div className="flex flex-col gap-lg lg:gap-xl w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
        {/* header */}
        <div className="flex flex-col items-center gap-xs lg:gap-sm">
          <Tag>Preço</Tag>
          <Title>Comece grátis. Faça upgrade quando quiser.</Title>
          <Text>
            Um app que corta assinaturas recorrentes não deveria ser mais uma
            delas. Por isso o plano pago é único.
          </Text>
        </div>

        {/* planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg w-full max-w-[860px] mx-auto items-start">
          {plans.map(({ name, price, priceNote, desc, features, cta, variant, badge }) => (
            <div
              key={name}
              className={`relative flex flex-col gap-sm bg-components rounded p-md lg:p-lg ${badge ? "border border-primary" : ""}`}
            >
              {badge && (
                <Text body={false} className="absolute -top-sm left-lg font-semibold text-mobile! text-components! bg-primary-dark rounded px-sm py-xxs">
                  {badge}
                </Text>
              )}
              <Text body={false} align="left" className="uppercase font-semibold text-mobile! tracking-widest">{name}</Text>
              <p className="text-text!">
                <span className="text-h4 font-bold">{price}</span>
                {priceNote && <span className="text-text-subtle!"> {priceNote}</span>}
              </p>
              <Text align="left" className="lg:text-regular-body!">{desc}</Text>
              <ul className="flex flex-col gap-xs py-sm">
                {features.map(({ label, included }) => (
                  <li key={label} className={`flex items-center gap-xs ${included ? "" : "opacity-50"}`}>
                    {included
                      ? <Check className="size-4 shrink-0 text-primary" aria-hidden />
                      : <X className="size-4 shrink-0 text-text-subtle" aria-hidden />}
                    <Text align="left" className="lg:text-regular-body! text-text!">{label}</Text>
                  </li>
                ))}
              </ul>
              <Button variant={variant} size="lg" href="/login" Icon={variant === "primary" ? ArrowRight : undefined} className="w-full">
                {cta}
              </Button>
            </div>
          ))}
        </div>

        <Text body={false} className="text-mobile!">
          Pagamento via PIX ou cartão pelo Mercado Pago. * Valores e limites ilustrativos.
        </Text>
      </div>
    </Section>
  );
}
