import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { CreditCard, TrendingUp, FileWarning } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const problemas: {
  Icon: LucideIcon;
  iconClass: string;
  titulo: string;
  descricao: string;
}[] = [
  {
    Icon: CreditCard,
    iconClass: "text-alert",
    titulo: "O “teste grátis” que virou cobrança fixa",
    descricao:
      "Você assina para testar, esquece de cancelar, e agora paga todo mês sem nem saber.",
  },
  {
    Icon: TrendingUp,
    iconClass: "text-warning",
    titulo: "A conta que só cresce",
    descricao:
      "Cinco, dez, quinze assinaturas. Somadas, viram um valor que assusta — e você nem tinha percebido.",
  },
  {
    Icon: FileWarning,
    iconClass: "text-text-subtle",
    titulo: "A planilha que você nunca atualiza",
    descricao:
      "Controlar tudo na mão dá trabalho demais. Aí você desiste — e volta a ser pego de surpresa.",
  },
];

export default function Problema() {
  return (
    <Section>
      <div className="flex flex-col gap-xl">
        <SectionHeader
          as="h2"
          size="h3"
          eyebrow="O problema"
          title="Você provavelmente paga mais em assinaturas do que imagina."
          subtitle="As cobranças recorrentes são silenciosas. Elas continuam saindo da sua conta mesmo quando você já esqueceu que existiam."
          className="mx-auto lg:max-w-[80%]"
        />

        <ul className="grid list-none gap-md md:grid-cols-3">
          {problemas.map(({ Icon, iconClass, titulo, descricao }) => (
            <Card as="li" key={titulo} className="flex flex-col gap-sm">
              <Icon className={`size-7 ${iconClass}`} />
              <h3 className="text-large-body font-bold">{titulo}</h3>
              <p className="text-regular-body text-text-subtle">{descricao}</p>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  );
}
