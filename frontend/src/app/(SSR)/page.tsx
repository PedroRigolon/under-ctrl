import Hero from "@/components/sections/Hero";
import Banner from "@/components/Banner";
import Problema from "@/components/sections/Problema";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Beneficios from "@/components/sections/Beneficios";
import Produto from "@/components/sections/Produto";
import Preco from "@/components/sections/Preco";
import Faq from "@/components/sections/Faq";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Problema />
      <ComoFunciona />
      <Beneficios />
      <Produto />
      <Preco />
      <Faq />
      <CtaFinal />
    </>
  );
}
