import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Check, Wallet, Zap, BellRing, ShieldCheck, Infinity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const beneficios: { Icon: LucideIcon; titulo: string; descricao: string }[] = [
  {
    Icon: Check,
    titulo: "Nunca mais pague pelo que esqueceu",
    descricao: "O aviso chega antes da cobrança. Você decide o que vale e o que corta.",
  },
  {
    Icon: Wallet,
    titulo: "Saiba quanto custa por mês",
    descricao: "Todas as assinaturas somadas, num só lugar, sempre atualizadas.",
  },
  {
    Icon: Zap,
    titulo: "Cadastro em segundos",
    descricao: "Sem digitar, sem conectar banco. Só a print — a IA faz o resto.",
  },
  {
    Icon: BellRing,
    titulo: "Avisos na hora certa",
    descricao: "7 dias, 3 dias e 24h antes. Por e-mail, Telegram, ou os dois.",
  },
  {
    Icon: ShieldCheck,
    titulo: "Seus dados protegidos",
    descricao: "A imagem é processada na hora. Nunca é salva. Conforme à LGPD.",
  },
  {
    Icon: Infinity,
    titulo: "Pague uma vez, use sempre",
    descricao: "Cobrança recorrente? Não aqui. Um lifetime e pronto: pague uma vez, use sempre.",
  },
];

export default function Beneficios() {
  return (
    <Section>
      <div className="flex flex-col gap-xl">
        <SectionHeader
          as="h2"
          size="h3"
          eyebrow="Por que Under CTRL"
          title="O que você ganha"
          className="mx-auto"
        />

        <ul className="grid list-none gap-md md:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ Icon, titulo, descricao }) => (
            <Card as="li" key={titulo} className="flex flex-col gap-sm">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary-subtle text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="text-h5 font-bold">{titulo}</h3>
              <p className="text-regular-body text-text-subtle">{descricao}</p>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  );
}
