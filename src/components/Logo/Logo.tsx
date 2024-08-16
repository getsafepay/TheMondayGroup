import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href={"/"}
      className="inline-flex text-sm  text-left visited:text-button-primary p-0.5 rounded-lg"
    >
      <div className="flex z-10">
        <Image
          src="/images/LogoTMG.png"
          width={250}
          height={100}
          className="block"
          alt="Logo"
        />
      </div>
    </Link>
  );
}
