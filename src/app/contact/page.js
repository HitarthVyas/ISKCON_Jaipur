"use client";

import ContactIcons from "@/components/Contact/01ContactIcons/ContactIcons";
import ContactForm from "@/components/Contact/02ContactForm/ContactForm";
import Queries from "@/components/Contact/02Queries/Queries";
import Maps from "@/components/Contact/03Map/Maps";
import SocialMedia from "@/components/Contact/04SocialMedia/SocialMedia";
import { Architects_Daughter, Dancing_Script, Playfair } from "next/font/google";

const play = Dancing_Script({
  subsets: ["latin"],
  // weight: ["400"],
})

const page = () => {
  return (
    <div className="bg-gradient-to-bl from-yellow-200 via-orange-200 to-red-200">
      {/* <img
        src="/Contact/Contact_Us.png"
        className="w-full h-screen object-cover mt-16"
      /> */}
      <div
        style={{ backgroundImage: "url('/Contact/Contact_Us.png')" }}
        className="w-full h-screen bg-cover mt-16 flex items-center justify-center"
      >
        <h1
          className={`${play.className} text-gray-100 text-6xl sm:text-8xl text-center`}
          style={{ textShadow: "0px 0px 5px black, 0px 0px 5px black" }}
        >
          Contact Us
        </h1>
      </div>
      <ContactIcons />
      <div className="flex flex-wrap gap-10 items-center justify-evenly pb-10">
        <Queries />
        <Maps />
      </div>
      {/* <ContactForm /> */}
      <SocialMedia />
    </div>
  );
};

export default page;
