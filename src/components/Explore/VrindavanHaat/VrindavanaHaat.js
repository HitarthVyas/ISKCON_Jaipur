import Link from "next/link";
import React from "react";
import { haatData } from "./haatData";
import Image from "next/image";
import { Dancing_Script, Playfair } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const VrindavanaHaat = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{ backgroundImage: "url('/Explore/VrindavanHaat/haat-banner.jpg')" }}
      >
        <Link
          href="#contact"
          className="absolute w-full hover:scale-110 transition-all duration-300 flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
        >
          <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="py-10 bg-[#e5b776]">
        <h1
          className={`${dancing.className} pb-10 text-7xl sm:text-8xl font-extrabold text-center text-white`}
        >
          Categories
        </h1>
        <div className="flex gap-10 flex-wrap justify-center">
          {haatData.map((haat, i) => (
            <div key={i} className="bg-white w-72 sm:w-80 p-2 flex items-center flex-col">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <Image
                  src={`/Explore/VrindavanHaat/${haat.image}`}
                  alt="ISKCON Value Education"
                  layout="fill"
                  objectFit="contain"
                  className="object-scale-down"
                />
              </div>
              <button
                className={`font-medium px-3 py-1 bg-[#d17a29] rounded-full text-white m-1`}
              >
                {haat.title}
              </button>
            </div>
          ))}
        </div>
      </div>
      <h2
        className={`font-medium text-orange-900 text-center py-10`}
        id="contact"
      >
        <span className={`${play.className} text-5xl font-semibold`}>
          CONTACT US:
        </span>{" "}
        9772203474
      </h2>
    </div>
  );
};

export default VrindavanaHaat;
