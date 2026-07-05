import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <Section as="section" bg="bg-primary-darker" full={false}>
      <div className="flex flex-col items-center gap-lg w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
        <div className="flex flex-col items-center gap-xs lg:gap-sm max-w-[560px]">
          <Title className="text-components!">Assuma o controle hoje.</Title>
          <Text className="text-grey-light!">
            Pague uma vez, use para sempre. Comece grátis e veja em segundos
            quanto você está pagando em assinaturas.
          </Text>
        </div>
        <Button variant="primary" size="lg" href="/login" Icon={ArrowRight}>
          Criar conta grátis
        </Button>
      </div>
    </Section>
  );
}
