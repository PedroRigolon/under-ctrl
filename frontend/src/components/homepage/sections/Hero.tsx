import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Phone from "@/components/ui/Phone";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

export default function Hero() {
  const line:string =`box-decoration-clone bg-no-repeat px-[0.04em]
    bg-[linear-gradient(rgb(47_158_68/0.34),rgb(47_158_68/0.34))]
    bg-[length:100%_42%] bg-[position:0_88%]`;

  return (
    <>
      <Section as="main">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-0 pt-xl md:pt-0 w-full max-w-page layout-gutter-mobile layout-gutter-desktop">
          {/* col 1 - text*/}
          <div className="flex flex-col w-full gap-lg h-full">
            {/* titulo e texto */}
            <div className="flex flex-col gap-md">
              <Title>
                <span className={line}>
                  Nenhuma
                </span>{" "}
                cobrança vai te{" "}
                <span>
                  pegar de{" "}
                  <span className={line}>
                    surpresa
                  </span>
                </span>
                .
              </Title>
              <Text>
                O Under CTRL vigia suas assinaturas e te avisa por e-mail ou
                Telegram antes de cada renovação. Você decide o que continua.
              </Text>
            </div>

            {/* botoes */}
            <div className="flex flex-col lg:flex-row gap-md px-[3px]">
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
          <div className="flex flex-col justify-center items-center md:items-end lg:pr-lg w-full h-full">
            <Phone />
          </div>
        </div>
      </Section>
    </>
  );
}
