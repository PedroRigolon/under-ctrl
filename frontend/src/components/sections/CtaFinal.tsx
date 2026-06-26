import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <Section variant="dark" center>
      <div className="flex flex-col items-center gap-lg">
        <SectionHeader
          as="h2"
          size="h3"
          variant="dark"
          title="Assuma o controle hoje."
          subtitle="Pague uma vez, use para sempre. Comece grátis e veja em segundos quanto você está pagando em assinaturas."
        />

        <Button variant="primary" href="/login">
          Criar conta grátis <ArrowRight className="size-5" />
        </Button>
      </div>
    </Section>
  );
}
