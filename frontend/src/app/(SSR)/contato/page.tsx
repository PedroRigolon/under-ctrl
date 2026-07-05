import Section from "@/components/ui/Section";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

export default function Contato() {
  return (
    <Section as="main">
      <div className="flex flex-col items-center gap-sm w-full max-w-[640px] layout-gutter-mobile layout-gutter-desktop">
        <Title>Contato</Title>
        <Text>
          Dúvidas, sugestões ou problemas? Fale com a gente pelo e-mail{" "}
          <a href="mailto:privacidade@underctrl" className="text-primary font-semibold">
            privacidade@underctrl
          </a>
          . Respondemos o mais rápido possível.
        </Text>
      </div>
    </Section>
  );
}
