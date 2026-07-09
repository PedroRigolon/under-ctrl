import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Texts/Tag";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import { ChevronDown } from "lucide-react";

// Copy provisória (redigida a partir do readme) — revisar antes de publicar.
const faqs = [
  {
    q: "Vocês acessam minha conta bancária?",
    a: "Não. O Under CTRL não conecta com bancos nem lê extratos. Você cadastra só as assinaturas que quiser — por print ou manualmente.",
  },
  {
    q: "O que acontece com a foto do meu recibo?",
    a: "Ela é processada na hora, apenas em memória, só para pré-preencher o formulário. A imagem nunca é salva — conforme a LGPD.",
  },
  {
    q: "É mesmo pagamento único?",
    a: "Sim. O plano Pro é lifetime: você paga uma vez e usa para sempre, sem mensalidade.",
  },
  {
    q: "Como recebo os avisos de renovação?",
    a: "Por e-mail e/ou Telegram, a 7 dias, 3 dias e 24h de cada renovação. Você escolhe o canal.",
  },
  {
    q: "Meus dados estão protegidos?",
    a: "Sim. Guardamos só o essencial — nome, valor e data das assinaturas — e nenhum dado bancário. Tudo conforme a LGPD.",
  },
  {
    q: "Preciso pagar para começar?",
    a: "Não. O plano gratuito já permite cadastrar assinaturas e receber alertas por e-mail. O upgrade é opcional.",
  },
];

export default function Faq() {
  return (
    <Section as="section" id="faq">
      <div className="flex flex-col gap-lg lg:gap-xl w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
        {/* header */}
        <div className="flex flex-col items-center gap-xs lg:gap-sm">
          <Tag>Dúvidas</Tag>
          <Title>Perguntas frequentes</Title>
        </div>

        {/* acordeão nativo, sem JS */}
        <div className="w-full max-w-[760px] mx-auto">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-border">
              <summary className="flex justify-between items-center gap-sm cursor-pointer list-none py-sm">
                <Text align="left" className="font-semibold lg:text-regular-body! text-primary-dark!">{q}</Text>
                <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <Text align="left" className="lg:text-regular-body! pb-sm">{a}</Text>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
