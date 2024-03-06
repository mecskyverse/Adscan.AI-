"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

const Navigation = () => {
  // toggle sidebar
  return (
    <div className="h-16 mt-auto mb-auto bg-black bg-opacity-90 sticky top-0 z-50">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Navigation;