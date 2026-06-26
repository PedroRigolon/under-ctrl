import Brand from "@/components/ui/Brand";
import FooterColumn from "@/components/ui/FooterColumn";
import { ShieldCheck } from "lucide-react";

const produto = [
  { label: "Como funciona", href: "#" },
  { label: "Recursos", href: "#" },
  { label: "Preço", href: "#" },
  { label: "FAQ", href: "#" },
];

const empresa = [
  { label: "Sobre", href: "#" },
  { label: "Contato", href: "#" },
  { label: "RC Studio", href: "#" },
];

const legal = [
  { label: "Termos de Uso", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "privacidade@underctrl", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-footer mb-navbar-desktop md:mb-0">
      <div className="px-gutter-mobile lg:max-w-page lg:mx-auto pt-xl pb-xxl md:pb-xl flex flex-col gap-xl">
        <div className="flex flex-col gap-xl md:flex-row md:justify-between">
          <div className="flex flex-col gap-md md:max-w-50 lg:max-w-80">
            <Brand />
            <p className="text-footer-link text-regular-body">
              O sentinela invisível das suas assinaturas. Sem banco conectado,
              sem digitação — só controle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-lg md:flex md:gap-xl lg:gap-xxxl">
            <FooterColumn title="PRODUTO" links={produto} />
            <FooterColumn title="EMPRESA" links={empresa} />
            <FooterColumn
              title="LEGAL"
              links={legal}
              className="col-span-2 md:col-span-1"
            />
          </div>
        </div>

        <div className="border-t border-footer-divider pt-lg flex flex-col gap-sm md:flex-row md:items-center md:justify-between text-footer-subtle text-mobile">
          <p>© 2026 Under CTRL · RC Studio. Todos os direitos reservados.</p>
          <div className="flex flex-col gap-xs md:flex-row md:items-center md:gap-lg">
            <span className="flex items-center gap-xs">
              <ShieldCheck className="hidden md:block size-5 text-primary" />
              <span className="flex gap-xs">
                Pagamento seguro <span>-</span>
                <span>Mercado Pago</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
