import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Phone from "@/components/ui/Phone"
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";
import { BellRing, Send, ShieldCheck, Wallet } from "lucide-react";

import Hero from "@/components/homepage/sections/Hero";

const bannerItems = [
  { Icon: BellRing, label: "Alertas 7, 3 e 1 dia antes" },
  { Icon: Send, label: "Avisos por e-mail e Telegram" },
  { Icon: ShieldCheck, label: "Seus dados nunca são salvos" },
  { Icon: Wallet, label: "Pague uma vez, use pra sempre" },
];

export default function Home() {
  return (
    <>
      <Hero />

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

      <Section as="section">
        <div className="bg-yellow-400 flex justify-center items-center min-h-50 w-full layout-gutter-mobile layout-gutter-desktop">
          <div className="bg-red-400 h-full  w-full">
            <Text>olá</Text>
          </div>
        </div>
      </Section>
    </>
  );
}
