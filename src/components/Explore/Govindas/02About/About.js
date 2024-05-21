"use client";

import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancing = Dancing_Script({
  subsets: ["latin"],
  // weight: ["400"],
});

const About = () => {
  return (
    <div className="flex lg:pl-10 justify-center gap-5 xl:gap-10 bg-[#d17a29] text-white">
      <div className="lg:text-left lg:w-full mt-5 2xl:min-w-[660px] 2xl:max-w-[660px] py-10 px-5 lg:p-0">
        <h5 className="text-[#3e4991] ml-2">Hare Krishna</h5>
        <hr className="w-1/3 mt-2" />
        <h2
          className={`${dancing.className} font-medium text-4xl 2xl:text-6xl`}
        >
          About Govindas
        </h2>
        <p className="pb-0 text-lg mt-5 font-medium text-justify">
          We are happy to share with you that Govinda's Restaurant, Iskcon
          Jaipur is a pure Vegetarian (No Onion, No Garlic) North Indian, South
          Indian, Italian and Chinese Restaurant, Providing High quality and
          tasty food prasadam with hygiene to all our Local and International
          customers for the last 14 years. The food prasadam is prepared by our
          in-house, well trained devotee cooks team.
        </p>
        <p className="pb-0 text-lg mt-2 font-medium text-justify">
          100 % Pure and Vegetarian Cakes and Pastries made by Govinda's are
          available at the De Cafe counter of Govinda's and available for the
          home delivery as well. At the De cafe snacks and sweet counter we
          provide a large number of snacks , juices, icecreams, pastries , Cakes
          and sweets etc.
        </p>
        <Link className="flex justify-center lg:block no-underline text-white hover:text-white" href="#contact">
          <button className="bg-slate-500 mb-10 lg:mb-0 mt-14 2xl:mt-10 rounded-sm px-4 py-2 mt">
            CONTACT US
          </button>
        </Link>
      </div>
      <img
        src="/Explore/Govindas/govindas.jpg"
        className="h-[550px] overflow-hidden hidden lg:block lg:w-1/2 2xl:w-full object-cover"
      />
    </div>
  );
};

export default About;
