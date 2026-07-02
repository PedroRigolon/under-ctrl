import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Phone from "@/components/ui/Phone"
import Title from "@/components/ui/Texts/Title";
import Text from "@/components/ui/Texts/Text";

import Hero from "@/components/homepage/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      
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
