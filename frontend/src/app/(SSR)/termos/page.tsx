import Section from "@/components/ui/Section";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

export default function Termos() {
  return (
    <Section as="main">
      <div className="flex flex-col items-center gap-sm w-full max-w-[640px] layout-gutter-mobile layout-gutter-desktop">
        <Title>Termos de Uso</Title>
        <Text>
          O Under CTRL é uma ferramenta de organização de assinaturas. O plano
          gratuito tem limites de uso; o plano Pro é um pagamento único
          (lifetime), processado via Mercado Pago, sem mensalidade. A IA apenas
          pré-preenche formulários a partir das imagens enviadas — toda decisão
          final é sua. Documento completo em breve.
        </Text>
      </div>
    </Section>
  );
}
