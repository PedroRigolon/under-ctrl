import Hero from "@/components/homepage/sections/Hero";
import Banner from "@/components/homepage/Banner/Banner";
import Problem from "@/components/homepage/sections/Problem";
import Solucao from "@/components/homepage/sections/Solucao";
import PorQue from "@/components/homepage/sections/PorQue";
import Produto from "@/components/homepage/sections/Produto";
import Preco from "@/components/homepage/sections/Preco";
import Faq from "@/components/homepage/sections/Faq";
import FinalCta from "@/components/homepage/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Problem />
      <Solucao />
      <PorQue />
      <Produto />
      <Preco />
      <Faq />
      <FinalCta />
    </>
  );
}
