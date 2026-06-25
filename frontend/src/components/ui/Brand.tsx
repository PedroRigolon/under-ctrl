import Image from "next/image";
import Logo from "../../../public/logo_CTRL.svg";

export default function Brand() {
  return (
    <div className="flex justify-start items-center gap-xs">
      <Image
        src={Logo}
        width={32}
        height={32}
        className="w-12 h-auto"
        alt="Logo do Under CTRL"
      />
      <span className="text-regular-body text-primary">
        Under <span className="text-regular-body font-bold text-green-800">CTRL</span>
      </span>
    </div>
  );
}
