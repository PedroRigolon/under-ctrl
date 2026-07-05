import Section from "@/components/ui/Section";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

export default function Sobre() {
  return (
    <Section as="main">
      <div className="flex flex-col items-center gap-sm w-full max-w-[640px] layout-gutter-mobile layout-gutter-desktop">
        <Title>Sobre o Under CTRL</Title>
        <Text>
          O Under CTRL nasceu de um problema simples: assinaturas que renovam em
          silêncio. Somos o sentinela invisível das suas assinaturas — sem banco
          conectado, sem digitação, só controle. Você cadastra com um print, a
          IA lê os dados e a gente te avisa antes de cada renovação.
        </Text>
      </div>
    </Section>
  );
}
