import Section from "@/components/ui/Section";
import Window from "@/components/ui/Window";
import Tag from "@/components/ui/Texts/Tag";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import { Check, CheckCircle2 } from "lucide-react";

const bullets = [
  "Verde, amarelo e vermelho indicam o que está perto de renovar",
  "Upload com IA: arraste o comprovante e pronto",
  "Feedback claro a cada ação, sem confusão",
];

// tone = cor da barra lateral e da nota de renovação
const tones = {
  ok: { bar: "border-l-primary", note: "text-primary!" },
  warn: { bar: "border-l-warning", note: "text-warning-dark!" },
  urgent: { bar: "border-l-alert", note: "text-alert!" },
} as const;

const subs: { name: string; price: string; note: string; date: string; tone: keyof typeof tones }[] = [
  { name: "Netflix", price: "R$ 55,90", note: "Próxima cobrança", date: "12/07/2026", tone: "ok" },
  { name: "Spotify", price: "R$ 21,90", note: "Faltam 6 dias", date: "15/06/2026", tone: "warn" },
  { name: "iCloud+", price: "R$ 14,90", note: "Amanhã!", date: "10/06/2026", tone: "urgent" },
];

function PainelMock() {
  return (
    <Window>
      <div className="flex flex-col gap-sm">
        <div className="flex justify-between items-center pb-xs border-b border-border">
          <Text body={false} align="left" className="font-bold text-regular-body! text-text!">Suas assinaturas</Text>
          <Text body={false} className="text-mobile-sm!">Total/mês · R$ 92,70</Text>
        </div>
        {subs.map(({ name, price, note, date, tone }) => (
          <div key={name} className={`flex justify-between items-center gap-sm border border-border border-l-[6px] ${tones[tone].bar} rounded px-sm py-xs`}>
            <div className="flex flex-col items-start gap-xxs">
              <Text body={false} align="left" className="font-bold text-mobile! text-text!">{name}</Text>
              <Text body={false} className="uppercase font-semibold text-mobile-sm! bg-background rounded px-xs py-xxs">mensal</Text>
            </div>
            <div className="flex flex-col items-end">
              <Text body={false} align="right" className="font-bold text-mobile! text-text!">{price}</Text>
              <Text body={false} align="right" className={`font-semibold text-mobile-sm! ${tones[tone].note}`}>{note}</Text>
              <Text body={false} align="right" className="text-mobile-sm!">{date}</Text>
            </div>
          </div>
        ))}
        {/* toast de feedback */}
        <div className={`flex items-start gap-xs border border-border border-l-[6px] ${tones.ok.bar} rounded px-sm py-xs`}>
          <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden />
          <div className="flex flex-col items-start gap-xxs">
            <Text body={false} align="left" className="font-bold text-mobile! text-text!">Assinatura salva</Text>
            <Text body={false} align="left" className="text-mobile-sm!">A Netflix foi adicionada ao seu painel.</Text>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default function Produto() {
  return (
    <Section as="section" bg="bg-primary-darker">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-xl items-center w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
        {/* texto */}
        <div className="flex flex-col items-start gap-sm">
          <div className="flex flex-col items-start gap-xs lg:gap-sm">
            <Tag dark>O Produto</Tag>
            <Title align="left" className="text-components!">Tudo sob controle, num painel só.</Title>
          </div>
          <Text align="left" className="text-grey-light!">
            Veja todas as suas assinaturas, quanto somam por mês e o que renova
            a seguir — com cores que avisam o que está chegando.
          </Text>
          <ul className="flex flex-col gap-xs">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-xs">
                <Check className="size-4 shrink-0 text-primary-light-3" aria-hidden />
                <Text align="left" className="lg:text-regular-body! text-components!">{item}</Text>
              </li>
            ))}
          </ul>
        </div>

        {/* mockup */}
        <div className="w-full max-w-[480px] justify-self-center lg:justify-self-end">
          <PainelMock />
        </div>
      </div>
    </Section>
  );
}
