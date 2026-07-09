import Section from "@/components/ui/Section";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

export default function RcStudio() {
  return (
    <Section as="main">
      <div className="flex flex-col items-center gap-sm w-full max-w-[640px] layout-gutter-mobile layout-gutter-desktop">
        <Title>RC Studio</Title>
        <Text>
          O RC Studio é o estúdio por trás do Under CTRL. Criamos produtos
          digitais simples, diretos e que respeitam os dados de quem usa.
        </Text>
      </div>
    </Section>
  );
}
