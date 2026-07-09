import Section from "@/components/ui/Section";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

export default function Privacidade() {
  return (
    <Section as="main">
      <div className="flex flex-col items-center gap-sm w-full max-w-[640px] layout-gutter-mobile layout-gutter-desktop">
        <Title>Política de Privacidade</Title>
        <Text>
          Seguimos a LGPD. As imagens de recibos são processadas apenas em
          memória e nunca são salvas. Guardamos só o essencial — nome, valor e
          data das suas assinaturas — e nenhum dado bancário. Dúvidas:{" "}
          <a href="mailto:privacidade@underctrl" className="text-primary font-semibold">
            privacidade@underctrl
          </a>
          . Documento completo em breve.
        </Text>
      </div>
    </Section>
  );
}
