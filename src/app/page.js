import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Promo from "@/components/Promo/Promo";
// import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <div className="container mx-auto flex justify-center flex-col">
       <Hero/>
       <Promo/>
      </div>
    </>
  );
}
