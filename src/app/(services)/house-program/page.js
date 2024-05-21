"use client";

import Intro from "@/components/Services/HouseProgram/01Intro/Intro";
import Activities from "@/components/Services/HouseProgram/02Activities/Activities";
import { Playfair } from "next/font/google";
import Link from "next/link";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{ backgroundImage: "url('/IJP/ijpBanner.jpg')" }}
      >
        <Link
          href="#contact"
          className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
        >
          <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
            Contact Us
          </button>
        </Link>
      </div>
      <Intro />
      <Activities />
      <h2
        className={`font-medium text-orange-900 text-center py-10`}
        id="contact"
      >
        <span className={`${play.className} text-5xl font-semibold`}>
          CONTACT US:
        </span>{" "}
        9876543210
      </h2>
    </div>
  );
};

export default page;
