import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Texts/Tag";
import Title, { TitleCard } from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

const problems = [
  {
    n: "01",
    title: `O "teste grátis" que virou cobrança fixa`,
    text: "Você assinou pra testar, esqueceu de cancelar, e agora paga todo mês sem nem usar.",
  },
  {
    n: "02",
    title: "A conta que só cresce",
    text: "Cinco, dez, quinze assinaturas. Somadas, viram um valor que assusta — e você nem tinha percebido.",
  },
  {
    n: "03",
    title: "A planilha que você nunca atualiza",
    text: "Controlar tudo na mão dá trabalho demais. Aí você desiste — e volta a ser pego de surpresa.",
  },
];

const costs = [
  { label: "Streaming", price: "R$ 55,90" },
  { label: "Música", price: "R$ 21,90" },
  { label: "Armazenamento", price: "R$ 12,90" },
  { label: "Academia (app)", price: "R$ 49,90" },
  { label: "Cursos", price: "R$ 34,90" },
  { label: "+ outras 4 menores", price: "R$ 11,50" },
];

export default function Problem() {
  return (
    <Section as="section" id="problema">
      {/* grid */}
      <div className="grid grid-cols-1 gap-lg lg:gap-xl w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
        {/* Textos */}
        <div className="flex flex-col lg:max-w-2/3 gap-sm">
          <div className="flex flex-col gap-xs lg:gap-sm">
            <Tag alert>O PROBLEMA</Tag>
            <Title align="left">
              Você provavelmente paga mais em assinaturas do que imagina.
            </Title>
          </div>
          <Text align="left">
            As cobranças recorrentes são silenciosas. Elas continuam saindo da
            sua conta mesmo quando você já esqueceu que existiam.
          </Text>
        </div>

        {/* Lista e card */}
        <div className="flex flex-col lg:flex-row gap-lg lg:gap-xl justify-between items-start">
          {/* lista */}
          <ul className="w-full lg:max-w-3/5 flex flex-col gap-md">
            {problems.map(({ n, title, text }, i) => (
              <li
                key={n}
                className={`flex gap-sm lg:gap-lg justify-between items-top p-sm ${i < problems.length - 1 ? "border-b border-text-subtle" : ""}`}
              >
                <h2 className="font-extrabold! text-alert!">{n}</h2>
                <div className="flex flex-col items-start gap-xxs">
                  <TitleCard align="left">{title}</TitleCard>
                  <Text align="left">{text}</Text>
                </div>
              </li>
            ))}
          </ul>

          {/* card da soma */}
          <div className="w-full lg:max-w-2/5 flex flex-col gap-sm bg-primary-darker rounded p-md lg:p-lg">
            <Text body={false} align="left" className="uppercase font-semibold text-mobile! text-primary-light!">
              Soma real de um usuário médio
            </Text>
            <p className="text-components!">
              <span className="text-h4 lg:text-h3 font-bold">R$ 187</span>{" "}
              <span className="text-primary-light!">/mês</span>
            </p>
            <ul className="flex flex-col">
              {costs.map(({ label, price }) => (
                <li
                  key={label}
                  className="flex justify-between items-center py-xs border-b border-components/15"
                >
                  <Text body={false} align="left" className="text-mobile! text-grey-light-3!">{label}</Text>
                  <Text body={false} align="right" className="text-mobile! text-components!">{price}</Text>
                </li>
              ))}
            </ul>
            <Text body={false} align="left" className="font-semibold text-mobile! text-alert!">
              Você lembrava de todas?
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
}
