import { ReactNode } from "react";

interface TagProps {
  dark?: boolean;
  children: ReactNode;
  alert?: boolean;
}

// Pill de eyebrow das seções. `alert` = tom vermelho; `dark` = pill clara p/ seções escuras.
export default function Tag({ dark = false, alert = false, children }: TagProps) {
  const bg = alert ? "bg-alert-subtle" : dark ? "bg-components" : "bg-primary-subtle";
  return (
    <div className={`w-fit rounded-full px-sm py-xxs ${bg}`}>
      <p className={`uppercase font-semibold text-tag-mobile! lg:text-tag-desktop! ${alert ? "text-alert!" : "text-primary-dark!"}`}>
        {children}
      </p>
    </div>
  );
}
