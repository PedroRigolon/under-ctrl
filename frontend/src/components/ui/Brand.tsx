import Image from "next/image";
import Logo_text from "../../../public/logo+text.svg";
import Logo from "../../../public/logo.svg";

interface BrandProps{
  text?:boolean,
  className?:string,
}

export default function Brand({text = false, className = "w-32"}:BrandProps) {
  return (
    <div className="flex justify-start items-center">
      <Image
        src={text ? Logo_text : Logo}
        width={32}
        height={32}
        className={`h-auto ${className}`}
        alt="Logo do Under CTRL"
      />
    </div>
  );
}
