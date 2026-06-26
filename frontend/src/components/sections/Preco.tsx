import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Check, X } from "lucide-react";

const planoGratis = {
  nome: "Gratuito",
  preco: "R$ 0",
  periodo: null as string | null,
  descricao: "Para começar a organizar suas assinaturas hoje.",
  recursos: [
    { label: "Cadastro de assinaturas", incluso: true },
    { label: "Upload com IA (limitado)", incluso: true },
    { label: "Alertas por e-mail", incluso: true },
    { label: "Alertas por Telegram", incluso: false },
  ],
  cta: "Começar grátis",
};

const planoPro = {
  nome: "Pro",
  preco: "R$ 49",
  periodo: "único",
  descricao: "Pague uma vez, use para sempre. Sem mensalidade.",
  recursos: [
    { label: "Assinaturas sem limite", incluso: true },
    { label: "Upload com IA sem restrição", incluso: true },
    { label: "Alertas por e-mail e Telegram", incluso: true },
    { label: "Acesso vitalício a tudo", incluso: true },
  ],
  cta: "Quero o lifetime",
};

function Recurso({ label, incluso }: { label: string; incluso: boolean }) {
  return (
    <li className="flex items-center gap-xs">
      {incluso ? (
        <Check className="size-5 shrink-0 text-primary" />
      ) : (
        <X className="size-5 shrink-0 text-text-subtle" />
      )}
      <span className={incluso ? "" : "text-text-subtle"}>{label}</span>
    </li>
  );
}

export default function Preco() {
  return (
    <Section>
      <div className="flex flex-col gap-xl">
        <SectionHeader
          as="h2"
          size="h3"
          eyebrow="Preço"
          title="Comece grátis. Faça upgrade quando quiser."
          subtitle="Um app que corta assinaturas recorrentes não deveria ser mais uma delas. Por isso o plano pago é único."
          className="mx-auto"
        />

        <div className="grid items-start gap-lg md:grid-cols-2">
          {/* Plano gratuito */}
          <Card className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
              <span className="text-tag font-bold uppercase tracking-wide text-text-subtle">
                {planoGratis.nome}
              </span>
              <span className="text-h3 font-bold">{planoGratis.preco}</span>
              <p className="text-regular-body text-text-subtle">
                {planoGratis.descricao}
              </p>
            </div>

            <ul className="flex flex-col gap-sm list-none text-regular-body">
              {planoGratis.recursos.map((r) => (
                <Recurso key={r.label} {...r} />
              ))}
            </ul>

            <Button variant="secondary" href="/login" className="w-full">
              {planoGratis.cta}
            </Button>
          </Card>

          {/* Plano pro (destaque) */}
          <Card className="flex flex-col gap-lg border-2 border-primary shadow-lg">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-sm">
                <span className="text-tag font-bold uppercase tracking-wide text-primary">
                  {planoPro.nome}
                </span>
                <span className="w-fit rounded-full bg-primary-subtle px-sm py-xxs text-tag-mobile font-bold uppercase tracking-wide text-primary">
                  Pague uma vez
                </span>
              </div>
              <span className="flex items-baseline gap-xs">
                <span className="text-h3 font-bold">{planoPro.preco}</span>
                <span className="text-regular-body text-text-subtle">
                  / {planoPro.periodo}
                </span>
              </span>
              <p className="text-regular-body text-text-subtle">{planoPro.descricao}</p>
            </div>

            <ul className="flex flex-col gap-sm list-none text-regular-body">
              {planoPro.recursos.map((r) => (
                <Recurso key={r.label} {...r} />
              ))}
            </ul>

            <Button variant="primary" href="/login" className="w-full">
              {planoPro.cta}
            </Button>
          </Card>
        </div>

        <p className="text-center text-mobile text-text-subtle">
          Pagamento via PIX ou cartão pelo Mercado Pago · Valores e limites ilustrativos
        </p>
      </div>
    </Section>
  );
}
