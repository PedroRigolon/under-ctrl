import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Texts/Tag";
import Title, { TitleCard } from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import { Check } from "lucide-react";

const subs = [
  { name: "Streaming Plus", price: "R$ 55,90/mês", badge: "renova em 3 dias", soon: true },
  { name: "Música", price: "R$ 21,90/mês", badge: "12 dias" },
  { name: "Nuvem 200GB", price: "R$ 12,90/mês", badge: "20 dias" },
  { name: "Academia (app)", price: "R$ 123,90/mês", badge: "27 dias" },
];

// Mockup do painel: moldura escura + lista de assinaturas
function PainelMock() {
  return (
    <div className="w-full max-w-[340px] lg:max-w-[380px] mx-auto bg-primary-darker rounded-2xl p-sm">
      <div className="bg-components rounded-xl p-md flex flex-col gap-sm">
        <div className="flex justify-between items-center">
          <Text body={false} align="left" className="font-bold text-regular-body! text-text!">Suas assinaturas</Text>
          <Text body={false} className="text-mobile-sm! text-primary-dark! bg-primary-subtle rounded-full px-sm py-xxs">atualizado</Text>
        </div>
        <div className="bg-primary-darker rounded p-sm flex flex-col gap-xxs">
          <Text body={false} align="left" className="uppercase font-semibold text-mobile-sm! text-primary-light! tracking-widest">Total do mês</Text>
          <Text align="left" className="font-bold text-h5! text-components!">R$ 214,60</Text>
        </div>
        {subs.map(({ name, price, badge, soon }) => (
          <div key={name} className="flex justify-between items-center gap-sm bg-background rounded px-sm py-xs">
            <div className="flex flex-col items-start">
              <Text body={false} align="left" className="font-semibold text-mobile! text-text! whitespace-nowrap">{name}</Text>
              <Text body={false} align="left" className="text-mobile-sm! whitespace-nowrap">{price}</Text>
            </div>
            <Text body={false} className={`font-semibold text-mobile-sm! whitespace-nowrap shrink-0 rounded-full px-sm py-xxs ${soon ? "bg-alert-subtle text-alert!" : "bg-components text-text-subtle!"}`}>
              {badge}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

const benefits = [
  { title: "Nunca mais pague pelo que esqueceu", text: "O aviso chega antes da cobrança. Você decide o que continua e o que corta." },
  { title: "Saiba quanto custa por mês", text: "Todas as suas assinaturas somadas, num só lugar, sempre atualizadas." },
  { title: "Cadastro em segundos", text: "Sem digitar, sem conectar banco. Só o print — a IA faz o resto." },
  { title: "Avisos na hora certa", text: "7 dias, 3 dias e 24h antes. Por e-mail, Telegram, ou os dois." },
  { title: "Seus dados protegidos", text: "A imagem é lida e descartada na hora. Nunca é salva. Conforme a LGPD." },
  { title: "Pague uma vez, use sempre", text: "O plano lifetime é pago uma vez só. Sem mensalidade, nunca.", once: true },
];

export default function PorQue() {
  return (
    <Section as="section" id="recursos">
      <div className="flex flex-col gap-lg lg:gap-xl w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
        {/* header */}
        <div className="flex flex-col items-start gap-xs lg:gap-sm">
          <Tag>Por que Under CTRL</Tag>
          <Title align="left">O que você ganha</Title>
        </div>

        {/* mockup + checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-xl items-center">
          <PainelMock />
          <ul className="flex flex-col">
            {benefits.map(({ title, text, once }, i) => (
              <li
                key={title}
                className={`flex gap-sm items-start py-sm ${i < benefits.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="flex justify-center items-center size-7 shrink-0 rounded-full bg-primary text-components">
                  {once ? <span className="text-mobile-sm font-bold">1×</span> : <Check className="size-4" aria-hidden />}
                </span>
                <div className="flex flex-col items-start gap-xxs">
                  <TitleCard align="left" className="text-h6!">{title}</TitleCard>
                  <Text align="left" className="lg:text-regular-body!">{text}</Text>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
