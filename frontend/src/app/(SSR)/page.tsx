import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Phone from "@/components/ui/Phone"
export default function Home() {
  return (
    <>
      <Section as="main" bg="bg-text">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md w-full max-w-page layout-gutter-mobile layout-gutter-desktop md:layout-gutter-desktop bg-red-500">
          {/* col 1 - text*/}
          <div className="flex flex-col w-full gap-md h-full  bg-primary">
            <div className="flex flex-col gap-sm">
              <h5>Nenhuma cobrança vai te pegar de surpresa.</h5>
              <p>
                O Under CTRL vigia suas assinaturas e te avisa por e-mail ou
                Telegram antes de cada renovação. Você decide o que continua.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-lg px-[3px]">
              <Button variant="primary" href="/login">
                Criar conta grátis
              </Button>
              <Button variant="secondary" href="/login">
                Como funciona?
              </Button>
              
            </div>
            <div>{/* componente de atributos */}</div>
          </div>

          {/* col 2 - phone*/}
          <div className="flex flex-col w-full h-full bg-blue-500">
            <Phone />
          </div>
        </div>
      </Section>
      <Section as="section"></Section>
    </>
  );
}
