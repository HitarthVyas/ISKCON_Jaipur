"use client";

import Features from "@/components/Explore/Govindas/01Features/Features";
import About from "@/components/Explore/Govindas/02About/About";
import Parties from "@/components/Explore/Govindas/03Parties/Parties";
import Details from "@/components/Explore/Govindas/04Details.js/Details";

const page = () => {
  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-top"
        style={{ backgroundImage: "url('/Explore/Govindas/govindas.jpg')" }}
      >
        <div className="absolute h-screen inset-0 bg-black/50"></div>
        <div className="absolute top-[40vh] w-full flex justify-center">
          <img src="/Explore/Govindas/Govindas_Logo.png" className="md:w-auto w-9/12" />
        </div>
      </div>
      <Features />
      <About />
      <Parties />
      <Details />
    </div>
  );
};

export default page;
