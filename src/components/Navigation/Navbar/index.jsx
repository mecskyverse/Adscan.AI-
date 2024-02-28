import React from "react";
import Link from "next/link";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <nav className="h-full mx-auto max-w-[1280px] ">
      <div className="container mx-auto px-4 h-full w-full ">
        <div className="flex justify-between items-center h-full w-full">
          <Logo />
          <ul className="hidden md:flex md:items-center gap-x-6 text-white nav-items">
            <li>
              <Link href="/pricing">
                <p className="font-sans font-semibold text-base ">Pricing</p>
              </Link>
            </li>
            <li>
              <Link href="/Login">
                <button className="border border-[hsla(0,0%,100%,.12)] px-4 py-2 font-sans font-semibold rounded-xl bg-[#1c1d23f2] transition duration-300 ease-in-out  hover:bg-[#3f3f46]">Log in</button>
              </Link>
            </li>
            <li>
              <Link href="/onboarding" className=" px-4 py-2 font-sans font-semibold rounded-xl bg-[#f66c30] transition duration-300 ease-in-out  hover:bg-[#ac4b21]">
                <button>Start free trial</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;