import type { Metadata } from "next";
import Link from "next/link";
import Brand from "@/components/ui/Brand";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Entrar — Under CTRL" };

const subs = [
  { name: "Netflix", price: "R$ 55,90" },
  { name: "Spotify", price: "R$ 21,90" },
  { name: "iCloud+", price: "R$ 14,90" },
  { name: "Amazon Prime", price: "R$ 19,90", forgotten: true },
  { name: "Disney+", price: "R$ 27,90", forgotten: true },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.4 3.62v3h3.87c2.27-2.09 3.58-5.17 3.58-8.81Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3.01c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.29a12 12 0 0 0 0 10.74l3.98-3.1Z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44A11.98 11.98 0 0 0 1.29 6.63l3.98 3.1C6.22 6.88 8.87 4.77 12 4.77Z" />
    </svg>
  );
}

export default function Login() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-dvh w-full">
      {/* painel escuro: a conta das assinaturas esquecidas */}
      <section className="bg-linear-to-b from-primary-dark to-primary-darker flex flex-col md:justify-center gap-md md:gap-lg p-gutter-mobile md:p-gutter-sm lg:p-gutter-md">
        <Brand className="w-12" />
        <div className="flex flex-col gap-lg md:max-w-[480px]">
          <Title align="left" className="text-components!">
            Quanto você paga? Provavelmente mais do que imagina.
          </Title>

          {/* total compacto — só mobile */}
          <p className="md:hidden text-components!">
            <span className="text-h5 font-bold underline decoration-alert decoration-4 underline-offset-4">R$ 1.200</span>{" "}
            <span className="text-mobile text-grey-light">/ano em média</span>
          </p>

          {/* lista: 2 colunas sem preço no mobile, lista completa no md+ */}
          <ul className="grid grid-cols-2 gap-x-md md:flex md:flex-col">
            {subs.map(({ name, price, forgotten }) => (
              <li key={name} className="flex flex-wrap items-center gap-xs py-xs md:py-sm md:border-b md:border-components/15">
                <span className="size-2 rounded-full bg-alert shrink-0" />
                <Text body={false} align="left" className="text-mobile! text-components! whitespace-nowrap">{name}</Text>
                {forgotten && (
                  <Text body={false} className="uppercase font-semibold text-mobile-sm! text-alert! bg-alert-subtle rounded-full px-xs py-xxs whitespace-nowrap">
                    esquecida
                  </Text>
                )}
                <Text body={false} align="right" className="hidden md:block ml-auto font-semibold text-mobile! text-components!">{price}</Text>
              </li>
            ))}
          </ul>

          {/* total + nota — só desktop */}
          <div className="hidden md:flex justify-between items-end pb-sm border-b border-components/15">
            <Text body={false} align="left" className="text-grey-light!">Total no ano</Text>
            <p className="text-components!">
              <span className="text-h4 font-bold underline decoration-alert decoration-4 underline-offset-8">R$ 1.200</span>{" "}
              <span className="text-mobile text-grey-light">/ano</span>
            </p>
          </div>
          <Text body={false} align="left" className="hidden md:block text-mobile! text-grey-light!">
            <span className="font-bold text-components">R$ 570/ano</span> só nas duas que você nem lembrava de ter.
          </Text>
        </div>
      </section>

      {/* formulário */}
      <section className="bg-background flex justify-center items-center p-gutter-mobile py-xl md:p-gutter-sm">
        <div className="w-full max-w-[400px] flex flex-col gap-md">
          <Brand className="w-16" />
          <div className="flex flex-col gap-xs">
            <Title align="left">Crie sua conta grátis</Title>
            <Text align="left">Descubra suas {'"esquecidas"'} — sem conectar banco.</Text>
          </div>

          <button
            type="button"
            className="flex justify-center items-center gap-xs bg-components border border-border rounded py-xs font-semibold transition-shadow hover:shadow-sm"
          >
            <GoogleIcon />
            Continuar com Google
          </button>

          <div className="flex items-center gap-sm">
            <span className="flex-1 border-t border-border" />
            <Text body={false} className="text-mobile-sm!">ou com e-mail</Text>
            <span className="flex-1 border-t border-border" />
          </div>

          <label className="flex flex-col gap-xs">
            <Text body={false} align="left" className="text-mobile!">E-mail</Text>
            <input
              type="email"
              placeholder="voce@email.com"
              className="w-full bg-transparent border-b border-border py-xs outline-none focus:border-primary placeholder:text-grey-light"
            />
          </label>

          <Button variant="primary" size="lg" Icon={ArrowRight} className="w-full">
            Receber link mágico
          </Button>

          <label className="flex items-center gap-xs">
            <input type="checkbox" className="size-4 accent-primary" />
            <Text body={false} align="left" className="text-mobile!">
              Aceito os <Link href="/termos" className="text-primary font-semibold">Termos</Link> e confirmo ter 18+.
            </Text>
          </label>

          <Link href="/" className="flex items-center gap-xs w-fit text-mobile text-text-subtle hover:text-text transition-colors">
            <ArrowLeft className="size-4" aria-hidden /> Voltar
          </Link>
        </div>
      </section>
    </main>
  );
}
