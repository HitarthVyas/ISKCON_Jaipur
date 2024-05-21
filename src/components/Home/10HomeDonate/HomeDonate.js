"use client";
import { Dancing_Script, Kanit, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { donate } from "./donateData";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomeDonate = () => {
  return (
    <div className="pb-14 bg-white">
      <div className={`pt-16 pb-4 text-center ${dancing.className}`}>
        <h1 className="text-6xl font-[900]">Recieve Blessings from</h1>
        <h1 className="text-6xl font-[900]">Sri Sri Giridhari Dauji</h1>
      </div>
      <div>
        <div className="pt-10 flex md:flex-row flex-col justify-evenly gap-4">
          {donate.map((d, i) => (
            <Link
              href={d.link}
              key={i}
              className="flex flex-col items-center pb-4 text-gray-600 hover:text-gray-600 hover:no-underline"
            >
              <div className="text-center shadow-md mt-2 ml-2 hover:mt-0 hover:ml-0 hover:mr-2 hover:mb-2 transition-all duration-300">
                <img
                  src={d.image}
                  className="h-[120px] w-[220px] object-cover object-center"
                />
                <h1 className={`${dancing.className} pt-4 font-black px-2`}>
                  {d.title}
                </h1>
                <button className="px-2 py-1 bg-[#d17a29] mb-2 text-white rounded-full mt-1">
                  Donate
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDonate;
