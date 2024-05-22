"use client";

import { Dancing_Script } from "next/font/google";
import { exps } from "./homeexpData";
import Link from "next/link";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeExplore = () => {
  return (
    <>
      <div className={`pt-16 text-center bg-white ${dancing.className}`}>
        <h1 className="text-6xl font-[900]">Explore ISKCON</h1>
        <h1 className="text-6xl font-[900] m-0">Jaipur</h1>
      </div>
      <div className="flex flex-wrap md:gap-40 gap-10 md:gap-y-20 justify-evenly max-w-screen-xl mx-auto my-10 bg-white">
        {exps.map((exp, i) => (
          <Link
            key={i}
            href={exp.link}
            className="hover:bg-[#d17a29] p-2 rounded-lg max-w-80 hover:text-white transition-all duration-300 text-gray-800 no-underline hover:no-underline"
          >
            <img
              className={`h-[175px] w-[175px] m-auto object-cover object-center rounded-full`}
              src={exp.image}
            />
            <h1
              className={`${dancing.className} pt-4 text-center font-black m-0`}
            >
              {exp.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomeExplore;
