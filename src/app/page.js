import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Promo from "@/components/Promo/Promo";
import Brands from "@/components/CompetitorSection/Brands";
import Research from "@/components/CompetitorSection/Research";
import SaveAdsFromMeta from "@/components/CompetitorSection/SaveAdsFromMeta";
import Review from "@/components/Reviews/Review";
import StartWinning from "@/components/Reviews/StartWinning";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex justify-center flex-col" >
       <Hero/>
       <Promo/>
       <Brands/>
       <Research/>
       <SaveAdsFromMeta/>
       <Review/>
       <StartWinning/>
      </div>
    </>
  );
}
