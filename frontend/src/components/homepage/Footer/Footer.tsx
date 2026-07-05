import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.svg";
import Text from "@/components/ui/Texts/Text";
import { Lock, ShieldCheck } from "lucide-react";

const columns = [
  {
    heading: "Produto",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Recursos", href: "#recursos" },
      { label: "Preço", href: "#preco" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
      { label: "RC Studio", href: "/rc-studio" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Termos de Uso", href: "/termos" },
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "privacidade@underctrl", href: "mailto:privacidade@underctrl" },
    ],
  },
];

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`w-full bg-footer ${className}`}>
      <div className="flex flex-col gap-lg max-w-page mx-auto py-xl layout-gutter-mobile layout-gutter-desktop">
        {/* marca + colunas de links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-lg">
          <div className="flex flex-col items-start gap-sm">
            <Image src={Logo} width={56} height={56} alt="Logo do Under CTRL" />
            <Text align="left" className="text-mobile! lg:text-regular-body! text-footer-link! max-w-[260px]">
              O sentinela invisível das suas assinaturas. Sem banco conectado,
              sem digitação — só controle.
            </Text>
          </div>
          {columns.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col items-start gap-sm">
              <Text body={false} align="left" className="uppercase font-bold text-mobile! text-footer-heading!">{heading}</Text>
              <ul className="flex flex-col gap-xs">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-footer-link hover:text-footer-heading transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* linha final */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-sm pt-lg border-t border-footer-divider">
          <Text body={false} align="left" className="text-mobile-sm! text-footer-subtle!">
            © 2026 Under CTRL · RC Studio. Todos os direitos reservados.
          </Text>
          <div className="flex flex-wrap items-center gap-md">
            <span className="flex items-center gap-xs">
              <Lock className="size-4 shrink-0 text-primary-light-3" aria-hidden />
              <Text body={false} className="text-mobile-sm! text-footer-subtle! whitespace-nowrap">Conforme a LGPD</Text>
            </span>
            <span className="flex items-center gap-xs">
              <ShieldCheck className="size-4 shrink-0 text-primary-light-3" aria-hidden />
              <Text body={false} className="text-mobile-sm! text-footer-subtle! whitespace-nowrap">Pagamento seguro · Mercado Pago</Text>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
