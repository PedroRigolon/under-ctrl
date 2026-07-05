import Text from "@/components/ui/Texts/Text";
import { BellRing, Send, ShieldCheck, Wallet } from "lucide-react";

const bannerItems = [
  { Icon: BellRing, label: "Alertas 7, 3 e 1 dia antes" },
  { Icon: Send, label: "Avisos por e-mail e Telegram" },
  { Icon: ShieldCheck, label: "Seus dados nunca são salvos" },
  { Icon: Wallet, label: "Pague uma vez, use pra sempre" },
];


// Faixa verde full-bleed logo abaixo do hero. Empilha no mobile e vira uma linha
// distribuída a partir de `md:`. Usa o mesmo ritmo de container/gutters das demais barras.
export default function Banner() {
  return (
    <>
    {/* banner */}
          <div className="flex justify-center items-center w-full bg-primary-dark min-h-banner-mobile md:min-h-banner-desktop py-md md:py-0">
            <div className="grid grid-cols-2 md:grid-cols-4 w-full items-center gap-sm max-w-page layout-gutter-mobile layout-gutter-desktop">
              {bannerItems.map(({ Icon, label }) => (
                <div key={label} className="flex justify-center items-center gap-xs ">
                  <Icon className="size-5 shrink-0 text-primary-light" aria-hidden />
                  <Text className="lg:text-regular-body! text-components!">
                    {label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
    </>
  );
}
