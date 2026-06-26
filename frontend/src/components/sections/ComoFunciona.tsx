import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const passos = [
  {
    titulo: "Envie a imagem",
    descricao:
      "Foto do recibo, da fatura ou da tela do plano. A IA lê nome, valor e data automaticamente — você não precisa digitar nada.",
  },
  {
    titulo: "Confira os dados e salve.",
    descricao:
      "Os dados chegam prontos para revisão. Você confirma com um clique. A decisão final é sempre sua.",
  },
  {
    titulo: "Receba o aviso",
    descricao:
      "Alertas por e-mail ou Telegram a 7 dias, 3 dias e 24h de cada renovação. Renove com calma ou cancele a tempo.",
  },
];

export default function ComoFunciona() {
  return (
    <Section>
      <div className="flex flex-col gap-xl">
        <SectionHeader
          as="h2"
          size="h3"
          eyebrow="A solução · Como funciona"
          title="Cadastre uma vez. Esqueça o resto."
          subtitle="O Under CTRL faz o trabalho chato por você — em três passos simples."
          className="mx-auto"
        />

        <ol className="grid list-none gap-md md:grid-cols-3">
          {passos.map(({ titulo, descricao }, i) => (
            <Card as="li" key={titulo} className="flex flex-col gap-sm">
              <div className="relative aspect-video w-full bg-grey-light-3">
                <span className="absolute right-sm top-sm flex size-8 items-center justify-center rounded-full bg-primary-subtle text-regular-body font-bold text-primary">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-h5 font-bold">{titulo}</h3>
              <p className="text-regular-body text-text-subtle">{descricao}</p>
            </Card>
          ))}
        </ol>
      </div>
    </Section>
  );
}
