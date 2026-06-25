import Link from "next/link";
import type { ComponentProps } from "react";

interface FooterLink {
  label: string;
  href: ComponentProps<typeof Link>["href"];
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export default function FooterColumn({
  title,
  links,
  className = "",
}: FooterColumnProps) {
  return (
    <div className={`flex flex-col gap-sm ${className}`}>
      <h3 className="text-footer-heading text-tag font-bold uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-xs list-none">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-footer-link text-regular-body hover:text-footer-heading transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
