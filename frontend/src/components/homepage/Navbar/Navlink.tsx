import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface NavlinkProps {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  isMain?: boolean;
  Icon: LucideIcon;
}

export default function Navlink({
  href,
  children,
  isMain = false,
  Icon,
}: NavlinkProps) {
  if (isMain) {
    return (
      <Link
        href={href}
        className="flex flex-col items-center  font-bold text-primary max-[375px]:text-mobile-sm text-mobile text-center w-10 sm:w-20 -translate-y-7 sm:-translate-y-10 "
      >
        <span className="flex items-center  justify-center rounded-full bg-primary text-components border-6 border-components p-sm ">
          <Icon />
        </span>
        {children}
      </Link>
    );
  }

  return (
    <li className="list-none">
      <Link
        href={href}
        className="text-text max-[375px]:text-mobile-sm text-mobile text-center flex flex-col items-center gap-xs w-10  sm:w-20 md:w-auto md:p-2"
      >
        <span className="md:hidden">
          <Icon />
        </span>
        {children}
      </Link>
    </li>
  );
}
