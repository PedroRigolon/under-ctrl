import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";

const perguntas = [
  {
    pergunta: "Vocês acessam minha conta bancária?",
    resposta:
      "Nunca. O Under CTRL não se conecta a bancos nem a cartões. Ele só lê as imagens que você envia.",
  },
  {
    pergunta: "O que acontece com a foto do meu recibo?",
    resposta:
      "A imagem é processada na memória apenas para extrair os dados e nunca é salva. A IA só pré-preenche o formulário — a decisão final é sua.",
  },
  {
    pergunta: "É mesmo pagamento único?",
    resposta:
      "Sim. O plano Pro é um lifetime: você paga uma vez e usa para sempre, sem mensalidade.",
  },
  {
    pergunta: "Como recebo os avisos de renovação?",
    resposta:
      "Por e-mail e/ou Telegram, a 7 dias, 3 dias e 24h de cada renovação. Você escolhe os canais.",
  },
  {
    pergunta: "Meus dados estão protegidos?",
    resposta:
      "Sim. Seguimos a LGPD: imagens não são armazenadas e toda decisão passa por você (human-in-the-loop).",
  },
  {
    pergunta: "Preciso pagar para começar?",
    resposta:
      "Não. O plano gratuito já organiza suas assinaturas. O upgrade é opcional, quando fizer sentido.",
  },
];

export default function Faq() {
  return (
    <Section>
      <div className="flex flex-col gap-xl">
        <SectionHeader as="h2" size="h3" eyebrow="Dúvidas" title="Perguntas frequentes" className="mx-auto" />

        <div className="mx-auto flex w-full max-w-[760px] flex-col gap-sm">
          {perguntas.map(({ pergunta, resposta }) => (
            <details
              key={pergunta}
              className="group border border-border bg-components"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-sm px-md py-sm font-bold [&::-webkit-details-marker]:hidden">
                {pergunta}
                <ChevronDown className="size-5 shrink-0 text-text-subtle transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-md pb-md text-regular-body text-text-subtle">
                {resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
