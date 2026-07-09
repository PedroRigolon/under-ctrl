import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Texts/Tag";
import Title, { TitleCard } from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import Window from "@/components/ui/Window";
import { Image as ImageIcon } from "lucide-react";

/* ---------- mockups (só visual, sem interação) ---------- */

function DropzoneMock() {
  return (
    <Window>
      <div className="flex flex-col items-center gap-md border-2 border-dashed border-border rounded p-lg">
        <div className="flex items-center gap-xs bg-components rounded px-sm py-xs shadow-sm">
          <span className="rounded bg-primary-subtle p-xxs text-primary-dark">
            <ImageIcon className="size-4" aria-hidden />
          </span>
          <Text body={false} className="font-semibold text-mobile! text-primary!">fatura-cartao.png</Text>
        </div>
        <Text body={false} className="text-mobile-sm!">Arraste ou cole o print</Text>
      </div>
    </Window>
  );
}

const formFields = [
  { label: "Nome", value: "Streaming Plus" },
  { label: "Valor", value: "R$ 55,90/mês" },
  { label: "Próxima renovação", value: "12/08/2026" },
];

function FormMock() {
  return (
    <Window>
      <div className="flex flex-col gap-sm">
        <Text body={false} align="left" className="uppercase font-semibold text-mobile-sm! text-primary-dark! tracking-widest">
          Lido pela IA — revise
        </Text>
        {formFields.map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center border border-border rounded px-sm py-xs">
            <Text body={false} className="text-mobile-sm!">{label}</Text>
            <Text body={false} className="font-semibold text-mobile-sm! text-text!">{value}</Text>
          </div>
        ))}
        <div className="bg-primary-dark rounded py-xs text-center">
          <Text body={false} className="font-semibold text-mobile-sm! text-components!">Salvar assinatura</Text>
        </div>
      </div>
    </Window>
  );
}

const alerts = [
  { name: "Streaming Plus — R$ 55,90", via: "via Telegram", when: "em 24h", tone: "text-alert!" },
  { name: "Academia (app) — R$ 123,90", via: "via e-mail", when: "em 3 dias", tone: "text-warning!" },
  { name: "Cursos — R$ 34,90", via: "via Telegram + e-mail", when: "em 7 dias", tone: "text-primary-light!" },
];

function AlertsMock() {
  return (
    <div className="w-full bg-primary-darker rounded p-md flex flex-col gap-sm">
      <div className="flex items-center gap-xs">
        <span className="size-2 rounded-full bg-primary-light-3" />
        <Text body={false} className="uppercase font-semibold text-mobile-sm! text-primary-light! tracking-widest">
          Seus alertas
        </Text>
      </div>
      {alerts.map(({ name, via, when, tone }) => (
        <div key={name} className="flex justify-between items-center gap-sm bg-components/5 rounded px-sm py-xs">
          <div className="flex flex-col items-start">
            <Text body={false} align="left" className="font-semibold text-mobile-sm! text-components!">{name}</Text>
            <Text body={false} align="left" className="text-mobile-sm! text-grey-light!">{via}</Text>
          </div>
          <Text body={false} className={`font-semibold text-mobile-sm! whitespace-nowrap shrink-0 bg-components/10 rounded-full px-sm py-xxs ${tone}`}>
            {when}
          </Text>
        </div>
      ))}
    </div>
  );
}

/* ---------- seção ---------- */

const steps = [
  {
    n: "Passo 1",
    title: "Envie a imagem",
    text: "Foto do recibo, da fatura ou da tela do plano. A IA lê nome, valor e data automaticamente — você não precisa digitar nada.",
    Mock: DropzoneMock,
  },
  {
    n: "Passo 2",
    title: "Confira os dados e salve.",
    text: "Os dados chegam prontos para revisão. Você confirma com um clique. A decisão final é sempre sua.",
    Mock: FormMock,
  },
  {
    n: "Passo 3",
    title: "Receba o aviso",
    text: "Alertas por e-mail ou Telegram a 7 dias, 3 dias e 24h de cada renovação. Renove com calma ou cancele a tempo.",
    Mock: AlertsMock,
  },
];

export default function Solucao() {
  return (
    <Section as="section" id="como-funciona">
      <div className="flex flex-col gap-xl lg:gap-xxl w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
        {/* header */}
        <div className="flex flex-col items-center gap-xs lg:gap-sm">
          <Tag>A solução · Como funciona</Tag>
          <Title>Cadastre uma vez. Esqueça o resto.</Title>
          <Text>O Under CTRL faz o trabalho chato por você — em três passos simples.</Text>
        </div>

        {/* passos — mockup alterna de lado no desktop */}
        {steps.map(({ n, title, text, Mock }, i) => (
          <div key={n} className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xl items-center">
            <div className={`flex flex-col items-start gap-sm ${i % 2 ? "md:order-last" : ""}`}>
              <span className="w-fit rounded-full bg-primary-dark px-sm py-xxs text-components text-mobile-sm font-semibold uppercase">
                {n}
              </span>
              <TitleCard align="left">{title}</TitleCard>
              <Text align="left">{text}</Text>
            </div>
            <div className="w-full max-w-[440px] justify-self-center">
              <Mock />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
