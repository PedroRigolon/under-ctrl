import Image from "next/image";
import Logo_text from "../../../public/logo+text.svg";
import Logo from "../../../public/logo.svg";

interface BrandProps{
  text?:boolean,
}

export default function Brand({text = false}:BrandProps) {
  return (
    <div className="flex justify-start items-center">
      <Image
        src={text ? Logo_text : Logo}
        width={32}
        height={32}
        className="w-32 h-auto"
        alt="Logo do Under CTRL"
      />
    </div>
  );
}
