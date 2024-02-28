import Image from "next/image";
import Hero from "@/components/Navigation/Hero/Hero";
// import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <div className="container mx-auto flex justify-center">
       <Hero/>
      </div>
    </>
  );
}
