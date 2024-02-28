import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  
  return (
    <>
      <Link href="/" style={{ display:"block" }}>
        <span className="flex items-center gap-1">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width="32"
          height="32"
          className="relative"
          />
          <div className=" font-sans text-2xl font-bold mb-1">Adscan.AI</div>
          </span>
      </Link>
    </>
  );
};

export default Logo;